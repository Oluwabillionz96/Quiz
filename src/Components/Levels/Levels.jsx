import "./level.css";
import LevelBox from "./LevelBox";
import back from "../../assets/back.png";
import { useState } from "react";

const Levels = ({ handleIconClick }) => {
  const [levelSelected, setLevelSelected] = useState("medium");
  return (
    <div className="levels">
      <header>
        Select Levels
        <img src={back} alt="cancel icon" onClick={handleIconClick} />
      </header>
      <LevelBox
        type="Easy"
        handleClick={(e) => {
          setLevelSelected(e.target.value);
          console.log(levelSelected);
        }}
      />
      <LevelBox
        type="Medium"
        handleClick={(e) => {
          setLevelSelected(e.target.value);
          console.log(levelSelected);
        }}
      />
      <LevelBox
        type="Hard"
        handleClick={(e) => {
          setLevelSelected(e.target.value);
          console.log(levelSelected);
        }}
      />
    </div>
  );
};

export default Levels;
