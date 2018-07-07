import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css'
import PropTypes from 'prop-types';

const CardContainer = ({ cards, addToFaves }) => {
  const cardsToRender = cards.map(item => {
    return (
      <Card 
        info={item}
        key={cards.length}
        addToFaves={addToFaves} 
      />
    );
  });
  
  return (
    <div 
      className="card-container">
      {cardsToRender}
    </div>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array
};

export default CardContainer;