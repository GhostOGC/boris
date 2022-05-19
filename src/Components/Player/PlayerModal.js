import ReactPlayer from "react-player";

const PlayerModal = ({ onClose, ...rest }) => {
  return (
    <div className="modal">
      <div className="modal-exit-icon" style={{ color: "white" }}>
        <i onClick={onClose} class="fas fa-times" />
      </div>
      <div className="player-wrapper">
        <ReactPlayer
          playing={true}
          controls={true}
          width="100%"
          heigh="100%"
          className="react-player"
          responsive="true"
          {...rest}
        />
      </div>
    </div>
  );
};
export default PlayerModal;
