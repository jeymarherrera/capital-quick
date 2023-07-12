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
