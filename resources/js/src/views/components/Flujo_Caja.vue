<template>
  <div class="layout-px-spacing">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Balance General</a>
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
                  <div id="ct" class="">
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
                                <h3 class="in-heading align-self-center">
                                  Salsas Camille
                                </h3>
                              </div>
                            </div>

                            <div class="col-sm-6 text-sm-end">
                              <p class="inv-list-number">
                                <span class="inv-title"> </span>
                                <span class="inv-number"> </span>
                              </p>
                            </div>

                            <div class="col-sm-6 align-self-center mt-3">
                              <p class="inv-street-addr">
                                Ciudad de Panamá, Condado del Rey, Edificio
                                Country Plaza II.
                              </p>
                              <p class="inv-email-address">
                                salsascamille@company.com
                              </p>
                              <p class="inv-email-address">(+507) 456 789</p>
                            </div>
                            <div
                              class="col-sm-6 align-self-center mt-3 text-sm-end"
                            >
                              <p class="inv-created-date">
                                <span class="inv-title">Desde : </span>
                                <span class="inv-date"
                                  >31 de Diciembre 2021</span
                                >
                              </p>
                              <p class="inv-due-date">
                                <span class="inv-title">Hasta : </span>
                                <span class="inv-date"
                                  >30 de Diciembre de 2022
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          class="inv--detail-section inv--customer-detail-section"
                        >
                          <div class="row">
                            <div
                              class="col-xl-8 col-lg-7 col-md-6 col-sm-4"
                              v-if="items"
                            >
                              <p class="inv-customer-name">
                                {{ items.titulo_flujo }}
                              </p>
                            </div>

                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info"
                            >
                              <h6 class="inv-title"></h6>
                            </div>

                            <div
                              class="col-xl-8 col-lg-7 col-md-6 col-sm-4"
                              v-if="items"
                            >
                              <p
                                class="inv-to"
                                style="text-decoration: underline"
                              >
                                {{ items.flujo_A }}
                              </p>
                              <p class="inv-to" style="font-weight: bold">
                                {{ items.cuenta_a1 }}
                              </p>
                              <p class="inv-street-addr">Ventas Enero</p>
                              <p class="inv-email-address">Ventas Febrero</p>
                              <p class="inv-email-address">Ventas Marzo</p>
                              <p class="inv-street-addr">Ventas Abril</p>
                              <p class="inv-email-address">Ventas Mayo</p>
                              <p class="inv-email-address">Ventas Junio</p>
                              <p class="inv-street-addr">Ventas Julio</p>
                              <p class="inv-email-address">Ventas Agosto</p>
                              <p class="inv-email-address">Ventas Septiembre</p>
                              <p class="inv-street-addr">Ventas Octubre</p>

                              <p class="inv-email-address">Ventas Noviembre</p>
                              <p class="inv-email-address">Ventas Diciembre</p>
                              <p class="inv-to">{{ items.total_Entrada }}</p>
                            </div>

                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1"
                            >
                              <div class="inv--payment-info" v-if="valores">
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <br /><br />
                                  <span> </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[1] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[2] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[3] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[4] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[5] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[6] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[7] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[8] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[9] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[10] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[11] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valores[12] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ sumaValores }} </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="inv--detail-section inv--customer-detail-section"
                        >
                          <div class="row">
                            <div
                              class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center"
                              v-if="items"
                            >
                              <p
                                class="inv-to"
                                style="text-decoration: underline"
                              >
                                {{ items.flujo_P }}
                              </p>
                            </div>

                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info"
                            >
                              <h6 class="inv-title"></h6>
                            </div>

                            <div
                              class="col-xl-8 col-lg-7 col-md-6 col-sm-4"
                              v-if="items"
                            >
                              <p class="inv-to" style="font-weight: bold">
                                {{ items.cuenta_p1 }}
                              </p>
                              <p class="inv-street-addr">Compras Enero</p>
                              <p class="inv-email-address">Compras Febrero</p>
                              <p class="inv-email-address">Compras Marzo</p>
                              <p class="inv-street-addr">Compras Abril</p>
                              <p class="inv-email-address">Compras Mayo</p>
                              <p class="inv-email-address">Compras Junio</p>
                              <p class="inv-street-addr">Compras Julio</p>
                              <p class="inv-email-address">Compras Agosto</p>
                              <p class="inv-email-address">
                                Compras Septiembre
                              </p>
                              <p class="inv-street-addr">Compras Octubre</p>

                              <p class="inv-email-address">Compras Noviembre</p>
                              <p class="inv-email-address">Compras Diciembre</p>
                              <p
                                class="inv-email-address"
                                style="font-weight: bold"
                              >
                                Total de compras
                              </p>
                              <br />
                            </div>

                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1"
                            >
                              <div class="inv--payment-info" v-if="valoresC">
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <br />
                                  <span> </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[1] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[2] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[3] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[4] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[5] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[6] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[7] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[8] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[9] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[10] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[11] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresC[12] }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ sumaValoresC }} </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="inv--detail-section inv--customer-detail-section"
                        >
                          <div class="row">
                            <div
                              class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center"
                              v-if="items"
                            >
                              <p
                                class="inv-to"
                                style="text-decoration: underline"
                              >
                                {{ items.flujo_P }}
                              </p>
                            </div>

                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info"
                            >
                              <h6 class="inv-title"></h6>
                            </div>

                            <div
                              class="col-xl-8 col-lg-7 col-md-6 col-sm-4"
                              v-if="items"
                            >
                              <p class="inv-to" style="font-weight: bold">
                                {{ items.cuenta_p2 }}
                              </p>
                              <p class="inv-street-addr">Gastos Enero</p>
                              <p class="inv-email-address">Gastos Febrero</p>
                              <p class="inv-email-address">Gastos Marzo</p>
                              <p class="inv-street-addr">Gastos Abril</p>
                              <p class="inv-email-address">Gastos Mayo</p>
                              <p class="inv-email-address">Gastos Junio</p>
                              <p class="inv-street-addr">Gastos Julio</p>
                              <p class="inv-email-address">Gastos Agosto</p>
                              <p class="inv-email-address">Gastos Septiembre</p>
                              <p class="inv-street-addr">Gastos Octubre</p>

                              <p class="inv-email-address">Gastos Noviembre</p>
                              <p class="inv-email-address">Gastos Diciembre</p>
                              <p
                                class="inv-email-address"
                                style="font-weight: bold"
                              >
                                Total de Gastos
                              </p>
                            </div>

                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1"
                            >
                              <div class="inv--payment-info" v-if="valoresG">
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ valoresG.total }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ sumaValoresG }} </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="inv--detail-section inv--customer-detail-section"
                        >
                          <div class="row">
                            <div
                              class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center"
                              v-if="items"
                            >
                              <p
                                class="inv-to"
                                style="text-decoration: underline"
                              >
                                -------------------------------------------
                              </p>
                            </div>
                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info"
                            >
                              <h6 class="inv-title"></h6>
                            </div>

                            <div
                              class="col-xl-8 col-lg-7 col-md-6 col-sm-4"
                              v-if="items"
                            >
                              <p
                                class="inv-to"
                                style="text-decoration: underline"
                              >
                                {{ items.total_Salida }}
                              </p>
                              <p
                                class="inv-email-address"
                                style="font-weight: bold"
                              >
                                Flujo neto de efectivo
                              </p>
                            </div>

                            <div
                              class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1"
                            >
                              <div class="inv--payment-info">
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ sumaValoresT }} </span>
                                </p>
                                <p>
                                  <span class="inv-subtitle"> </span>
                                  <span> {{ sumaValoresF }} </span>
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
import * as flujoService from "@/services/compras";
export default {
  data() {
    return {
      items: [],
      valores: [],
      valoresC: [],
      valoresG: [],

      sumaValores: 0,
      sumaValoresC: 0,
      sumaValoresG: 0,
      sumaValoresT: 0,
      sumaValoresF: 0,
    };
  },
  methods: {
    getAllFlujo(id) {
      flujoService
        .Obtenerflujo(id)
        .then((items) => (this.items = items))

        .catch((err) => console.log(err));
    },
    getAllvalores(id) {
      flujoService
        .ObtenerValoresM(id)
        .then((valores) => {
          this.valores = valores;
          this.sumarValores(id);
        })
        .catch((err) => console.log(err));
    },
    sumarValores(id) {
      const valoresArray = Object.values(this.valores);
      this.sumaValores = valoresArray
        .reduce((total, valor) => total + parseFloat(valor.replace(",", "")), 0)
        .toFixed(2);
      console.log(this.sumaValores);
      this.getAllvaloresC(id);
    },
    getAllvaloresC(id) {
      flujoService
        .ObtenerValoresC(id)
        .then((valoresC) => {
          this.valoresC = valoresC;
          this.sumarValoresC(id);
        })
        .catch((err) => console.log(err));
    },
    sumarValoresC(id) {
      const valoresArray = Object.values(this.valoresC);
      this.sumaValoresC = valoresArray
        .reduce((total, valor) => total + parseFloat(valor.replace(",", "")), 0)
        .toFixed(2);
      console.log(this.sumaValoresC);
      this.getAllvaloresG(id);
    },
    getAllvaloresG(id) {
      flujoService
        .ObtenerValoresG(id)
        .then((valoresG) => {
          this.valoresG = valoresG;
          this.sumarValoresG();
        })
        .catch((err) => console.log(err));
    },
    sumarValoresG(id) {
      this.sumaValoresG = this.valoresG.total * 12;
      console.log(this.sumaValoresG);
      this.calcularSumaValores(id);
    },
    calcularSumaValores(id) {
      const suma =
        parseFloat(this.sumaValoresC) + parseFloat(this.sumaValoresG);
      this.sumaValoresT = suma.toFixed(2);
      console.log(this.sumaValoresT);
      this.calcularSumaValoresF(id);
    },
    calcularSumaValoresF(id) {
      this.sumaValoresF = parseFloat(
        (this.sumaValores - this.sumaValoresT).toFixed(2)
      );
      console.log(this.sumaValoresF);
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getAllFlujo(id);
    this.getAllvalores(id);
  },
};
</script>