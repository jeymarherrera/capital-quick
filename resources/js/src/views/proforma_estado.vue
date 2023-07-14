<template>
  <div class="layout-px-spacing">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Estado de Resultado</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>Pro Forma</span>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </teleport>

    <h3 for="currency" style="margin-top:15px">Activos</h3>
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
import "@/assets/sass/apps/invoice-preview.scss";
import * as msg from "@/helpers/mensajes";
import * as flujoService from "@/services/compras";
//import * as grupoService from "../../services/grupos";
export default {
  data() {
    return {
      items: [],
      columns: ["id", "razon", "year_1", "year_2", "year_3", "year_4"],
      table_option: {
        headings: {
          razon: (h, row, index) => {
            return "Rubro";
          },
          year_1: (h, row, index) => {
            return "2022";
          },
          year_2: (h, row, index) => {
            return "2023";
          },

          year_3: (h, row, index) => {
            return "2024";
          },
          year_4: (h, row, index) => {
            return "2025";
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
    getProformaAPE() {
      flujoService
        .ObtenerProformaAPE()
        .then((items) => (this.items = items))
        .catch((err) => console.log(err));
    },
   
  },
  mounted() {
    this.getProformaAPE();
  },
};
</script>
