import { combineReducers } from 'redux'
import tracks from './tracks'
import playlist from './playlists'
import filterTracks from './filterTracks'
import { routerReducer } from 'react-router-redux'

export default combineReducers ({
  routing: routerReducer,
  tracks,
  playlist,
  filterTracks
})
