<template>
  <div class="layout-px-spacing">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">CapitalQuick</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>Razones Financieras </span>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </teleport>

    <div class="account-settings-container layout-top-spacing">
      <div class="account-content">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
            <form id="general-info" class="section general-info">
              <div class="info">
                <h6 class="">Agregar Razon Financiera</h6>
                <div class="row">
                  <div class="col-lg-11 mx-auto">
                    <div class="row">
                      <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                        <div class="form">
                          <div class="row">
                            <div class="col-4">
                              <div class="form-group">
                                <label for="RazonF">Razon Financiera</label>
                                <select
                                  v-model="Razon.nombre"
                                  id="RazonF"
                                  class="form-select mb-4"
                                  require
                                >
                                  <option value disabled selected>
                                    Seleccione
                                  </option>
                                  <option value="Liquidez Corriente" selected>
                                    Liquidez Corriente
                                  </option>
                                  <option value="Razon Rapida" selected>
                                    Razon Rapida
                                  </option>
                                  <option
                                    value="Margen utilidad Bruta"
                                    selected
                                  >
                                    Margen utilidad Bruta
                                  </option>
                                  <option
                                    value="Margen utilidad operativa"
                                    selected
                                  >
                                    Margen utilidad operativa
                                  </option>
                                  <option value="Margen utilidad Neta" selected>
                                    Margen utilidad Neta
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="form-group">
                                <label for="ValorR">Valor </label>
                                <input
                                  type="text"
                                  name=""
                                  class="form-control mb-4"
                                  id="ValorR"
                                  placeholder="Ingrese Valor Razon"
                                  v-model="Razon.valor"
                                />
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="form-group">
                                <label for="year">Año Asociado</label>
                                <select
                                  v-model="Razon.year"
                                  id="year"
                                  class="form-select mb-4"
                                  require
                                >
                                  <option value disabled selected>
                                    Seleccione
                                  </option>
                                  <option value="year_1" selected>
                                    Promedio de la Industria
                                  </option>
                                  <option value="year_2" selected>
                                    Año 2022
                                  </option>
                                  <option value="year_3" selected>
                                    Año 2023
                                  </option>
                                  <option value="year_4" selected>
                                    Año 2024
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="account-settings-footer">
        <div class="as-footer-container">
          <button type="button" class="btn btn-primary" @click="clearDatos">
            Limpiar Todo
          </button>
          <button
            type="button"
            class="btn btn-success"
            @click="guardarnewFlujo"
          >
            Crear
          </button>
        </div>
      </div>
    </div>
    <div class="row layout-top-spacing">
      <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
        <div class="panel br-6">
          <div class="custom-table">
            <v-client-table
              :data="items"
              :columns="columns"
              :options="table_option"
            >
              <template #id="props">
                {{ props.row.id }}
              </template>
              <template #razon="props">
                {{ props.row.razon }}
              </template>
              <template #year_1="props">
                {{ parseFloat(props.row.year_1).toFixed(2) || "N/A" }}
              </template>
              <template #year_2="props">
                {{ parseFloat(props.row.year_2).toFixed(2) || "N/A" }}
              </template>
              <template #year_3="props">
                {{ parseFloat(props.row.year_3).toFixed(2) || "N/A" }}
              </template>
              <template #year_4="props">
                {{ parseFloat(props.row.year_4).toFixed(2) || "N/A" }}
              </template>
            </v-client-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/sass/users/account-setting.scss";
import * as msg from "@/helpers/mensajes";
import * as flujoService from "@/services/compras";
//import * as grupoService from "../../services/grupos";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      items: [],
      columns: ["id", "razon", "year_1", "year_2", "year_3", "year_4"],
      table_option: {
        headings: {
          year_1: (h, row, index) => {
            return "Promedio de la Industria";
          },
          year_2: (h, row, index) => {
            return "Año 2022";
          },

          year_3: (h, row, index) => {
            return "Año 2023";
          },
          year_4: (h, row, index) => {
            return "Año 2024";
          },
        },
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table table-hover",
        columnsClasses: { actions: "actions text-center" },
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
          count: "Mostrar {from} a {to} de {count}",
          filter: "",
          filterPlaceholder: "Buscar",
          limit: "Resultados:",
        },
        resizableColumns: false,
        sortable: ["id", "razon", "year_1", "year_2", "year_3", "year_4"],
        sortIcon: {
          base: "sort-icon-none",
          up: "sort-icon-asc",
          down: "sort-icon-desc",
        },
      },

      tab: null,
      CostoOperacion: [],
      Razon: {
        nombre: "",
        valor: 0,
        year: "",
      },
    };
  },
  methods: {
    getAllFlujo() {
      flujoService
        .ObtenerRelacionF()
        .then((items) => (this.items = items))

        .catch((err) => console.log(err));
    },
    guardarnewFlujo() {
      flujoService
        .GuardarRfinaciera(this.Razon)
        .then((res) => {
          msg.ShowMessages(res);
          if (res.status == 200) {
            this.clearDatos();
            this.$router.go();
          }
        })
        .catch((err) => console.log(err));
    },
    clearDatos() {
      this.Razon = {
        nombre: "",
        valor: 0,
        year: "",
      };
    },
  },
  mounted() {
    this.getAllFlujo();
  },
};
</script>
