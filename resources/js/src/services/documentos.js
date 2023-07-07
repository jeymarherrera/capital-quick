import { ApiService } from "./api.service";



export const Documentos = (id,file) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/documento/up/"+id, file)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const Poster = (id,file) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/poster/up/"+id, file)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};



export const link = (id,file) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/link/up/"+id, file)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const ObtenerDocumento = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/documento/"+ id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerDocumentoE = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/documento/E/"+ id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const ObtenerPoster = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/poster/"+ id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const ObtenerPosterE = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/poster/E/"+ id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerLink = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("link/"+ id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};





