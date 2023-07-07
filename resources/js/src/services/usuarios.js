import { ApiService } from "./api.service";

//Obtener Datos
export const ObtenerRol = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("/rol")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerRol2 = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("/rol/two")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerRolbyCoordinador = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("/rol/cordinador")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//Nivel Usuario
export const Nivel_Coordinador = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/nivel/C/"+ id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const Nivel_Coordinador_control = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/nivel/Control/"+ id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const Tipo_usuarios = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/user/R/"+ id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
// VER EL USUARIO
export const ObtenerUsuariobyId = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/usuario/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerUsuariobyIdA = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/usuario/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerUsuariobyIdC = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/usuario/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerUsuariobyIdEV = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/usuario/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerUsuariobyIdPAR = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/usuario/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerUsuariobyIdDOC = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/usuario/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerUsuariobyIdINV = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/usuario/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const ObtenerUsuariobyIdE = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/usuario/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerUsuarioUSERS = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("usuarios/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ObtenerUsuarios = () => {
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

export const ObtenerUsuariosexcEstudiantes = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("usuarios/cordinador/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const ObtenerCoordinadores = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("coordinador/all/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerCoordinadoresall = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("coordinador/all/")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerAsesores = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("asesor/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerEstudiantes = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("estudiante/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ObtenerCorreobyId = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/correo/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const Tipo_Rol = (id) => {
    return new Promise(async (resolve) => {
        return ApiService.get("/tiporol/" + id)
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

// Actualizar Asignacion Coordinador
export const ActualiziarCoordinador = (id_cor, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/coordinador/" + id_cor + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ActualiziarCoordinadorADM = (id_cor, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/coordinador/ADM/" + id_cor + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

// ACTUALIZAR CORREO 

export const ActualizarCorreo = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/correo/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ActualizarCorreoADM = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/correo/ADM/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ActualizarCorreoA = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/correo/A/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ActualizarCorreoC = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/correo/C/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ActualizarCorreoE = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/correo/E/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//CONTRASENA
export const ActualizarPass = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/password/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ActualizarPassADM = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/password/ADM/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ActualizarPassE = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/password/E/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};


export const ActualizarPassCordinador = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/password/C/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ActualizarPassAsesor = (id, edit) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/password/A/" + id + "/edit", edit)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const getAdminsCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("admin/count")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const getCoordinatorsCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("coordinator/count")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const getAdvisorsCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("advisor/count")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const getStudentsCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("student/count")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const getActiveCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("active/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const getUtpCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("utp/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const getUpCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("up/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const getDoctorCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("doctor/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const getMagisterCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("magister/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const getLicenciadoCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("licenciado/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const getUsmaCount = () => {
    return new Promise(async (resolve) => {
        return ApiService.get("usma/all")
            .then((response) => {
                resolve(response.data);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const EnviarReporte = (id, mensaje) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/reporte/" + id + "/usuario", mensaje)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const EnviarReporteADM = (id, mensaje) => {
    return new Promise(async (resolve) => {
        return ApiService.post("/reporte/ADM/" + id + "/usuario", mensaje)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

// ACTUALIZAR PERFIL

export const ActualizarPerfil = (id_u, usuario) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/perfil/" + id_u + "/edit", usuario)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ActualizarPerfilCOOR = (id_u, usuario) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/perfil/C/" + id_u + "/edit", usuario)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ActualizarPerfilASE = (id_u, usuario) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/perfil/ASE/" + id_u + "/edit", usuario)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ActualizarPerfilADM = (id_u, usuario) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/perfil/ADM/" + id_u + "/edit", usuario)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
export const ActualizarPerfilE = (id_u, usuario) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/perfil/E/" + id_u + "/edit", usuario)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

// Actualizar Datos
export const ActualizarRol = (id_rol, rol) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/rol/" + id_rol + "/edit", rol)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const ActualizarRolC= (id_rol, rol) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/rol/C/" + id_rol + "/edit", rol)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
//
export const ActualizarRolbyCoordinador = (id_rol, rol_c) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/coordinador/" + id_rol + "/edit", rol_c)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//
export const DesactivarCoordinador = (id_user, user) => {
    return new Promise(async (resolve) => {
        return ApiService.put(
            "/coordinador/" + id_user + "/desactivacion",
            user
        )
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

export const DesactivarUsuario = (id_user, user) => {
    return new Promise(async (resolve) => {
        return ApiService.put("/usuario/" + id_user + "/desactivacion", user)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//Borrar Datos PELIGROSO
export const DeleteUsuario = (id_e) => {
    return new Promise(async (resolve) => {
        return ApiService.delete("/usuario/delete/" + id_e)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};

//Asignacion
export const AsignarCoordinador = (asignar) => {
    return new Promise(async (resolve) => {
        return ApiService.post("coordinador", asignar)
            .then((response) => {
                resolve(response);
            })
            .catch(({ response }) => {
                resolve(response);
            });
    });
};
