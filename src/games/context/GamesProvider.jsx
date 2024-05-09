import { useContext, useReducer } from "react"
import { GamesContext } from "./GamesContext"
import { gamesReducer } from "../reducers/gamesReducer"
import { gamesTypes } from "../types";
import { AuthContext } from "../../auth";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

const initialState = { games: [] };

const init = () => {
  return {
    games: []
  }
}

export const GamesProvider = ( { children } ) => {

  const [gameState, dispatch] = useReducer(gamesReducer, initialState, init);

  const { user } = useContext(AuthContext);

  const saveGame = async (game) => { 
    const newDoc = doc(collection(FirebaseDB, `${user.uid}/retro_games/games`))

    await setDoc(newDoc, game);

    game.id = newDoc.id

    const action = { payload: game, type: gamesTypes.saveGame }

    dispatch(action);
  }

  return (
    <GamesContext.Provider value={
      {
        ...gameState,
        saveGame
      }
    }
    >
      { children }
    </GamesContext.Provider>
  )
}
