import { ApiService } from "./api.service";

export const GuardarImpuesto = (id, impuesto) => {
    console.log(id, impuesto);
    return new Promise(async (resolve) => {
        return ApiService.put("/impuesto/" + id + "/editar/" + impuesto)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerInventarioTotal = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("totalInventario/")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerCuentasxCobrarTotal = () => {
  return new Promise(async (resolve) => {
      return ApiService.get("totalCuentasxCobrar/")
          .then((response) => {
              resolve(response.data);
          })
          .catch(({ response }) => {
              resolve(response);
          });
  });
};

export const ObtenerCuentasxPagarTotal = () => {
  return new Promise(async (resolve) => {
      return ApiService.get("totalCuentasxPagar/")
          .then((response) => {
              resolve(response.data);
          })
          .catch(({ response }) => {
              resolve(response);
          });
  });
};

export const ObtenerPrestamosCortoPlazo = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("prestamosCP/")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
  };

  export const ObtenerProyeccionFinanciera = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("proyeccionFinanciera/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
  };

  export const ObtenerEfectivoTotal = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("efectivoTotal/")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
  };

  export const ObtenerCostosOperativos = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("costosOperativos/")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
  };

  export const ObtenerDepreciacion = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("depreciacion/")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
  };

  export const ObtenerCostosProduccion = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("costosProduccion/")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
  };