import { ApiService } from "./api.service";
export const ObtenerTodascompras = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("compras/all/"+id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerCostosOpe = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("costos/all/"+id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
///




// Balance
export const ObtenerTodosBalance = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("balances")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};





export const ObtenerBalanceid = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("balance/"+ id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const GuardarRfinaciera = (finanza) => {
    return new Promise(async (resolve) => {
        return ApiService.post("finanzag", finanza)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const GuardarGastoOpe = (finanza) => {
    return new Promise(async (resolve) => {
        return ApiService.post("GastoOpe", finanza)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const Obtenerflujo = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("flujocaja/all/"+id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerValoresM = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("Valores/mensual/"+id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerValoresC = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("Compra/mensual/"+id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerValoresG = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("Gastos/mensual/"+id)
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

// RAZONES FINANCIERAS

export const ObtenerRelacionF = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("razones/fina")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};