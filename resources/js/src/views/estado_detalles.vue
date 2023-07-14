<template>
  <div class="layout-px-spacing">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Estado de Resultados</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span></span>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </teleport>

    <div class="row invoice layout-top-spacing layout-spacing apps-invoice">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="doc-container">
          <div class="row">
            <div class="col-xl-9">
              <div class="invoice-container">
                <div class="invoice-inbox">
                  <div id="ct" class>
                    <div class="invoice-00001">
                      <div class="content-section">
                        <div class="inv--head-section inv--detail-section">
                          <div class="row">
                            <div class="col-sm-6 col-12 me-auto">
                              <div class="d-flex">
                                <img
                                  class="company-logo"
                                  src="@/assets/images/cork-logo.png"
                                  alt="company"
                                />
                                <h3 class="in-heading align-self-center">{{empresa.nombre}}</h3>
                              </div>
                            </div>

                            <div class="col-sm-6 text-sm-end">
                              <p class="inv-list-number">
                                <span class="inv-title"></span>
                                <span class="inv-number"></span>
                              </p>
                            </div>

                            <div class="col-sm-6 align-self-center mt-3">
                              <p class="inv-street-addr">{{empresa.direccion}}</p>
                              <p class="inv-email-address">{{empresa.correo}}</p>
                              <p class="inv-email-address">{{empresa.telefono}}</p>
                            </div>
                            <div class="col-sm-6 align-self-center mt-3 text-sm-end">
                              <p class="inv-created-date">
                                <span class="inv-title">Desde:</span>
                                <span class="inv-date">{{ empresa.desde }}</span>
                              </p>
                              <p class="inv-due-date">
                                <span class="inv-title">Hasta:</span>
                                <span class="inv-date">{{empresa.hasta}}</span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="inv--detail-section inv--customer-detail-section">
                          <div class="row">
                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center"></div>

                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info"
                            >
                              <h6 class="inv-title"></h6>
                            </div>

                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                              <p class="inv-street-addr">Ventas</p>
                              <p class="inv-email-address">Costos de Bienes Vendidos</p>
                              <p
                                class="inv-email-address"
                                style="color:black; font-weight: bold;"
                              >Utilidad Bruta</p>
                              <br />
                              <p
                                class="inv-email-address"
                                style="color:black; font-weight: bold;"
                              >Gastos Operativos</p>
                              <p class="inv-street-addr">- Costos Operativos</p>
                              <p class="inv-email-address">- Depreciacion</p>
                              <p class="inv-email-address">- Costos por producción</p>
                              <p
                                class="inv-email-address"
                                style="color:black; font-weight: bold;"
                              >Gastos Operativos Totales</p>
                              <br />
                              <p
                                class="inv-email-address"
                                style="color:black; font-weight: bold;"
                              >Utilidad Operativa</p>
                              <p class="inv-street-addr">Gastos por Interés</p>
                              <p
                                class="inv-email-address"
                                style="color:black; font-weight: bold;"
                              >Utilidad Antes de Impuestos</p>
                              <p class="inv-street-addr">Impuestos</p>
                              <p class="inv-to">Utilidad después de Impuestos</p>
                            </div>

                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1"
                            >
                              <div class="inv--payment-info">
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span></span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span>{{(ventas).toFixed(2)}}</span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span>{{(totalInventario).toFixed(2)}}</span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span
                                    style="color:black; font-weight: bold;"
                                  >{{(ventas -totalInventario).toFixed(2)}}</span>
                                </p>
                                <br />
                                <br />
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <br />
                                  <span></span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span></span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span>{{(costosOperativos).toFixed(2)}}</span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span>{{(depreciacion).toFixed(2)}}</span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span>{{(costosProduccion).toFixed(2)}}</span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span
                                    style="color:black; font-weight: bold;"
                                  >{{(costosOperativos + depreciacion + costosProduccion).toFixed(2)}}</span>
                                </p>

                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span></span>
                                </p>
                                <br />
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span
                                    style="color:black; font-weight: bold;"
                                  >{{((ventas - totalInventario) + (costosOperativos + depreciacion + costosProduccion)).toFixed(2)}}</span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span>{{(interes).toFixed(2)}}</span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span
                                    style="color:black; font-weight: bold;"
                                  >{{(((ventas - totalInventario) + (costosOperativos + depreciacion + costosProduccion)) - interes).toFixed(2)}}</span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span>{{((((ventas - totalInventario) + (costosOperativos + depreciacion + costosProduccion)) - interes) * empresa.impuesto).toFixed(2)}}</span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"></span>
                                  <span
                                    style="color:black; font-weight: bold;"
                                  >{{ ((((ventas - totalInventario) + (costosOperativos + depreciacion + costosProduccion)) - interes) -((((ventas - totalInventario) + (costosOperativos + depreciacion + costosProduccion)) - interes) * empresa.impuesto)).toFixed(2)}}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="inv--note">
                          <div class="row mt-4">
                            <div class="col-sm-12 col-12 order-sm-0 order-1">
                              <p>Gracias por usar CapitalQuick.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3">
              <div class="invoice-actions-btn">
                <div class="invoice-action-btn">
                  <div class="row">
                    <div class="col-xl-12 col-md-3 col-sm-6">
                      <a href="javascript:;" class="btn btn-primary btn-send">Proforma</a>
                    </div>
                    <div class="col-xl-12 col-md-3 col-sm-6">
                      <a
                        href="javascript:;"
                        class="btn btn-secondary btn-print action-print"
                        @click="print()"
                      >Imprimir</a>
                    </div>
                    <div class="col-xl-12 col-md-3 col-sm-6">
                      <a href="javascript:;" class="btn btn-success btn-download">Descargar</a>
                    </div>
                    <!-- <div class="col-xl-12 col-md-3 col-sm-6">
                                              <router-link to="/apps/invoice/edit" class="btn btn-dark btn-edit">Edit</router-link>
                    </div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import "@/assets/sass/apps/invoice-preview.scss";

