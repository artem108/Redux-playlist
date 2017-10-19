import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import{ getTracks, loadingTracks }from './action/tracks'

const style = {
  marginTop: "10px",
  listStyle: "none"
}
class App extends Component {

  addTrack() {
    this.props.onAddTrack(this.trackInput.value)
    this.trackInput.value = ''
  }
  findTrack() {
    console.log(this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value)
    this.searchInput.value = ''
  }

  render() {
    console.log(this.props.tracks);
    return (
      <div className="App">
      <section>
          <input type="text"  style={style} ref={(input) => { this.trackInput = input}}/>
          <button type="button" onClick={this.addTrack.bind(this)}>Add track</button>
        </section>
        <section>
            <input type="text"  style={style} ref={(input) => { this.searchInput = input}}/>
            <button type="button" onClick={this.findTrack.bind(this)}>Find track</button>
        </section>
        <section>
            <button type="button" onClick={this.props.onLoadingTracks}>Get tracks</button>
        </section>
          <ul style={style}>
            {this.props.tracks.map((track, index) =>
              <li key={index}>{track.name}</li>
            )}
            </ul>
        </div>
      );
    }
  }

export default connect (
state => ({
  tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
}),
dispatch => ({
  onAddTrack: (name) => {
    const payload = {
      id: Date.now().toString(),
      name
    }
    dispatch({ type: 'ADD_TRACK', payload })
  },
  onFindTrack: (name) => {
    dispatch({ type: 'FIND_TRACK', payload: name})
  },
  onLoadingTracks: () => {
    dispatch(loadingTracks())
    dispatch(getTracks())
  },
  onGetTracks: () => {
    dispatch(getTracks())
  }
})
)(App)
