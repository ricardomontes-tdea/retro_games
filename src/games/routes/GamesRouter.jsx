import { Navigate, Routes, Route } from 'react-router-dom';
import { RetroPage } from '../pages';
import { Navbar } from '../../ui';


export const GamesRouter = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/retro' element={ <RetroPage/> } />
          <Route path='/' element={<Navigate to="/retro" />} />
        </Routes>
      </div>
    </>
  )
}