import * as EmpresasService from "@/services/empresas";
import * as BalanceService from "@/services/balance";
import * as VentasService from "@/services/ventas";
import * as msg from "@/helpers/mensajes";

export default {
  data() {
    return {
      empresa: 0,
      costosOperativos: 0,
      depreciacion: 0,
      costosProduccion: 0,
      ventas: 0,
      totalInventario: 0,
      interes: 0,

      cuentaxCobrar: 0,
      cuentaxPagar: 0,
      proyeccionFinanciera: 0,
      cortoPlazo: 0,
      largoPlazo: 0
    };
  },
  methods: {
    obtenerEmpresa() {
      msg.toastr("Cargando datos, por favor espere...", "info");
      EmpresasService.ObtenerEmpresa(1)
        .then(empresaData => {
          this.empresa = empresaData;
          console.log(this.empresa);
          this.obtenerVentas();
          this.obtenerProyeccionFinancieraById(this.empresa.id_proyeccion);
        })
        .catch(err => {
          console.log(err);
        });
    },
    obtenerVentas() {
      msg.toastr("Cargando datos, por favor espere...", "info");
      VentasService.ObtenerVentas()
        .then(VentasData => {
          this.ventas = parseFloat(VentasData);
          console.log(this.ventas);
          this.obtenerInventarioTotal();
        })
        .catch(err => {
          console.log(err);
        });
    },
    obtenerInventarioTotal() {
      msg.toastr("Cargando datos, por favor espere...", "info");
      BalanceService.ObtenerInventarioTotal()
        .then(inventarioData => {
          this.totalInventario = parseFloat(inventarioData);
          console.log(this.totalInventario);
          this.obtenerCostosOperativos();
        })
        .catch(err => {
          console.log(err);
        });
    },
    obtenerCostosOperativos() {
      msg.toastr("Cargando datos, por favor espere...", "info");
      BalanceService.ObtenerCostosOperativos()
        .then(CostosOperativosData => {
          this.costosOperativos = parseFloat(CostosOperativosData);
          console.log(this.costosOperativos);
          this.obtenerDepreciacion();
        })
        .catch(err => {
          console.log(err);
        });
    },
    obtenerDepreciacion() {
      msg.toastr("Cargando datos, por favor espere...", "info");
      BalanceService.ObtenerDepreciacion()
        .then(DepreciacionData => {
          this.depreciacion = parseFloat(DepreciacionData);
          console.log(this.depreciacion);
          this.obtenerCostosProduccion();
        })
        .catch(err => {
          console.log(err);
        });
    },
    obtenerCostosProduccion() {
      msg.toastr("Cargando datos, por favor espere...", "info");
      BalanceService.ObtenerCostosProduccion()
        .then(CostosProduccionData => {
          this.costosProduccion = parseFloat(CostosProduccionData);
          console.log(this.costosProduccion);
        })
        .catch(err => {
          console.log(err);
        });
    },
    obtenerProyeccionFinancieraById(id) {
      msg.toastr("Cargando datos, por favor espere...", "info");
      BalanceService.ObtenerProyeccionFinanciera(id)
        .then(PFData => {
          this.proyeccionFinanciera = PFData;
          console.log(PFData);
          this.interes = parseFloat(
            this.proyeccionFinanciera.interesMensual * this.empresa.meses_lp
          );
          console.log(this.interes.toFixed(2));
        })
        .catch(err => {
          console.log(err);
        });
    },

    print() {
      window.print();
    }
  },
  mounted() {
    this.obtenerEmpresa();
  }
};
</script>
  