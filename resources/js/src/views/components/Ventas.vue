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
              <template #beforeFilter>
                <router-link
                  to="/evento/crear"
                  class="dropdown-toggle"
                  @click="toggleMobileMenu"
                >
                  <button type="button" class="btn ml-2 btn-primary">
                    Agregar
                  </button>
                </router-link>
              </template>
              <!-- <template #h__id>
                                  <div class="checkbox-outline-primary custom-control custom-checkbox">
                                      <input variant="primary" type="checkbox" class="custom-control-input" :id="props.row.id" />
                                      <label class="custom-control-label" :for="props.row.id"></label>
                                  </div>
                              </template> -->
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
              <template #accion="props">
                <div class="mb-4 me-2 custom-dropdown dropdown btn-group">
                  <a
                    class="btn dropdown-toggle btn-icon-only"
                    href="#"
                    role="button"
                    id="pendingTask"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style="width: 24px; height: 24px"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-horizontal"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </a>

                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="pendingTask"
                  >
                    <li>
                      <router-link
                        :to="{ path: '/evento/' + props.row.id + '/edit' }"
                        class="dropdown-item action-edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-3"
                        >
                          <path d="M12 20h9"></path>
                          <path
                            d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                          ></path>
                        </svg>
                        Editar Evento
                      </router-link>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        @click="Desactivar(props.row.id)"
                        class="dropdown-item action-delete"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-3"
                        >
                          <path d="M12 20h9"></path>
                          <path
                            d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                          ></path>
                        </svg>
                        Desactivar Evento
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        @click="confirmDelete(props.row.id)"
                        class="dropdown-item action-delete"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-trash"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path
                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                          ></path>
                        </svg>
                        Eliminar Evento
                      </a>
                    </li>
                  </ul>
                </div>
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
      evento: {
        eve_estatus: 0,
      },
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
    getAllventas() {
      ventasService
        .ObtenerTodasventas()
        .then((items) => (this.items = items))

        .catch((err) => console.log(err));
    },
    Desactivar(id) {
      Swal.fire({
        title: "¿Está seguro de que desea desactivar este evento?",
        text: "¡Esta acción ocultará la información de este evento!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, desactivar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          eventosService
            .Desactivareve(id, this.evento)
            .then((res) => {
              msg.ShowMessages(res);
              this.$router.go();
            })
            .catch((err) => console.log(err));
        }
      });
    },
    confirmDelete(id) {
      Swal.fire({
        title: "¿Está seguro de que desea eliminar este Evento?",
        text: "¡Esta acción no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          eventosService
            .DeleteEvento(id)
            .then((res) => {
              msg.ShowMessages(res);
              this.$router.go();
            })
            .catch((err) => console.log(err));
        }
      });
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
    this.getAllventas();
  },
};
</script>
  
  