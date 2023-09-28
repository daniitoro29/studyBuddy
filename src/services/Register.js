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
            name: nombre,
            lastName: apellido,
            dateBirth: fechaNacimiento,
            email: correo,
            password: contrasena,
            confirmarContrasena,
            course: ficha,
            program: programa,
            typeDocument: tipoDocumento,
            numberDocument: numeroDocumento
        });
        if (response.status === 200 && response.data) {
            Swal.fire({
                title: 'Usuario creado exitosamente',
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            }).then(() => {
                console.log('Usuario creado exitosamente', response)
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
        console.log('Error ****', error);
    }
};
