import { ApiService } from "./api.service";
export const ObtenerTodasventas = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("ventas/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const GuardarEvento = (evento) => {
    return new Promise(async (resolve) => {
        return ApiService.post("evento", evento)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


// Actualizar Datos


export const ActualziarEve = (id_eve, eve) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/evento/" + id_eve + "/edit", eve)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

// Desactivar Datos

export const Desactivareve = (id_eve, eve) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/evento/" + id_eve + "/desactivacion", eve)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//Borrar Datos PELIGROSO
export const DeleteEvento = (id_e) => {
    return new Promise(async (resolve) => {
        return ApiService.delete("/evento/delete/" + id_e)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
