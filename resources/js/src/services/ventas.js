import { ApiService } from "./api.service";



export const ObtenerTodasventas = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("ventas/"+id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const ObtenerVentas = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("/ventasTotal")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

// Actualizar Datos
