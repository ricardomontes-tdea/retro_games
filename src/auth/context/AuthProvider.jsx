import { useReducer } from "react";

import { AuthContext } from "./AuthContext";
import { authReducer } from "../reducers";
import { authTypes } from "../types";
import { registerUser, signInUser } from "../../firebase/providers";

const initialState = { logged: false };

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }) => {
  
  const [authState, dispatch ] = useReducer(authReducer, initialState, init);

  const register = async (email, password, displayName) => { 
    const { ok, uid, photoURL, errorMessage } = await registerUser({ email, password, displayName });

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = { uid, email, photoURL, displayName };
    
    const action = { type: authTypes.login, payload };

    localStorage.setItem('user', JSON.stringify(payload));

    dispatch(action);

    return true;
  }

  const login = async (email = '', password = '') => {

    const { ok, uid, photoURL, displayName, errorMessage } = await signInUser(email, password)

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } })
      return false;
    }

    const payload = { uid, email, photoURL, displayName }
    
    const action = { type: authTypes.login, payload }

    localStorage.setItem('user', JSON.stringify(payload))

    dispatch(action);

    return true;
  }

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: authTypes.logout })
  }


  return (
    <AuthContext.Provider value={
      {
        ...authState,
        register: register,
        login: login,
        logout: logout
      }
    }
    >
      { children }
    </AuthContext.Provider>
  )
}
