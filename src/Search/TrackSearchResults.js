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
      className="results_container"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  )
}

export default TrackSearchResults;