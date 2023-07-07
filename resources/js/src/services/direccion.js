import { ApiService } from "./api.service";

export const ObtenerPaises = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("paises/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerPaisById = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/pais/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerProvinciaById = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/provincia/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerProvinciasByPaises = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("paises/provincias/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
