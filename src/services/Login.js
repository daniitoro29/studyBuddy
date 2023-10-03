import axios from "axios";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";
const URL = "https://studybuddy-backend.vercel.app/";

// Login user - Endpoint https://studybuddy-backend.vercel.app/api/logIn
/*
* @param correo: user email
* @param contrasena: user password
*/
export const userLogin = async ({ email, password }, navigate) => {
    try {
        const response = await axios.post(`${URL}api/logIn`, {
            email,
            password,
        });

        if (response.status === 200 && response.data) {
            Swal.fire({
                title: 'Datos ingresados correctamente',
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            }).then(() => {
                const authToken = response.data.token;
                localStorage.setItem("token", authToken);
                const usuario = jwtDecode(authToken);
                localStorage.setItem("name", usuario.nameAdmin)
                location.href = "/welcome";

            });
        }
    } catch (error) {
        if (error) {
            return {
                success: false,
                message: "Por favor verifica tus datos",
                error: error.response.data,
            };

        }
        console.log('Este es el error', error.response.data);
    }
};
