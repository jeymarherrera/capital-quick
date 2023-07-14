import { ApiService } from "./api.service";

export const ObtenerEmpresa = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("empresa/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

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