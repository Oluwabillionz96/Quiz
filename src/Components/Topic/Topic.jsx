import "./topic.css";
import TopicCard from "./TopicCard";
import general from "../../assets/general.svg";
import myth from "../../assets/myth.svg";
import sport from "../../assets/sport.svg";
import geography from "../../assets/geography.svg";
import politics from "../../assets/politics.svg";
import art from "../../assets/art.svg";
import celebrities from "../../assets/celebrities.svg";
import animals from "../../assets/animals.svg";
import vechicles from "../../assets/vechicles.svg";
import history from "../../assets/history.svg";
import Levels from "../Levels/Levels";
import { useState } from "react";

const Topic = () => {
  const [showLevel, setShowLevel] = useState(false);
  function click() {
    setShowLevel(true);
  }
  return (
    <section className="topicc">
      <h2>Topics</h2>
      <div className="topic-container flex">
        <div className="flex">
          <TopicCard
            src={general}
            topicName="General Knowledge"
            hanleClick={click}
          />
          <TopicCard src={myth} topicName="Mythology" hanleClick={click} />
          <TopicCard src={sport} topicName="Sport" hanleClick={click} />
        </div>
        <div className="flex">
          <TopicCard src={geography} topicName="Geography" hanleClick={click} />
          <TopicCard src={history} topicName="History" hanleClick={click} />
          <TopicCard src={politics} topicName="Politics" hanleClick={click} />
        </div>
        <div className="flex">
          <TopicCard src={art} topicName="Art" hanleClick={click} />
          <TopicCard
            src={celebrities}
            topicName="Celebrities"
            hanleClick={click}
          />
          <TopicCard src={animals} topicName="Animals" hanleClick={click} />
        </div>
        <div className="flex">
          <TopicCard src={vechicles} topicName="Vechicles" hanleClick={click} />
        </div>
      </div>
      {showLevel && (
        <Levels
          handleIconClick={() => {
            setShowLevel(false);
          }}
        />
      )}
    </section>
  );
};

export default Topic;
