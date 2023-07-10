<template>
  <div class="layout-px-spacing dash_2">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Balance General</a>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </teleport>

    <div class="row layout-top-spacing">
      <div
        v-for="balance in Balance_anual"
        :key="balance.id"
        class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
      >
        <div class="widget widget-card-two">
          <div class="widget-heading">
            <div class="media">
              <div class="media-aside align-self-start">
                <div class="w-img">
                  <img src="@/assets/images/g-8.png" alt="avatar" />
                </div>
              </div>
              <div class="media-body">
                <h6>
                  {{ balance.Nombre_empresa }} - {{ balance.titulo_balance }}
                </h6>
                <p class="meta-date-time">
                  Desde : {{ balance.fecha_inicio }} - Hasta:
                  {{ balance.fecha_cierre }}
                </p>
              </div>
            </div>
          </div>
          <div class="widget-content">
            <h5
              :class="{
                'green-text': isYearPrevious(balance),
                'red-text': isYearCurrent(balance),
              }"
            >
              {{ getYearText(balance) }}
            </h5>
            <a
              :href="`/components/SelectFinanza/${balance.id}`"
              class="btn btn-secondary"
              >Ver Detalles</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/sass/widgets/widgets.scss";
import * as BalanceService from "@/services/compras";
import * as msg from "@/helpers/mensajes";
import * as flujoService from "@/services/compras";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {};
  },
  data() {
    return {
      items: [],
      Balance_anual: [],
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    getYearText() {
      return (balance) => {
        if (this.isYearPrevious(balance)) {
          return "Año Anterior";
        } else if (this.isYearCurrent(balance)) {
          return "Año Actual";
        }
        return "";
      };
    },
  },
  methods: {
    isYearPrevious(balance) {
      const startDate = new Date(balance.fecha_inicio);
      const endDate = new Date(balance.fecha_cierre);
      const startYear = startDate.getFullYear();
      const endYear = endDate.getFullYear();
      return startYear < this.currentYear && endYear < this.currentYear;
    },
    isYearCurrent(balance) {
      const startDate = new Date(balance.fecha_inicio);
      const endDate = new Date(balance.fecha_cierre);
      const startYear = startDate.getFullYear();
      const endYear = endDate.getFullYear();
      return startYear <= this.currentYear && endYear >= this.currentYear;
    },
    getAllBalance() {
      BalanceService.ObtenerTodosBalance()
        .then((Balance_anual) => {
          this.Balance_anual = Balance_anual;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getAllBalance();
  },
};
</script>

<style>
.green-text {
  color: green;
}

.red-text {
  color: red;
}
</style>