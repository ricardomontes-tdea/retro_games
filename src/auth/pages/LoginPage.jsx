import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

import { AuthContext } from "../context"
import { useForm } from "../../hooks"


const initForm = {
  email: '',
  password: ''
};

export const LoginPage = () => {
  const { login, googleLogin, errorMessage } = useContext(AuthContext)

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

  const onLoginWithGoogle = async (event) => { 
    event.preventDefault();

    const isValidLogin = await googleLogin();
    
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
                <h5 className="card-title text-center">Sign in</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={email}
                      onChange={onInputChange}
                      placeholder="Enter email" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      name="password"
                      value={password}
                      onChange={onInputChange}
                      placeholder="Enter Password" 
                    />
                  </div>
                  <div className="form-row">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-block"
                      onClick={onLogin}
                    >
                      Login user
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-block"
                      onClick={onLoginWithGoogle}
                    >
                      Login with google
                    </button>
                  </div>
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
                <span>Register an account</span>
                <Link to="/register" className=""> Register </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
