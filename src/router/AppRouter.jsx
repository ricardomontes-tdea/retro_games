import { Routes, Route } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth'
import { PublicRouter } from './PublicRouter'
import { GamesRouter } from '../games/routes/GamesRouter'
import { PrivateRouter } from './PrivateRouter'
import { GamesProvider } from '../games/context'


export const AppRouter = () => {
  return (
   <>
    <Routes>
      <Route   
        path='/login' 
        element={
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        }
      />

      <Route   
        path='/register' 
        element={
          <PublicRouter>
            <RegisterPage />
          </PublicRouter>
        }
      />
  
      <Route path='/*' element={
        <PrivateRouter>
          <GamesProvider>
            <GamesRouter />
          </GamesProvider>
        </PrivateRouter>
      } />    
    </Routes>
   </>
  )
}
