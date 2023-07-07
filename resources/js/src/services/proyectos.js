import { ApiService } from "./api.service";

//Obtener info
//generales
export const ObtenerCategorias = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/categoria")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerODS = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("proyecto/ods")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerProyecto = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/editar/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerAreas = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("proyecto/area")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//obtener proyectos
export const ObtenerProyectoById = (id) => {
    console.log(id);
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/" + id)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerProyectoByIdE = (id) => {
    console.log(id);
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/E/" + id)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerProyectoEstudiante = (id) => {
    console.log(id);
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/estudiante/" + id)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerTipoRecursoById = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/recurso/" + id)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerTipoRecursoByIdE = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/recurso/E/" + id)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerIntegrantesByProyectoId = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/integrantes/" + id)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerIntegrantesByProyectoIdE = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/integrantes/E/" + id)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerProyectosByAsesor = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/proyectos/" + id + "/administrar")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerProyectoByIntegrante = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/proyecto/" + id + "/administrar")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerProyectosByCoordinador = (id) => {
    console.log(id);
    return new Promise(async (resolve) => {
        return ApiService.get("/coordinador/" + id + "/administrar")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerProyectos = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("/administrador/administrar")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerRecursosByProyecto = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/proyectos/" + id + "/recursos")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const GuardarProyecto = (proyecto) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/proyecto", proyecto)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const GuardarRecursos = (recursos) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/recursos", recursos)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const EnviarRetroalimentacion = (id, mensaje) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/retroalimentar/" + id + "/proyecto", mensaje)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const EnviarRetroalimentacionAprobacion = (id, mensaje) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/retroalimentar/" + id + "/aprobacion", mensaje)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const EnviarSolicitud = (id, mensaje) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/revision/" + id + "/proyecto", mensaje)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


//Editar Proyecto
export const ActualizarProyecto = (id, proyecto) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/proyecto/" + id + "/edit", proyecto)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ActualizarProyectoE = (id, proyecto) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/proyecto/E/" + id + "/edit", proyecto)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//Mejorar Proyecto 
export const MejorasProyecto = (id, proyecto) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/proyecto/" + id + "/Mejoras", proyecto)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const AprobarProyecto = (id, proyecto) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/proyecto/" + id + "/aprobar", proyecto)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const SolicitarAprobacion = (id, proyecto) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/proyecto/" + id + "/aprobacion", proyecto)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const DesactivarProyecto = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/proyecto/" + id + "/desactivar")
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
