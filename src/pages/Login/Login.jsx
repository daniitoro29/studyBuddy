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
              <form action="" method='post'>
                <div>
                  <label>Correo Electrónico</label>
                  <br />
                  <input type="text" placeholder='Ingrese el correo electrónico'/>
                </div>
                <div>
                  <label>Contraseña</label>
                  <br />
                  <input type="text" placeholder='Ingrese la contraseña'/>
                </div>
                <input type="submit" value="Iniciar Sesión" />
                <br />
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