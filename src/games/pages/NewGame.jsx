import { useContext, useEffect } from "react"
import { GamesContext } from "../context/GamesContext"
import { useForm } from '../../hooks'
import { AuthContext } from "../../auth"


const newEmptyGame = {
  name: '',
  year: '',
  description: '',
  cover: ''
}

export const NewGame = () => {
  const { saveGame } = useContext(GamesContext);

  const { name, year, description, cover, onInputChange } = useForm(newEmptyGame)

  const onCreateGame = async (event) => { 
    event.preventDefault();

    const newGame = {
      name, 
      year,
      description,
      cover
    }
     
    await saveGame(newGame);

  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={name}
                      onChange={onInputChange}
                      placeholder="Enter game name" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="year" 
                      name="year"
                      value={year}
                      onChange={onInputChange}
                      placeholder="Enter game year" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="description" 
                      name="description"
                      value={description}
                      onChange={onInputChange}
                      placeholder="Enter game description" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cover">Cover</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="cover" 
                      name="cover"
                      value={cover}
                      onChange={onInputChange}
                      placeholder="Enter cover photo url" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg btn-block"
                    onClick={onCreateGame}
                  > 
                    Create game 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
