import React, { useState } from 'react';
import arrowBack from "../../assets/arrowBack.svg";
import padlock from "../../assets/padlock.svg";
import { userLogin } from "../../services/Login";
import { useNavigate } from "react-router-dom";

const baseClassName = 'login-container';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Establecer estado de carga al iniciar sesión
    userLogin(formData, navigate)
      .then(() => {
        setIsLoading(false); // Establecer estado de carga a false después de recibir la respuesta 200
      })
      .catch((error) => {
        setIsLoading(false); // Establecer estado de carga a false en caso de error
        console.log(error);
      });
  };

  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}_containerLogin`}>
        <div className={`${baseClassName}_titleAndArrowBack`}>
          <img src={arrowBack} alt="Volver" />
          <h1>Inicio de Sesión</h1>
        </div>
        <div>
          <div className={`${baseClassName}_formAndSvg`}>
            <img src={padlock} alt="Candado" />
            <div>
              <form onSubmit={handleSubmit} className={`${baseClassName}_form`}>
                <div className={`${baseClassName}_inputs`}>
                  <label>Correo Electrónico</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    placeholder="Ingrese el correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={`${baseClassName}_inputs`}>
                  <label>Contraseña</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Ingrese la contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className={`${baseClassName}_button1`}>
                  Iniciar Sesión
                </button>
                <a href="">Regístrate</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;