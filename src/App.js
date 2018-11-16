import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  state = {
    // teams: gamesData.teams,
    // selectedPlayer: null
  }

  // handleSelectPlayer = (player) => {
  //   this.setState({
  //     selectedPlayer: player
  //   })
  // }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <div className="info-container">
          <TeamList/>
          {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
            <PlayerDetails />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedPlayer: state.selectedPlayer
})

export default connect(mapStateToProps)(App)
