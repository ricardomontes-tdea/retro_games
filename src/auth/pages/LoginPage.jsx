import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context"
import { useForm } from "../../hooks"


const initForm = {
  email: '',
  password: ''
};

export const LoginPage = () => {
  const { login, errorMessage } = useContext(AuthContext)

  const navigate = useNavigate();

  const { email, password, onInputChange } = useForm(initForm)

  const onLogin = async (event) => {
    event.preventDefault();

    const isValidLogin = await login(email, password);
    
    if(isValidLogin) {
      const lastPath = localStorage.getItem('lastPath') || '/'
      navigate(lastPath, { replace: true })
    };
  }

  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Inicio de Sesión</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={email}
                      onChange={onInputChange}
                      placeholder="Ingrese su correo electrónico" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      name="password"
                      value={password}
                      onChange={onInputChange}
                      placeholder="Ingrese su contraseña" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    onClick={onLogin}
                  >
                    Iniciar Sesión
                  </button>
                  <br />
                  { !errorMessage ? null : 
                    <div 
                      className="alert alert-danger" 
                      role="alert"
                    >
                      { errorMessage }
                    </div>
                  }
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
