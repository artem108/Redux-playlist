let mockApiData = [
    {
      id: 1,
      name: 'song 1'
    },
    {
      id: 2,
      name: 'song 2'
    },
    {
      id: 3,
      name: 'song 3'
    },
    {
      id: 4,
      name: 'song 4'
    },
    {
      id: 5,
      name: 'song 5'
    },
]
let loading = [
  {
    name: 'Loading...'
  }
]
export const loadingTracks = () => dispatch => {
      dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: loading })
}

export const getTracks = () => dispatch => {
    setTimeout(() => {
      dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
    }, 2000)
}
