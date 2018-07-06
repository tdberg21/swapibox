import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CardContainer = ({ cards }) => {
  const cardsToRender = cards.map((item, index) => {
    return (
      <Card 
        info={item}
        key={index} />
    );
  });
  
  return (
    <div>{cardsToRender}</div>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array
};

export default CardContainer;