import { gamesTypes } from "../types";

export const gamesReducer = (state = {}, action) => {
  switch (action.type) {
    case gamesTypes.saveGame:
      return {
        ...state,
        games: state.games.push(action.payload)
      };
    case gamesTypes.updateGame:
      return {
        ...state,
        games: state.games.map( game => {
          if (game.id === action.payload.id) {
            return { ...action.payload };
          }

          return game;
        })
      }
    default:
      return state;
  }
}