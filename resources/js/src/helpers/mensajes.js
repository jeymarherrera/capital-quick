import Swal from "sweetalert2";

const ProcesarMensajesValidacion = (res) => {
    try {
        var mensajes = "";
        Object.entries(res.errors).forEach((err) => {
            console.log(err);
            err[1].forEach((ie) => {
                mensajes += ie + "\n";
            });
        });
    } catch (error) {
        console.log(error);
    }
    return mensajes;
};

export const ShowMessages = (res) => {
    if (res.status == 200) {
        Swal.fire({
            showConfirmButton: true,
            icon: "success",
            title: res.data.title,
            text: res.data.mensaje,
        });
    } else if (res.status == 202) {
        Swal.fire({
            showConfirmButton: true,
            icon: "info",
            title: res.data.title,
            text: res.data.mensaje,
        });
    } else if (res.status == 400) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: res.data.mensaje,
        });
    } else if (res.status == 401) {
        Swal.fire({
            icon: "warning",
            title: res.data.title,
            text: res.data.mensaje,
        });
    } else if (res.status == 404) {
        Swal.fire({
            icon: "error",
            title: "No encontrado...",
            text: res.data.mensaje,
        });
    } else if (res.status == 422) {
        Swal.fire({
            icon: "warning",
            title: "Control de Validación",
            text:
                "Por favor, verifique: " + ProcesarMensajesValidacion(res.data),
        });
    } else if (res.status == 524) {
        Swal.fire({
            icon: "warning",
            title: "Tiempo de ejecución agotado",
            text: "Si visualizas este mensaje, el tiempo de ejecución de una petición se ha agotado, no te preocupes, lo que hayas mandado se ha guardado hasta cierto punto. Por favor, verifica en el reporte respectivo",
            footer: "<strong>Puedes intentarlo nuevamente</strong>",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo ha ocurrido, si ve este mensaje por favor contacte con soporte!",
        });
    }
};

export const ShowMessagesToastr = (res) => {
    if (res.status == 200) {
        Swal.fire({
            showConfirmButton: false,
            icon: "success",
            toast: true,
            timer: 3000,
            position: "bottom-end",
            title: res.data.title,
        });
    } else if (res.status == 202) {
        Swal.fire({
            showConfirmButton: false,
            icon: "success",
            toast: true,
            timer: 3000,
            position: "bottom-end",
            title: res.data.title,
        });
    } else if (res.status == 400) {
        Swal.fire({
            icon: "warning",
            title: res.data.title,
            toast: true,
            timer: 3000,
            position: "bottom-end",
            showConfirmButton: false,
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Ha ocurrido un error a nivel de servidor, por favor contactar al administrador",
            toast: true,
            timer: 3000,
            position: "bottom-end",
            showConfirmButton: false,
        });
    }
};

export const toastr = (mensaje, type) => {
    Swal.fire({
        showConfirmButton: false,
        icon: type,
        toast: true,
        timer: 3500,
        position: "bottom-end",
        title: mensaje,
    });
};

export const toastrlong = (mensaje, type) => {
    Swal.fire({
        showConfirmButton: false,
        icon: type,
        toast: true,
        timer: 6500,
        position: "bottom-end",
        title: mensaje,
    });
};
