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
                  <span>Gastos Operativos Actuales </span>
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
                <h6 class="">Agregar Gasto Operativo</h6>
                <div class="row">
                  <div class="col-lg-11 mx-auto">
                    <div class="row">
                      <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                        <div class="form">
                          <div class="row">
                            <div class="col-6">
                              <div class="form-group">
                                <label for="CostoP">C.Operativo </label>
                                <input
                                  type="text"
                                  name=""
                                  class="form-control mb-4"
                                  id="Costo"
                                  placeholder="Ingrese Costo Operativo"
                                  v-model="Costo.nombre"
                                />
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="form-group">
                                <label for="CostoV">Valor Operativo </label>
                                <input
                                  type="text"
                                  name=""
                                  class="form-control mb-4"
                                  id="Costo"
                                  placeholder="Ingrese valor"
                                  v-model="Costo.total"
                                />
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="form-group">
                                <label for="anoperation"> Año Operacion </label>
                                <select
                                  v-model="Costo.id_balance"
                                  class="form-select mb-4"
                                  id="anoperation"
                                >
                                  <option value="0">
                                    Seleccione Año Operacion
                                  </option>
                                  <option
                                    v-for="c in Balances"
                                    :key="c.id"
                                    :value="c.id"
                                  >
                                    {{ c.titulo_balance }}
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
          <button type="button" class="btn btn-success" @click="guardarCosto">
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
              <template>
                {{ props.row.id }}
              </template>
              <template #descripcion="props">
                {{ props.row.descripcion }}
              </template>
              <template #costo="props">
                {{ parseFloat(props.row.costo).toFixed(2) || "N/A" }}
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
import * as BalanceService from "@/services/compras";

import * as costosService from "@/services/compras";
//import * as grupoService from "../../services/grupos";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      items: [],
      columns: ["id", "descripcion", "costo"],
      table_option: {
        headings: {
          id: (h, row, index) => {
            return "#";
          },
          descripcion: (h, row, index) => {
            return "descripcion";
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
        sortable: ["id", "nombre"],
        sortIcon: {
          base: "sort-icon-none",
          up: "sort-icon-asc",
          down: "sort-icon-desc",
        },
      },

      tab: null,
      Balances: [],
      Costo: {
        id_balance: null,
        nombre: "",
        total: 0,
      },
    };
  },
  methods: {
    getAllCostos(id) {
      costosService
        .ObtenerCostosOpe(id)
        .then((items) => (this.items = items))

        .catch((err) => console.log(err));
    },
    getAllBalance(id) {
      BalanceService.ObtenerBalanceid(id)
        .then((Balances) => {
          this.Balances = Balances;
        })
        .catch((err) => console.log(err));
    },

    guardarCosto() {
      costosService
        .GuardarGastoOpe(this.Costo)
        .then((res) => {
          msg.ShowMessages(res);
          if (res.status == 200) {
            this.clearDatos();
            this.$router.go();
          }
        })
        .catch((err) => console.log(err));
    },

    clearDatos() {},
  },
  mounted() {
    const id = this.$route.params.id;
    this.getAllBalance(id);
    this.getAllCostos(id);
  },
};
</script>