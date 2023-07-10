<template>
  <div class="layout-px-spacing dash_2">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Registro Finanza</a>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </teleport>

    <div class="row layout-top-spacing">
      <div
        class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 layout-spacing"
        v-for="balance in Balance_anual"
        :key="balance.id"
      >
        <div class="widget widget-card-two">
          <div class="widget-heading">
            <div class="media">
              <div class="media-aside align-self-start"></div>
              <div class="media-body">
                <h6>Razones Financieras</h6>
              </div>
            </div>
          </div>
          <div class="widget-content">
            <a
              :href="`/components/Rfinaciera/${balance.id}`"
              class="btn btn-secondary"
              >Ver Detalles</a
            >
          </div>
        </div>
      </div>

      <div
        class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 layout-spacing"
        v-for="balance in Balance_anual"
        :key="balance.id"
      >
        <div class="widget widget-card-two">
          <div class="widget-heading">
            <div class="media">
              <div class="media-aside align-self-start"></div>
              <div class="media-body">
                <h6>Registros Ventas</h6>
              </div>
            </div>
          </div>
          <div class="widget-content">
            <a
              :href="`/components/ventas/${balance.id}`"
              class="btn btn-secondary"
              >Ver Detalles</a
            >
          </div>
        </div>
      </div>

      <div
        class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 layout-spacing"
        v-for="balance in Balance_anual"
        :key="balance.id"
      >
        <div class="widget widget-card-two">
          <div class="widget-heading">
            <div class="media">
              <div class="media-aside align-self-start"></div>
              <div class="media-body">
                <h6>Registros Compras</h6>
              </div>
            </div>
          </div>
          <div class="widget-content">
            <a
              :href="`/components/Compras/${balance.id}`"
              class="btn btn-secondary"
              >Ver Detalles</a
            >
          </div>
        </div>
      </div>
      <div
        class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 layout-spacing"
        v-for="balance in Balance_anual"
        :key="balance.id"
      >
        <div class="widget widget-card-two">
          <div class="widget-heading">
            <div class="media">
              <div class="media-aside align-self-start"></div>
              <div class="media-body">
                <h6>Gastos Operativos</h6>
              </div>
            </div>
          </div>
          <div class="widget-content">
            <a
              :href="`/components/CostoOpe/${balance.id}`"
              class="btn btn-secondary"
              >Ver Detalles</a
            >
          </div>
        </div>
      </div>
      <div
        class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 layout-spacing"
        v-for="balance in Balance_anual"
        :key="balance.id"
      >
        <div class="widget widget-card-two">
          <div class="widget-heading">
            <div class="media">
              <div class="media-aside align-self-start"></div>
              <div class="media-body">
                <h6>Flujo Caja</h6>
              </div>
            </div>
          </div>
          <div class="widget-content">
            <a
              v-if="
                Balance_anual.length &&
                typeof Balance_anual[0].flujo_bala !== 'undefined'
              "
              :href="
                Balance_anual[0].flujo_bala === 1
                  ? `/components/FlujoCaja/${balance.id}`
                  : `/components/flujoD/${balance.id}`
              "
              class="btn btn-secondary"
            >
              Ver Detalles
            </a>
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
    };
  },
  computed: {},
  methods: {
    getAllBalance(id) {
      BalanceService.ObtenerBalanceid(id)
        .then((Balance_anual) => {
          this.Balance_anual = Balance_anual;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getAllBalance(id);
  },
};
</script>
