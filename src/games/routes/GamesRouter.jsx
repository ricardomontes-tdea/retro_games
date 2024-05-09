import { Navigate, Routes, Route } from 'react-router-dom';
import { NewGame, RetroPage } from '../pages';
import { Navbar } from '../../ui';


export const GamesRouter = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/retro' element={ <RetroPage/> } />
          <Route path='/new_game' element={ <NewGame/> } />
          <Route path='/' element={<Navigate to="/retro" />} />
        </Routes>
      </div>
    </>
  )
}
