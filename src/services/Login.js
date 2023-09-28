import axios from "axios";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";
const URL = "https://studybuddy-backend.vercel.app";

// Login user - Endpoint https://studybuddy-backend.vercel.app/api/user
/*
* @param correo: user email
* @param contrasena: user password
*/
export const userLogin = async ({ correo, contrasena }, navigate) => {
    try {
        const response = await axios.post(`${URL}/api/user`, {
            correo,
            contrasena,
        });

        if (response.status === 200 && response.data) {
            Swal.fire({
                title: response.data.messagge,
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
        if (error.response.status === 400) {
            Swal.fire({
                icon: "error",
                title: 'Por favor verifique sus datos.',
            });
        }
    }
};
