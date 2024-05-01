import { useContext } from "react";
import { AuthContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";

const initForm = {
  email: '',
  password: '',
  displayName: ''
};

export const RegisterPage = () => {
  const { register, errorMessage } = useContext(AuthContext);

  const navigate = useNavigate();
  
  const { email, password, displayName, onInputChange } = useForm(initForm)

  const onRegister = async (event) => { 
    event.preventDefault();

    const isValidRegister = await register(email, password, displayName);
    
    if (isValidRegister) {
      const lastPath = localStorage.getItem('lastPath') || '/'
      navigate(lastPath, { replace: true })
    }
  }
  
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Register a new account</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">User name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="displayName" 
                      name="displayName"
                      value={displayName}
                      onChange={onInputChange}
                      placeholder="Enter user name" 
                    />
                  </div>
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
                      placeholder="Enter password" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    onClick={onRegister}
                  >
                    Register
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
                <span>Do you have an existing account?</span>
                <Link to="/login" className=""> Login </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
