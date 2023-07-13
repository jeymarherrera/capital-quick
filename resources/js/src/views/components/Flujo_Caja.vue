<template>
  <div class="layout-px-spacing">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th v-for="mes in meses">{{ mes }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total de Compras</td>
            <td v-for="(valor, index) in valores">{{ valor }}</td>
          </tr>

          <tr>
            <td>Total de entrada</td>
            <td v-for="(valor, index) in valores">{{ valor }}</td>
          </tr>
          <tr>
            <td>Total de gastos</td>
            <td v-for="(valor, index) in Gastos">{{ valor }}</td>
          </tr>
          <tr>
            <td>Total de Compras</td>
            <td v-for="(valor, index) in Compras">{{ valor }}</td>
          </tr>
          <tr>
            <td>Total de Salidas</td>
            <td v-for="(valor, index) in sumaValoresT">{{ valor }}</td>
          </tr>
          <tr>
            <td>Total de Flujo neto de efectivo</td>
            <td v-for="(valor, index) in restaValoresT">{{ valor }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Resto del código... -->
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
      meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      valores: [],
      Gastos: [],
      Compras: [],
      sumaValoresT: {},
      restaValoresT: {},
      totalAnual: 0,
    };
  },
  methods: {
    getAllvalores(id) {
      return new Promise((resolve, reject) => {
        flujoService
          .ObtenerValoresM(id)
          .then((valores) => {
            this.valores = valores;
            resolve();
          })
          .catch((err) => reject(err));
      });
    },
    getAllvaloresG(id) {
      return new Promise((resolve, reject) => {
        flujoService
          .ObtenerValoresG(id)
          .then((Gastos) => {
            this.Gastos = Gastos;
            resolve();
          })
          .catch((err) => reject(err));
      });
    },
    getAllvaloresC(id) {
      return new Promise((resolve, reject) => {
        flujoService
          .ObtenerValoresC(id)
          .then((Compras) => {
            this.Compras = Compras;
            resolve();
          })
          .catch((err) => reject(err));
      });
    },

    calcularSumaValores() {
      for (let mes = 1; mes <= 12; mes++) {
        const gasto = parseFloat(this.Gastos[mes].replace(",", ""));
        const compra = parseFloat(this.Compras[mes].replace(",", ""));
        const suma = gasto + compra;
        this.sumaValoresT[mes.toString()] = suma.toFixed(2);
      }
      this.calcularRestaValores();
    },

    calcularRestaValores() {
      for (let mes = 1; mes <= 12; mes++) {
        const entrada = parseFloat(this.valores[mes].replace(",", ""));
        const salida = parseFloat(
          this.sumaValoresT[mes.toString()].replace(",", "")
        );
        const resta = entrada - salida;
        this.restaValoresT[mes.toString()] = resta.toFixed(2);
      }
      this.calcularTotalAnual();
    },

    calcularTotalAnual() {
      let total = 0;
      for (let mes = 1; mes <= 12; mes++) {
        total += parseFloat(this.restaValoresT[mes.toString()]);
      }
      this.totalAnual = total.toFixed(2);

      flujoService
        .GuardarFlujoFinal(this.totalAnual)
        .then((res) => {
          msg.ShowMessages(res);
          if (res.status == 200) {
          }
        })
        .catch((err) => console.log(err));
    },
  },
  async mounted() {
    const id = this.$route.params.id;
    try {
      await Promise.all([
        this.getAllvalores(id),
        this.getAllvaloresG(id),
        this.getAllvaloresC(id),
      ]);
      this.calcularSumaValores();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>