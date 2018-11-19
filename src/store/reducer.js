import gamesData from '../gamesData'
import {SELECT_PLAYER} from './actions'

const initialState = {
    teams: gamesData.teams,
    selectedPlayer: null
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case SELECT_PLAYER:
      return {...state, selectedPlayer: action.payload}
    default:
      return state
  }
}

export default reducer
