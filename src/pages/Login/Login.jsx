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

  const handleInputChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  function handle(event) {
    event.preventDefault();
  }

  const handleLogin = () => {
    userLogin(formData, navigate)
      .then(() => {
      })
      .catch((error) => {
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
              <form onSubmit={handle} className={`${baseClassName}_form`}>
                <div className={`${baseClassName}_inputs`}>
                  <label>Correo Electrónico</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Ingrese el correo electrónico"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={`${baseClassName}_inputs`}>
                  <label>Contraseña</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Ingrese la contraseña"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className={`${baseClassName}_button1`} onClick={handleLogin}>
                  Iniciar Sesión
                </button>
                <a href="/register">Regístrate</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;