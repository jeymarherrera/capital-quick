import { ApiService } from "./api.service";

export const GuardarProyeccion = (proyeccion) => {
    console.log(proyeccion);
    return new Promise(async (resolve) => {
        return ApiService.post("proyeccion", proyeccion)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerProyeccion = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("resultado")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
