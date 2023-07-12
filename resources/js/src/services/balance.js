import { ApiService } from "./api.service";

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

