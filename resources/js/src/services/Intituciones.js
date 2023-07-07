import { ApiService } from "./api.service";

//Obteber Datos
export const ObtenerTodo = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("instituciones/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerUniversidad = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("Universidad/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerSedes = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("sedes")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerFacultad = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("facultad/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerCarrera = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("carrera/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerAsignatura = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("asignaturas/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerSedeByUniversidad = (id_instituciones) => {
    return new Promise(async (resolve) => {
        return ApiService.get("Universidad/sede/" + id_instituciones)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerFacultadBySede = (id_fa) => {
    return new Promise(async (resolve) => {
        return ApiService.get("Universidad/facultad/" + id_fa)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerCarreraByFacultad = (id_carrera) => {
    return new Promise(async (resolve) => {
        return ApiService.get("Universidad/carrera/" + id_carrera)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerAsignaturaByCarrera = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("Universidad/asignatura/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

// Guardar Datos
export const GuardarUniversidad = (Instituto) => {
    return new Promise(async (resolve) => {
        return ApiService.post("instituciones/crear", Instituto)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const GuardarSede = (sede) => {
    return new Promise(async (resolve) => {
        return ApiService.post("instituciones/sede", sede)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const GuardarFacultad = (id_sede) => {
    return new Promise(async (resolve) => {
        return ApiService.post("instituciones/facultad", id_sede)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const GuardarCarrera = (id_facultad) => {
    return new Promise(async (resolve) => {
        return ApiService.post("instituciones/carrera", id_facultad)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const GuardarAsignatura = (asignatura) => {
    return new Promise(async (resolve) => {
        return ApiService.post("instituciones/asig", asignatura)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//by ID
export const ObtenerUniversidadById = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/universidad/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerSedeById = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/sede/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerFacultadById = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/facultad/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerCarreraById = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/carrera/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerAsignaturaById = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/asignatura/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

// Actualizar Datos
export const ActualizarUniversidad = (id_u, universidad) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/universidad/" + id_u + "/edit", universidad)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ActualizarSede = (id_s, sede) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/sede/" + id_s + "/edit", sede)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ActualizarFacultad = (id_f, facultad) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/facultad/" + id_f + "/edit", facultad)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ActualizarCarrera = (id_c, Carrera) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/carrera/" + id_c + "/edit", Carrera)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ActualizarAsignatura = (id_a, asignatura) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/asignatura/" + id_a + "/edit", asignatura)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
// Borrar Datos

export const DeleteUniversidad = (id_a) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/universidad/delete/" + id_a)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const Deletesede = (id_s) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/sede/delete/" + id_s)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const DeleteFacultad = (id_f) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/facultad/delete/" + id_f)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const DeleteCarrera = (id_c) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/carrera/delete/" + id_c)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const Deleteasignatura = (id_a) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/Asignatura/delete/" + id_a)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
