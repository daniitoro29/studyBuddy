import React from 'react'
import arrowBack from "../../assets/arrowBack.svg";
import padlock from "../../assets/padlock.svg";

const baseClassName='login-container'

function Login() {
  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}_containerLogin`}>
        <div className={`${baseClassName}_titleAndArrowBack`}>
          <img src={arrowBack}/>
          <h1>Inicio de Sesión</h1>
        </div>
        <div>
          <div className={`${baseClassName}_formAndSvg`}>
            <img src={padlock} />
            <div>
              <form action="" method='post' className={`${baseClassName}_form`}>
                <div className={`${baseClassName}_inputs`}>
                  <label>Correo Electrónico</label>
                  <br />
                  <input type="text" placeholder='Ingrese el correo electrónico' />
                </div>
                <div className={`${baseClassName}_inputs`}>
                  <label>Contraseña</label>
                  <br />
                  <input type="text" placeholder='Ingrese la contraseña' />
                </div>
                <button
                  variant="outline-success"
                  className={`${baseClassName}_button1`}
                >
                  Iniciar Sesión
                </button>
                <a href="">Registrate</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login