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
                  <span>Flujo de Caja</span>
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
                <h6 class="">Datos Flujo Caja</h6>
                <div class="row">
                  <div class="col-lg-11 mx-auto">
                    <div class="row">
                      <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                        <div class="form">
                          <div class="row">
                            <div class="col-6">
                              <div class="form-group">
                                <label>Balance Asociado</label>
                                <select
                                  class="form-control form-select"
                                  v-model="Flujo_Caja.id_balance"
                                >
                                  <option value="0">Seleccione Evento</option>
                                  <option
                                    v-for="bal in Balance_anual"
                                    :key="bal.id"
                                    :value="bal.id"
                                  >
                                    {{ bal.titulo_balance }}
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="form-group">
                                <label for="">Titulo del flujo</label>
                                <input
                                  type="text"
                                  name="titulo_flujo"
                                  id="titulo_flujo"
                                  class="form-control"
                                  v-model="Flujo_Caja.titulo_flujo"
                                  placeholder="Ingrese nombre del sub evento"
                                />
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="form-group">
                                <label for="flujoA">Flujo Caja . A</label>
                                <select
                                  v-model="Flujo_Caja.flujo_A"
                                  id="flujo_A"
                                  class="form-select mb-4"
                                  required
                                >
                                  <option value disabled selected>
                                    Seleccione flujo
                                  </option>
                                  <option value="Entradas de efectivo" selected>
                                    Entradas de efectivo
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="form-group">
                                <label for="CuentasA">Cuentas a Usar</label>
                                <select
                                  v-model="Flujo_Caja.CajaA"
                                  id="CajaA"
                                  class="form-select mb-4"
                                  required
                                  multiple
                                >
                                  <option value disabled selected>
                                    Seleccione las Cuentas
                                  </option>
                                  <option value="ventas_anuales" selected>
                                    ventas_anuales
                                  </option>
                                  <option value="Otras_ventas" selected>
                                    Otras_ventas
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="form-group">
                                <label for="">Total Entrada</label>
                                <input
                                  type="text"
                                  name="total_Entrada"
                                  id="total_Entrada"
                                  class="form-control"
                                  :value="Flujo_Caja.total_Entrada"
                                  disabled
                                />
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="form-group">
                                <label for="flujo_P">Flujo Caja . P</label>
                                <select
                                  v-model="Flujo_Caja.flujo_P"
                                  id="flujo_P"
                                  class="form-select mb-4"
                                  required
                                >
                                  <option value disabled selected>
                                    Seleccione flujo
                                  </option>
                                  <option value="Salidas de efectivo" selected>
                                    Salidas de efectivo
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="form-group">
                                <label for="CajaP">Cuentas a Usar</label>
                                <select
                                  v-model="Flujo_Caja.CajaP"
                                  id="CajaP"
                                  class="form-select mb-4"
                                  required
                                  multiple
                                >
                                  <option value disabled selected>
                                    Seleccione las Cuentas
                                  </option>
                                  <option value="compras">compras</option>
                                  <option value="costos_operativos">
                                    costos_operativos
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="form-group">
                                <label for="">Total Salidas</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  class="form-control"
                                  :value="Flujo_Caja.totalSalidas"
                                  disabled
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
          <button type="button" class="btn btn-success" @click="guardarFlujo">
            Crear
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/sass/users/account-setting.scss";
import * as msg from "@/helpers/mensajes";
import * as BalanceService from "@/services/compras";
//import * as grupoService from "../../services/grupos";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      tab: null,
      Balance_anual: [],
      Flujo_Caja: {
        id_balance: 0,
        titulo_flujo: "",
        flujo_A: "",
        CajaA: [],
        total_Entrada: "Total de cobro a los clientes",
        flujo_P: "",
        CajaP: [],
        totalSalidas: "Total de salidas ",
        flujo_bala: 1,
      },
    };
  },
  methods: {
    //este metodo esta en compras sacarlo y meter en balance
    getAllBalance() {
      BalanceService.ObtenerTodosBalance()
        .then((Balance_anual) => (this.Balance_anual = Balance_anual))
        .catch((err) => console.log(err));
    },

    guardarFlujo() {
      Swal.fire({
        title:
          "¿Está seguro de que desea Realizar el Flujo de caja con los datos seleccionados ? ",
        text: "Esta acción cerrara el flujo del ano actual",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, solicitar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          BalanceService.GuardarFlujoCaja(this.Flujo_Caja)
            .then((res) => {
              msg.ShowMessages(res);
              if (res.status == 200) {
                var id_balance = this.Flujo_Caja.id_balance;
                this.Flujo_Caja.id_balance = id_balance;
                //  this.$router.push("/");
              }
            })
            .catch((err) => console.log(err));
          console.log(this.Flujo_Caja);
        }
      });
    },
  },
  mounted() {
    this.getAllBalance();
  },
};
</script>