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
                  <span>Costos Operativos Actuales </span>
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
                <h6 class="">Agregar Costo Operativo</h6>
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
            <!-- <div
                  class="d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0"
                >
                  <button
                    variant="primary"
                    class="btn m-1 btn-primary"
                    @click="exportCSV()"
                  >
                    Exportar a CSV
                  </button>
                </div>-->
            <v-client-table
              :data="items"
              :columns="columns"
              :options="table_option"
            >
              <!-- <template #beforeFilter>
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
                   <template #h__id>
                                  <div class="checkbox-outline-primary custom-control custom-checkbox">
                                      <input variant="primary" type="checkbox" class="custom-control-input" :id="props.row.id" />
                                      <label class="custom-control-label" :for="props.row.id"></label>
                                  </div>
                              </template> -->
              <template #id="props">
                {{ props.row.id }}
              </template>
              <template #descripcion="props">
                {{ props.row.descripcion }}
              </template>
              <template #costo="props">
                {{ parseFloat(props.row.costo).toFixed(2) || "N/A" }}
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
                        :to="{ path: '/costo/' + props.row.id + '/edit' }"
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
                        Editar
                      </router-link>
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
                        Eliminar
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
import "@/assets/sass/users/account-setting.scss";
import * as msg from "@/helpers/mensajes";
import * as costosService from "@/services/compras";
//import * as grupoService from "../../services/grupos";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      items: [],
      columns: ["id", "descripcion", "costo", "accion"],
      table_option: {
        headings: {
          id: (h, row, index) => {
            return "#";
          },
          descripcion: (h, row, index) => {
            return "descripcion";
          },
          accion: (h, row, index) => {
            return "Acción";
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
        sortable: ["id", "nombre", "accion"],
        sortIcon: {
          base: "sort-icon-none",
          up: "sort-icon-asc",
          down: "sort-icon-desc",
        },
      },

      tab: null,
      CostoOperacion: [],
      Costo: {
        nombre: "",
      },
    };
  },
  methods: {
    getAllCostos() {
      costosService
        .ObtenerCostosOpe()
        .then((items) => (this.items = items))

        .catch((err) => console.log(err));
    },
    clearDatos() {},
  },
  mounted() {
    this.getAllCostos();
  },
};
</script>