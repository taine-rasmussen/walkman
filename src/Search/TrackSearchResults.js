import './Search.css'

const TrackSearchResults = (props) => {
  const {
    chooseTrack,
    searchResults
  } = props

  const handlePlay = (track) => {
    chooseTrack(track)
  }

  return (
    <>
      {searchResults?.map(track => {
        return (
          < div
            className="result_container"
            onClick={() => { handlePlay(track) }}
            style={{ cursor: "pointer" }}
            key={track.uri}
          >
            <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="results_track">
              <div className="result_primary">{track.title}</div>
              <div className="result_secondary">{track.artist}</div>
            </div>
          </div>
        )
      })
      }
    </>
  )
}

export default TrackSearchResults;