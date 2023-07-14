<template>
  <div class="layout-px-spacing dash_1">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Inicio</a>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </teleport>

    <div class="row layout-top-spacing">
      <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-revenue">
          <div class="widget-heading">
            <h5>Ingresos</h5>
            <div class="dropdown btn-group">
              <a
                href="javascript:;"
                id="ddlRevenue"
                class="btn dropdown-toggle btn-icon-only"
                data-bs-toggle="dropdown"
                aria-expanded="false"
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
                  class="feather feather-more-horizontal"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div class="widget-content">
            <div class="chart-title">
              Ganancia Total <span class="text-primary ms-1">$10,840</span>
            </div>
            <apex-chart
              v-if="revenue_options"
              height="325"
              type="area"
              :options="revenue_options"
              :series="revenue_series"
            ></apex-chart>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-sales-category">
          <div class="widget-heading">
            <h5>Ventas Por Productos</h5>
          </div>
          <div class="widget-content">
            <apex-chart
              v-if="sales_donut_options"
              height="460"
              type="donut"
              :options="sales_donut_options"
              :series="sales_donut_series"
            ></apex-chart>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
        <div class="widget widget-dailysales">
          <div class="widget-heading">
            <div>
              <h5>Ventas Diarias</h5>
              <span class="sub-title"
                >Ir a las columnas para más detalles.</span
              >
            </div>
            <div class="w-icon text-warning">
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
                class="feather feather-dollar-sign"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path
                  d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                ></path>
              </svg>
            </div>
          </div>
          <div class="widget-content">
            <apex-chart
              v-if="daily_sales_options"
              height="160"
              type="bar"
              :options="daily_sales_options"
              :series="daily_sales_series"
            ></apex-chart>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
        <div class="widget widget-summary">
          <div class="widget-heading">
            <h5>Resumen</h5>
            <div class="dropdown btn-group">
              <a
                href="javascript:;"
                id="ddlSummary"
                class="btn dropdown-toggle btn-icon-only"
                data-bs-toggle="dropdown"
                aria-expanded="false"
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
                  class="feather feather-more-horizontal"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="ddlSummary"
              >
                <li>
                  <a href="javascript:;" class="dropdown-item">Ver Reporte</a>
                </li>
                <li>
                  <a href="javascript:;" class="dropdown-item"
                    >Editar Reporte</a
                  >
                </li>
                <li>
                  <a href="javascript:;" class="dropdown-item"
                    >Marcar como finalizado</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="widget-content">
            <div class="summary-list">
              <div class="w-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-shopping-bag"
                >
                  <path
                    d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                  ></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <div class="w-summary-details">
                <div class="w-summary-info">
                  <h6>Ingresos</h6>
                  <p class="summary-count">$92,600</p>
                </div>
                <div class="w-summary-stats">
                  <div class="progress">
                    <div
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="90"
                      class="progress-bar bg-gradient-secondary"
                      style="width: 90%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="summary-list">
              <div class="w-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-tag"
                >
                  <path
                    d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                  ></path>
                  <line x1="7" y1="7" x2="7" y2="7"></line>
                </svg>
              </div>
              <div class="w-summary-details">
                <div class="w-summary-info">
                  <h6>Ganancias</h6>
                  <p class="summary-count">$37,515</p>
                </div>
                <div class="w-summary-stats">
                  <div class="progress">
                    <div
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="65"
                      class="progress-bar bg-gradient-success"
                      style="width: 65%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="summary-list">
              <div class="w-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-credit-card"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <div class="w-summary-details">
                <div class="w-summary-info">
                  <h6>Costos</h6>
                  <p class="summary-count">$55,085</p>
                </div>
                <div class="w-summary-stats">
                  <div class="progress">
                    <div
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="80"
                      class="progress-bar bg-gradient-warning"
                      style="width: 80%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-total-order">
          <div class="widget-heading">
            <div class="w-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-shopping-cart"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path
                  d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                ></path>
              </svg>
            </div>
            <div>
              <div class="w-value">3,192</div>
              <div class="w-numeric-title">
                Total de Productos en Inventario
              </div>
            </div>
          </div>
          <div class="widget-content p-0">
            <apex-chart
              v-if="total_orders_options"
              height="290"
              type="area"
              :options="total_orders_options"
              :series="total_orders_series"
            ></apex-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "@/assets/sass/widgets/widgets.scss";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ApexChart from "vue3-apexcharts";

import { useMeta } from "@/composables/use-meta";
useMeta({ title: "CapitalQuick" });

const store = useStore();

