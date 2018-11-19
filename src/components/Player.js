import React from 'react'
import {connect} from 'react-redux';
import {selectPlayer} from '../store/actions'

const Player = ({ player, selectAPlayer }) => {
  return (
    <div onClick={() => selectAPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  selectAPlayer: (player) => dispatch(selectPlayer(player))
})

export default connect(null, mapDispatchToProps)(Player)
