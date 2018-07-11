import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = (props) => {

  const cardToRender = Object.keys(props.info).map((item, index) => {
    if (item !== 'id') {
      return <p key={index}> {[item]} : {props.info[item]} </p>;
    }
  });

  return (
    <div className="card">
      {cardToRender}
      <button
        onClick={(event) => props.checkForFaves(props.info.id, event)}
        className="favorite-button">
          Favorite
      </button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  homeWorld: PropTypes.string,
  homePop: PropTypes.number,
  info: PropTypes.object,
  checkForFaves: PropTypes.func
};

export default Card;
