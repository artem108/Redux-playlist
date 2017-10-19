
const InitialState = [
    'home playlist',
    'job playlist'
]

export default function playlist(state=InitialState, action) {
  if (action.type === 'ADD_PLAYLIST') {
      return state
  } else if (action.type === 'DELETE_PLAYLIST') {
      return state
  }
  return state
}
