import "./topic.css";

const TopicCard = ({ src, topicName, hanleClick }) => {
  return (
    <div className="topic">
      <div className="img">
        <div>
          <img src={src} />
        </div>
        <div>
          <h4>{topicName}</h4>
          <button
            onClick={() => {
              hanleClick();
            }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
