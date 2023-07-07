import { ApiService } from "./api.service";

export const Loguear = (login) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/login", login)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const RegistrarUsuario = (usuario) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/registrar", usuario)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const RecuperarUsuario = (user) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/recuperar", user)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const TodosUsuarios = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("usuarios/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const Logout = () => {
    return new Promise(async (resolve) => {
        return ApiService.post("/logout")
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
