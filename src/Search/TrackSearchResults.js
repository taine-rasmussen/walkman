import './Search.css'

const TrackSearchResults = (props) => {
  const {
    chooseTrack,
    searchResults
  } = props

  const handlePlay = (track) => {
    chooseTrack(track)
  }

  const topResult = searchResults[0]

  if (searchResults.length < 1) return;

  return (
    <>
      <div className="all_results_container">
        <div>
          <h3>Top Result</h3>
          <div>
            <img src={topResult?.albumUrl} style={{ height: "64px", width: "64px" }} />
            {topResult?.title}
            {topResult?.artist}
          </div>
        </div>
        <div className="scroll_results">
          <h3>Songs</h3>
          {searchResults?.map(track => {
            if (searchResults.indexOf(track) == 0) return;
            return (
              <>
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
              </>
            )
          })
          }
        </div>
      </div>
    </>
  )
}

export default TrackSearchResults;