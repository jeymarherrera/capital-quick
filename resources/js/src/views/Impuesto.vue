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
                  <span>Impuesto</span>
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
                <h6 class="">Editar Impuesto de Estado de Resultado</h6>
                <div class="row">
                  <div class="col-lg-11 mx-auto">
                    <div class="row">
                      <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                        <div class="form">
                          <div class="row">
                            <div class="col-4">
                              <div class="form-group">
                                <label for="impuesto"
                                  >Nuevo valor de impuesto (en decimal)</label
                                >
                                <input
                                  type="text"
                                  name=""
                                  class="form-control mb-4"
                                  id="impuesto"
                                  placeholder="Ingrese valor del nuevo impuesto"
                                  v-model="impuesto.valor"
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
          <button
            type="button"
            class="btn btn-success"
            @click="guardarImpuesto"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/sass/users/account-setting.scss";
import * as msg from "@/helpers/mensajes";
import * as EmpresaService from "@/services/empresas";
import * as BalanceService from "@/services/balance";
export default {
  data() {
    return {
      empresa: 0,
      impuesto: {
        valor: 0,
      },
    };
  },
  methods: {
    obtenerEmpresa() {
      msg.toastr("Cargando datos, por favor espere...", "info");
      EmpresaService.ObtenerEmpresa(1)
        .then((empresaData) => {
          this.empresa = empresaData;
          console.log(this.empresa);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    guardarImpuesto() {
      BalanceService.GuardarImpuesto(
        this.empresa.id,
        parseFloat(this.impuesto.valor)
      )
        .then((res) => {
          msg.ShowMessages(res);
          if (res.status == 200) {
            this.clearDatos();
            this.$router.go();
          }
        })
        .catch((err) => console.log(err));
    },
    imprimir(id) {
      console.log(id);
    },
    clearDatos() {
      this.impuesto = {
        valor: 0,
      };
    },
  },
  mounted() {
    // this.obtenerEmpresa()
  },
};
</script>
