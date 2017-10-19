
const InitialState = ''

export default function filterTracks(state=InitialState, action) {
  if (action.type === 'FIND_TRACK') {
    return action.payload
  }
  return state
}
