<template>
  <div class="layout-px-spacing apps-invoice-list">
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
                  <span>Ventas Finales</span>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </teleport>

    <div class="row layout-top-spacing">
      <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
        <div class="panel br-6">
          <div class="custom-table">
            <div
              class="d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0"
            >
              <button
                variant="primary"
                class="btn m-1 btn-primary"
                @click="exportCSV()"
              >
                Exportar a CSV
              </button>
            </div>
            <v-client-table
              :data="items"
              :columns="columns"
              :options="table_option"
            >
              <template #id="props">
                {{ props.row.id }}
              </template>
              <template #fecha="props">
                {{ props.row.fecha }}
              </template>
              <template #nombre="props">
                {{ props.row.nombre }}
              </template>
              <template #cantidad="props">
                {{ props.row.cantidad }}
              </template>
              <template #precio="props">
                {{ parseFloat(props.row.precio).toFixed(2) || "N/A" }}
              </template>
              <template #monto="props">
                {{ parseFloat(props.row.monto).toFixed(2) || "N/A" }}
              </template>
              <template #otorga_credito="props">
                {{ props.row.otorga_credito }}
              </template>
              <template #abono="props">
                {{ parseFloat(props.row.abono).toFixed(2) || "N/A" }}
              </template>
              <template #fecha_cancelacion="props">
                {{
                  props.row.fecha_cancelacion
                    ? props.row.fecha_cancelacion
                    : "N/A"
                }}
              </template>
              <template #cancelacion="props">
                {{ parseFloat(props.row.cancelacion).toFixed(2) || "N/A" }}
              </template>
            </v-client-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Papa from "papaparse";
import * as msg from "@/helpers/mensajes";
import "@/assets/sass/apps/invoice-list.scss";
import * as ventasService from "@/services/ventas";
export default {
  data() {
    return {
      items: [],
      columns: [
        "id",
        "fecha",
        "nombre",
        "cantidad",
        "precio",
        "monto",
        "otorga_credito",
        "abono",
        "fecha_cancelacion",
        "cancelacion",
      ],

      table_option: {
        headings: {
          id: (h, row, index) => {
            return "#";
          },
          fecha_cancelacion: (h, row, index) => {
            return "Fecha Cancelacion";
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
        sortable: [
          "id",
          "nombres",
          "lugar",
          "fecha_inicio",
          "fecha_finalizacion",
        ],
        sortIcon: {
          base: "sort-icon-none",
          up: "sort-icon-asc",
          down: "sort-icon-desc",
        },
      },
    };
  },
  methods: {
    getAllventas(id) {
      ventasService
        .ObtenerTodasventas(id)
        .then((items) => (this.items = items))

        .catch((err) => console.log(err));
    },

    exportCSV() {
      const csv = Papa.unparse(this.items);
      const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(csvData);
      link.setAttribute("download", "data.csv");
      link.click();
    },
  },
  mounted() {
    this.getAllventas(this.$route.params.id);
  },
};
</script>
  
  