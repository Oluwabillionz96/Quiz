import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopicCard from "../../Components/Topic/TopicCard";
import "./categoryLayout.css";
import "../../Components/Topic/topic.css";
import "../../Components/Category/category.css";
import Levels from "../../Components/Levels/Levels";

const CategoryLayout = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [showLevel, setShowLevel] = useState(false);

  function click() {
    setShowLevel(true);
  }

  useEffect(() => {
    axios
      .get("/categoryData.json")
      .then((response) => {
        const categoryData = response.data[id.toLowerCase()];
        if (categoryData) {
          setData(categoryData);
        } else {
          console.error("No data for category:", id);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  console.log(data);
  if (data.length > 0) {
    if (id === "science") {
      return (
        <section className="categoryTopic">
          <div className="flex science">
            <TopicCard
              src={data[0].img}
              topicName={data[0].name}
              hanleClick={click}
            />
            <TopicCard
              src={data[1].img}
              topicName={data[1].name}
              hanleClick={click}
            />
            <TopicCard
              src={data[2].img}
              topicName={data[2].name}
              hanleClick={click}
            />
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
    } else {
      return (
        <section className="categoryTopic entertain">
          <div className="flex science">
            <TopicCard
              src={data[0].img}
              topicName={data[0].name}
              hanleClick={click}
            />
            <TopicCard
              src={data[1].img}
              topicName={data[1].name}
              hanleClick={click}
            />
            <TopicCard
              src={data[2].img}
              topicName={data[2].name}
              hanleClick={click}
            />
          </div>
          <div className="flex science">
            <TopicCard
              src={data[3].img}
              topicName={data[3].name}
              hanleClick={click}
            />
            <TopicCard
              src={data[4].img}
              topicName={data[4].name}
              hanleClick={click}
            />
            <TopicCard
              src={data[5].img}
              topicName={data[5].name}
              hanleClick={click}
            />
          </div>
          <div className="flex science">
            <TopicCard
              src={data[6].img}
              topicName={data[6].name}
              hanleClick={click}
            />
            <TopicCard
              src={data[7].img}
              topicName={data[7].name}
              hanleClick={click}
            />
            <TopicCard
              src={data[8].img}
              topicName={data[8].name}
              hanleClick={click}
            />
          </div>
          <div className="flex science">
            <TopicCard
              src={data[9].img}
              topicName={data[9].name}
              hanleClick={click}
            />
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
    }
  }
};

export default CategoryLayout;
