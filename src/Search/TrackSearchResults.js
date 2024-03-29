import './Search.css'

const TrackSearchResults = (props) => {
  const {
    track,
    chooseTrack
  } = props

  const handlePlay = () => {
    chooseTrack(track)
  }

  return (
    <div
      className="result_container"
      onClick={handlePlay}
      style={{ cursor: "pointer" }}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="results_song">
        <div className="result_primary">{track.title}</div>
        <div>{track.artist}</div>
      </div>
    </div>
  )
}

export default TrackSearchResults;