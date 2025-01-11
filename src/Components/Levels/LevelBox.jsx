const LevelBox = ({ type, handleClick, border }) => {
  return (
    <div className="level" style={{ borderColor: border }}>
      <input
        type="radio"
        name="level"
        id={type.toLowerCase()}
        value={type.toLowerCase()}
        onChange={handleClick}
      />
      <label htmlFor={type.toLowerCase()}>{type}</label>
    </div>
  );
};

export default LevelBox;
