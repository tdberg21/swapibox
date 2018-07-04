import React from 'react';

const CardContainer = (props) => {
  if (props.length > 0) {
    var cardsToRender = props.map((person, index) => {
      return (
        <div className="Card" key={index}>
          <h5>{person.name}</h5>
        </div>
      );
    });
  }
  
  return (
    <div>{cardsToRender}</div>
  );
};

export default CardContainer;