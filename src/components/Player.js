import React from 'react'
import {selectPlayer} from '../store'

const Player = ({ player, selectPlayer }) => {
  return (
    <div onClick={() => selectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  selectAPlayer: selectPlayer
  // set to a function selectPlayer that can be invoked
})

export default connect(null, mapDispatchToProps)(Player)
