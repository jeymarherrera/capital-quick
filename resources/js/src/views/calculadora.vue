<template>
  <div class="layout-px-spacing apps-invoice-add">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Calculadora Financiera</a>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </teleport>

    <div class="row invoice layout-top-spacing layout-spacing">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="doc-container">
          <div class="row">
            <div class="col-xl-6">
              <div class="invoice-actions">
                <div class="invoice-action-currency">
                  <div class="form-group mb-0">
                    <h1 for="currency" style="text-align:center">Calculadora Financiera</h1>
                    <label
                      for="currency"
                      style="text-align:center"
                    >Visualice la Proyección de Financiamiento Requerido</label>
                    <div class="dropdown selectable-dropdown invoice-select d-block btn-group">
                      <a
                        href="javascript:;"
                        id="ddlCurrency"
                        class="btn dropdown-toggle btn-icon-only text-nowrap"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          :src="require('@/assets/images/' + selected_currency.thumb)"
                          class="flag-width"
                          alt="flag"
                        />
                        <span class="selectable-text">{{ selected_currency.key }}</span>
                        <span class="selectable-arrow">
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
                            class="feather feather-chevron-down"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlCurrency">
                        <li v-for="(item, index) in currency_list" :key="index">
                          <a
                            href="javascript:;"
                            class="dropdown-item"
                            @click="selected_currency = item"
                          >
                            <img
                              :src="require('@/assets/images/' + item.thumb)"
                              class="flag-width"
                              alt="flag"
                            />
                            {{ item.key }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="invoice-action-discount">
                  <h5>Monto Inicial</h5>

                  <div class="invoice-action-discount-fields">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group mb-0">
                          <label for="type">Monto incial del proyecto que desea financiar</label>
                          <div
                            class="dropdown selectable-dropdown invoice-tax-select d-block btn-group"
                          >
                            <input
                              type="number"
                              min="0"
                              max="100"
                              class="input-rate form-control"
                              placeholder="Ingrese el monto de financiamiento"
                              required
                              v-model="montoFinanciamiento"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="invoice-action-tax">
                  <h5>Tasa de Interés</h5>
                  <div class="invoice-action-tax-fields">
                    <div class="row">
                      <div class="col-6">
                        <div class="form-group mb-0">
                          <label for="type">Unidad de tiempo</label>
                          <div
                            class="dropdown selectable-dropdown invoice-tax-select d-block btn-group"
                          >
                            <a
                              href="javascript:;"
                              id="ddlTax"
                              class="btn dropdown-toggle btn-icon-only text-nowrap"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span class="selectable-text">{{ selected_tax_type.key }}</span>
                              <span class="selectable-arrow">
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
                                  class="feather feather-chevron-down"
                                >
                                  <polyline points="6 9 12 15 18 9" />
                                </svg>
                              </span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlTax">
                              <li v-for="(item, index) in tax_type_list" :key="index">
                                <a
                                  href="javascript:;"
                                  class="dropdown-item"
                                  @click="selected_tax_type = item"
                                >{{ item.key }}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col-6">
                        <div class="form-group mb-0 tax-rate-deducted">
                          <label for="rate">Cantidad de tiempo</label>
                          <input
                            v-model="selected_tax_type.value"
                            type="number"
                            min="0"
                            max="100"
                            class="input-rate form-control"
                            placeholder="Ingrese la cantidad de tiempo"
                            required
                          />
                        </div>
                        <label for="rate">Tasa de Interés (%)</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          class="input-rate form-control"
                          placeholder="Ingrese la tasa de interes"
                          required
                          v-model="tasaInteres"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="invoice-action-tax">
                  <h5>Capitalización</h5>
                  <div class="invoice-action-tax-fields">
                    <div class="row">
                      <div class="col-6">
                        <div class="form-group mb-0">
                          <label for="type">Frecuencia</label>
                          <div
                            class="dropdown selectable-dropdown invoice-tax-select d-block btn-group"
                          >
                            <a
                              href="javascript:;"
                              id="ddlTax"
                              class="btn dropdown-toggle btn-icon-only text-nowrap"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span class="selectable-text">{{ selected_tax_frec.key }}</span>
                              <span class="selectable-arrow">
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
                                  class="feather feather-chevron-down"
                                >
                                  <polyline points="6 9 12 15 18 9" />
                                </svg>
                              </span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlTax">
                              <li v-for="(item, index) in tax_frec_list" :key="index">
                                <a
                                  href="javascript:;"
                                  class="dropdown-item"
                                  @click="selected_tax_frec = item"
                                >{{ item.key }}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- boton -->
                <div class="invoice-actions-btn">
                  <div class="invoice-action-btn">
                    <div class="row">
                      <div class="col-xl-12 col-md-4">
                        <a
                          href="javascript:;"
                          class="btn btn-primary btn-send"
                          @click="calcular"
                        >Calcular</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- mostrar info -->
            <div class="col-xl-6">
              <div class="invoice-container">
                <div class="invoice-inbox">
                  <div id="ct" class>
                    <div class="invoice-00001">
                      <div class="content-section">
                        <div class="inv--head-section inv--detail-section">
                          <div class="row">
                            <div class="col-sm-12 col-12 me-auto">
                              <h2 for="currency" style="text-align:center">Resultado Obtenido</h2>
                            </div>
                          </div>
                        </div>

                        <div class="inv--detail-section inv--customer-detail-section">
                          <div class="row">
                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center">
                              <p class="inv-to">Para esta inversión usted deberá pagar lo siguente:</p>
                            </div>
                          </div>
                        </div>

                        <div class="inv--product-table-section">
                          <div class="table-responsive">
                            <table class="table table-hover">
                              <thead>
                                <tr>
                                  <th
                                    v-for="item in columns"
                                    :key="item.key"
                                    :class="[item.class]"
                                  >{{ item.label }}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in items" :key="item.id">
                                  <td>{{ item.id }}</td>
                                  <td>${{ item.quantity }}</td>
                                  <td class="text-end">${{ item.price }}</td>
                                  <td class="text-end">${{ item.amount }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div class="inv--total-amounts">
                          <div class="row mt-4">
                            <div class="col-sm-5 col-12 order-sm-0 order-1"></div>
                            <div class="col-sm-7 col-12 order-sm-1 order-0">
                              <div class="text-sm-end">
                                <div class="row">
                                  <div class="col-sm-8 col-7">
                                    <p class>Sub Total:</p>
                                  </div>
                                  <div class="col-sm-4 col-5">
                                    <p
                                      class
                                    >${{proyeccion.capitalMensual*proyeccion.cantidadTiempo}}</p>
                                  </div>
                                  <div class="col-sm-8 col-7">
                                    <p class>Interés:</p>
                                  </div>
                                  <div class="col-sm-4 col-5">
                                    <p
                                      class
                                    >${{proyeccion.interesMensual*proyeccion.cantidadTiempo}}</p>
                                  </div>
                                  <div class="col-sm-8 col-7 grand-total-title">
                                    <h4 class>Total a Pagar:</h4>
                                  </div>
                                  <div class="col-sm-4 col-5 grand-total-amount">
                                    <h4 class>${{proyeccion.totalPagar}}</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="invoice-actions-btn">
                          <div class="invoice-action-btn">
                            <div class="row">
                              <div class="col-xl-12 col-md-4">
                                <a class="btn btn-dark btn-preview">Anexar a mi Estado Financiero</a>
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
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import "@/assets/sass/apps/invoice-add.scss";
import "@/assets/sass/apps/invoice-preview.scss";
import "flatpickr/dist/flatpickr.css";
import "@/assets/sass/forms/custom-flatpickr.css";

import { useMeta } from "@/composables/use-meta";
useMeta({ title: "Calculadora" });

import * as ProyeccionService from "@/services/proyeccion";
import * as msg from "@/helpers/mensajes";

const currency_list = ref([]);
const selected_currency = ref({
  key: "PAB - Balboa Panameño",
  thumb: "flags/zh.png"
});
const tax_type_list = ref([]);
const selected_tax_type = ref({ key: "Anual", value: 1 });

const tax_frec_list = ref([]);
const selected_tax_frec = ref({ key: "Anualmente", value: 1 });

const montoFinanciamiento = ref(null);
const tasaInteres = ref(null);

const columns = ref([]);

function calcular() {
  montoFinanciamiento.value;

  const objTI = selected_tax_type.value;
  const unidadTiempo = objTI.key;
  var cantidadTiempo = objTI.value;

  if (unidadTiempo == "Mensual") {
    cantidadTiempo = cantidadTiempo / 12;
  }

  tasaInteres.value;

  const objTF = selected_tax_frec.value;
  const valor = objTF.value;

  const interesMensual = CalcularInteresMensual(
    montoFinanciamiento.value,
    tasaInteres.value,
    valor
  );

  const totalPagar = CalcularTotal(
    montoFinanciamiento.value,
    tasaInteres.value,
    valor,
    cantidadTiempo
  );

  const totalPagarMensual = CalcularTotalMensual(totalPagar, cantidadTiempo);

  const capitalMensual = CalcularCapitalMensual(
    totalPagarMensual,
    interesMensual
  );

  const datos = {
    cantidadTiempo: cantidadTiempo * 12,
    capitalMensual: capitalMensual,
    interesMensual: interesMensual,
    totalPagar: totalPagar,
    totalPagarMensual: totalPagarMensual,
    anexar: 0
  };

  guardarProyeccion(datos);
}

function CalcularInteresMensual(P, r, n) {
  const porcentaje = r / n / 100;
  return P * porcentaje;
}

function CalcularTotal(P, r, n, t) {
  r = r / 100;
  const A = P * (1 + r / n) ** (n * t);
  return A;
}

function CalcularTotalMensual(A, t) {
  t = t * 12;
  return A / t;
}

function CalcularCapitalMensual(Am, i) {
  return Am - i;
}

function guardarProyeccion(datos) {
  console.log(datos);
  ProyeccionService.GuardarProyeccion(datos)
    .then(res => {
      msg.ShowMessages(res);
      if (res.status == 200) {
        obtenerProyeccion();
      }
    })
    .catch(err => console.log(err));
}

const proyeccion = ref([]);
const obtenerProyeccion = () => {
  msg.toastr("Realizando calculo, por favor espere...", "info");
  ProyeccionService.ObtenerProyeccion()
    .then(proyeccionData => {
      proyeccion.value = proyeccionData;
    })
    .catch(err => {
      console.log(err);
    });
};

const items = [];

for (let i = 0; i < proyeccion.cantidadTiempo; i++) {
  items.push({
    id: i + 1,
    quantity: proyeccion.capitalMensual.toFixed(2),
    price: proyeccion.interesMensual.toFixed(2),
    amount: proyeccion.totalPagar.toFixed(2)
  });
}

items.value = items;

onMounted(() => {
  //currency list
  currency_list.value = [
    { key: "PAB - Balboa Panameño", thumb: "flags/zh.png" },
    { key: "USD - Dólar Estadounidense", thumb: "flags/en.png" },
    { key: "GBP - Libra Esterlina Británica", thumb: "flags/gbp.png" },
    { key: "IDR - Rupia Indonesia", thumb: "flags/idr.png" },
    { key: "INR - Rupia India", thumb: "flags/inr.png" },
    { key: "BRL - Real Brasileño", thumb: "flags/brl.png" },
    { key: "EUR - Alemania (Euro)", thumb: "flags/de.png" },
    { key: "TRY - Lira Turca", thumb: "flags/tr.png" }
  ];

  //tax type list
  tax_type_list.value = [
    { key: "Anual", value: 1 },
    { key: "Mensual", value: 12 }
  ];

  //tax type list
  tax_frec_list.value = [
    { key: "Anualmente", value: 1 },
    { key: "Semestralmente", value: 2 },
    { key: "Trimestralmente", value: 4 },
    { key: "Mensualmente", value: 12 },
    { key: "Diariamente", value: 30 }
  ];
  bind_data();
});

const bind_data = () => {
  columns.value = [
    { key: "id", label: "Mes" },
    { key: "quantity", label: "Monto" },
    { key: "price", label: "Interes", class: "text-end" },
    { key: "amount", label: "Total", class: "text-end" }
  ];
};
</script>
