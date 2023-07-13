<template>
    <div>
      <h1>Activos Fijos Netos</h1>
      <table>
        <thead>
          <tr>
            <th>Activo Fijo</th>
            <th>Valor Inicial</th>
            <th>Depreciación Acumulada</th>
            <th>Activo Fijo Neto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(activoFijo, index) in activosFijos" :key="index">
            <td>{{ activoFijo.nombre }}</td>
            <td>{{ activoFijo.valor_inicial }}</td>
            <td>{{ activoFijo.depreciacion_acumulada }}</td>
            <td>{{ activoFijo.valor_neto }}</td>

            <!-- <td>{{ activoFijo.activo }}</td>
            <td>{{ formatCurrency( activoFijo.valorInicial) }}</td>
            <td>{{ formatCurrency(activoFijo.depreciacionAcumulada) }}</td>
            <td>{{ formatCurrency(activoFijo.activoFijoNeto) }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <script setup>
  import { onMounted, ref } from "vue";
  import * as libroService from "../services/activosFijos";

  const activosFijos = ref([]);

  onMounted(() => {
    obtenerActivos();
  });

  const obtenerActivos = () => {
    libroService
      .ObtenerTodosLosActivos()
      .then((activosFijo) => {
        activosFijos.value = activosFijo;
        console.log(activosFijos.value);
        console.log(activosFijo);
      })
      .catch((e) => console.log(e));
  };

  const formatCurrency = (value) => {
    if (typeof value === "number") {
      return `$${value.toFixed(2)}`;
    }
    return value;
  };
  </script>

  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  </style>
