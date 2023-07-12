<template>
  <div class="layout-px-spacing apps-invoice-add">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Calculadora Financiera / Resultado</a>
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
                                    <p class>$3155</p>
                                  </div>
                                  <div class="col-sm-8 col-7">
                                    <p class>Interés:</p>
                                  </div>
                                  <div class="col-sm-4 col-5">
                                    <p class>$700</p>
                                  </div>
                                  <div class="col-sm-8 col-7 grand-total-title">
                                    <h4 class>Total a Pagar :</h4>
                                  </div>
                                  <div class="col-sm-4 col-5 grand-total-amount">
                                    <h4 class>$3855</h4>
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
//flatpickr
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "@/assets/sass/forms/custom-flatpickr.css";
import { useMeta } from "@/composables/use-meta";

useMeta({ title: "Calculadora" });

function calcular() {
  // Crear la matriz de objetos para la tabla
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

const items = ref([]);
const currency_list = ref([]);
const selected_currency = ref({
  key: "PAB - Balboa Panameño",
  thumb: "flags/zh.png"
});
const tax_type_list = ref([]);
const selected_tax_type = ref({ key: "Anual", value: 1 });

const tax_frec_list = ref([]);
const selected_tax_frec = ref({ key: "Anualmente", value: 1 });

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

const columns = ref([]);

items.value = [
  {
    id: 1,
    quantity: 100,
    price: "120",
    amount: "120"
  },
  {
    id: 2,
    quantity: 100,
    price: "230",
    amount: "230"
  },
  {
    id: 3,
    quantity: 100,
    price: "405",
    amount: "405"
  },
  {
    id: 4,
    quantity: 100,
    price: "2500",
    amount: "2500"
  }
];

const bind_data = () => {
  columns.value = [
    { key: "id", label: "Mes" },
    { key: "quantity", label: "Monto" },
    { key: "price", label: "Interes", class: "text-end" },
    { key: "amount", label: "Total", class: "text-end" }
  ];
};
</script>
