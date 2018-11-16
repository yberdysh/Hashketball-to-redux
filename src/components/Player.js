import React from 'react'
import {selectPlayer} from '../store/actions'
import {connect} from 'react-redux'

const Player = ({ player, selectAPlayer }) => {
  return (
    <div onClick={() => selectAPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  // selectAPlayer: selectPlayer
  // set to a function selectPlayer that can be invoked
  selectAPlayer: (player) => dispatch(selectPlayer(player))
})

export default connect(null, mapDispatchToProps)(Player)
