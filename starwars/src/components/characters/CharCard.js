import React from "react";

const CharCard = props => {
  return (
    <>
      <div className="character-card" key={props.index}>
        <h1>{props.name}</h1>
        <h2>Gender: {props.gender}</h2>
        <h3>Birth Year: {props.birth}</h3>
        <h4>Height: {Math.round(props.height / 30.48)} ft</h4>
      </div>
    </>
  );
};

export default CharCard;
