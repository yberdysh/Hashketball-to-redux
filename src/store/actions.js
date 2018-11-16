// action types
export const SELECT_PLAYER = "SELECT_PLAYER"

// action creators
// action creators return actions
export const selectPlayer = (player) => ({
  type: SELECT_PLAYER,
  player
})
 // action gets called with a player, returns an object that goes to a reducer
