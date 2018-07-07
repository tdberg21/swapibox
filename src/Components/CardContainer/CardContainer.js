import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css'
import PropTypes from 'prop-types';

const CardContainer = ({ cards, addToFaves }) => {
  const cardsToRender = cards.map(item => {
    return (
      <Card 
        info={item}
        key={item.id}
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