//Revenue
const revenue_series = ref([
  {
    name: "Ingresos",
    data: [
      16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000,
      14000, 17000,
    ],
  },
  {
    name: "Gastos",
    data: [
      16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000,
      18000, 19000,
    ],
  },
]);
const revenue_options = computed(() => {
  const is_dark = store.state.is_dark_mode;
  return {
    chart: {
      fontFamily: "Nunito, sans-serif",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, curve: "smooth", width: 2, lineCap: "square" },
    dropShadow: { enabled: true, opacity: 0.2, blur: 10, left: -7, top: 22 },
    colors: is_dark ? ["#2196f3", "#e7515a"] : ["#1b55e2", "#e7515a"],
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 6,
          fillColor: "#1b55e2",
          strokeColor: "#fff",
          size: 7,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 5,
          fillColor: "#e7515a",
          strokeColor: "#fff",
          size: 7,
        },
      ],
    },
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: { show: true },
      labels: {
        offsetX: 0,
        offsetY: 5,
        style: {
          fontSize: "12px",
          fontFamily: "Nunito, sans-serif",
          cssClass: "apexcharts-xaxis-title",
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (value) {
          return value / 1000 + "K";
        },
        offsetX: -10,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: "Nunito, sans-serif",
          cssClass: "apexcharts-yaxis-title",
        },
      },
    },
    grid: {
      borderColor: is_dark ? "#191e3a" : "#e0e6ed",
      strokeDashArray: 5,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetY: 0,
      fontSize: "16px",
      fontFamily: "Nunito, sans-serif",
      markers: {
        width: 10,
        height: 10,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: { horizontal: 20, vertical: 5 },
    },
    tooltip: { theme: "dark", marker: { show: true }, x: { show: false } },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: is_dark ? 0.19 : 0.28,
        opacityTo: 0.05,
        stops: is_dark ? [100, 100] : [45, 100],
      },
    },
  };
});

//Daily Sales
const daily_sales_series = ref([
  { name: "Ventas", data: [44, 55, 41, 67, 22, 43, 21] },
  { name: "Ultima Semana", data: [13, 23, 20, 8, 13, 27, 33] },
]);
const daily_sales_options = computed(() => {
  return {
    chart: { toolbar: { show: false }, stacked: true, stackType: "100%" },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 1 },
    colors: ["#e2a03f", "#e0e6ed"],
    responsive: [
      {
        breakpoint: 480,
        options: { legend: { position: "bottom", offsetX: -10, offsetY: 0 } },
      },
    ],
    xaxis: {
      labels: { show: false },
      categories: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    },
    yaxis: { show: false },
    fill: { opacity: 1 },
    plotOptions: { bar: { horizontal: false, columnWidth: "25%" } },
    legend: { show: false },
    grid: {
      show: false,
      xaxis: { lines: { show: false } },
      padding: { top: 10, right: -20, bottom: -20, left: -20 },
    },
  };
});

//Total Orders
const total_orders_series = ref([
  { name: "Ventas", data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40] },
]);
const total_orders_options = computed(() => {
  const is_dark = store.state.is_dark_mode;
  return {
    chart: { sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 2 },
    colors: is_dark ? ["#1abc9c"] : ["#fff"],
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    yaxis: { min: 0, show: false },
    grid: { padding: { top: 125, right: 0, bottom: 0, left: 0 } },
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: is_dark ? 0.3 : 0.4,
        opacityTo: 0.05,
        stops: is_dark ? [100, 100] : [45, 100],
      },
    },
    tooltip: { x: { show: false }, theme: "dark" },
  };
});

//Sales by Category
const sales_donut_series = ref([985, 737]);
const sales_donut_options = computed(() => {
  const is_dark = store.state.is_dark_mode;
  const option = {
    chart: {},
    dataLabels: { enabled: false },
    expandOnClick: is_dark ? false : true,
    stroke: { show: true, width: 25, colors: is_dark ? "#0e1726" : "#fff" },
    colors: is_dark
      ? ["#5c1ac3", "#e2a03f", "#e7515a", "#e2a03f"]
      : ["#e2a03f", "#5c1ac3", "#e7515a"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: { width: 10, height: 10 },
      height: 50,
      offsetY: 20,
      itemMargin: { horizontal: 8, vertical: 0 },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "29px",
              fontFamily: "Nunito, sans-serif",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "26px",
              fontFamily: "Nunito, sans-serif",
              color: is_dark ? "#bfc9d4" : undefined,
              offsetY: 16,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              label: "Total",
              color: "#888ea8",
              fontSize: "29px",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce(function (a, b) {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    labels: ["No Picantes", "Base Frutas"],
  };

  if (is_dark) {
    option["states"] = {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    };
  }

  return option;
});
</script>
