import './Search.css'

const TrackSearchResults = (props) => {
  const {
    chooseTrack,
    topResults,
    searchResults
  } = props

  const handlePlay = (track) => {
    chooseTrack(track)
  }

  console.log(topResults)
  return (
    <>
      {topResults.map(result => (
        <div className="top_results_container">
          <div className="top_result">
            <h3>Top Results</h3>
            <div className="top_result_info">
              <img src={result.albumUrl} style={{ height: "64px", width: "64px" }} />
              {result.title}
              {result.artist}
            </div>
          </div>
        </div>
      ))}

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