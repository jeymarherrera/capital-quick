import { ApiService } from "./api.service";
export const ObtenerTodascompras = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("compras/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerCostosOpe = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("costos/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
///

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


// Balance
export const ObtenerTodosBalance = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("balance/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const Obtenerflujo = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("flujocaja/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerValoresM = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("Valores/mensual")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerValoresC = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("Compra/mensual")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerValoresG = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("Gastos/mensual")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//guardar
export const GuardarFlujoCaja = (flujoc) => {
    return new Promise(async (resolve) => {
        return ApiService.post("flujo/balance", flujoc)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
