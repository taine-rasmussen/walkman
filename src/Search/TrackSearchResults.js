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
      <div className="top_results_container">
        <div className="top_result">
          <h3>Top Results</h3>
          <div className="top_result_info">
            <img src={topResults[0]?.albumUrl} style={{ height: "64px", width: "64px" }} />
            {topResults[0]?.title}
            {topResults[0]?.artist}
          </div>
        </div>
        {topResults.map(result => {
          if (topResults.indexOf(result) == 0) return
          (
            <>
              other artists
            </>
          )
        })}
      </div>

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