import React from 'react'
import {selectPlayer} from '../store'

const Player = ({ player, selectAPlayer }) => {
  return (
    <div onClick={() => selectAPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  selectAPlayer: selectPlayer
  // set to a function selectPlayer that can be invoked
  // selectAPlayer: () => dispatch(selectPlayer())
})

export default connect(null, mapDispatchToProps)(Player)
