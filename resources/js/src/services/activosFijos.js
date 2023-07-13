import { ApiService } from "./api.service";



/* export const calcularActivosFijos = () => {
  return new Promise(async resolve => {
    return ApiService.get("activos/fijos")
      .then((response) => {
        resolve(response.data);
      })
      .catch (({response}) =>{
        resolve(response);
      });
  });
}; */


export const ObtenerTodosLosActivos = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("activos/fijos")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
