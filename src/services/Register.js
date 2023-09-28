import axios from "axios";
import Swal from "sweetalert2";
const URL = "https://studybuddy-backend.vercel.app";

// Login user - Endpoint https://studybuddy-backend.vercel.app/api/user
/*
* @param correo: user email
* @param contrasena: user password
*/
export const createUser = async ({ nombre,
    apellido,
    fechaNacimiento,
    correo,
    contrasena,
    confirmarContrasena,
    ficha,
    programa,
    tipoDocumento,
    numeroDocumento }, navigate) => {
    try {
        const response = await axios.post(`${URL}/api/user`, {
            nombre,
            apellido,
            fechaNacimiento,
            correo,
            contrasena,
            confirmarContrasena,
            ficha,
            programa,
            tipoDocumento,
            numeroDocumento
        });
        if (response.status === 200 && response.data) {
            Swal.fire({
                title: response.data.messagge,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            }).then(() => {
                console.log('Usuario creado exitosamente')
                location.href = "/welcome";

            });
        }
    } catch (error) {
        if (error.response.status === 400) {
            Swal.fire({
                icon: "error",
                title: 'Por favor verifique sus datos.',
            });
        }
    }
};
