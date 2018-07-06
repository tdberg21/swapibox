import React from 'react';
import PropTypes from 'prop-types';


const Card = (props) => {
  if (props.info.species) {
    console.log(props.info)
    return (
      <div>
        <h5>{props.info.name}</h5>
        <p>species: {props.info.species} </p>
        <p>homeworld: {props.info.homeworld}</p>
        <p>homeworld population:{props.info.population}</p>
        <button>Favorite</button>
      </div>
    );
  } else if (props.info.terrain) {
    console.log(props.info)
    return (
      <div>
        <h5>{props.info.planet}</h5>
        <p>climate: {props.info.climate} </p>
        <p>terrain: {props.info.terrain}</p>
        <p>population:{props.info.population}</p>
        <button>Favorite</button>
      </div>
    );
  }
};

Card.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  homeWorld: PropTypes.string,
  homePop: PropTypes.number
};

export default Card;



// Planet Cards:
// Name
// Terrain
// Population
// Climate
// Residents
// A button to “Favorite” the planet
// Vehicle Cards:
// Name
// Model
// Class
// Number of Passengers
// A button to “Favorite” the vehicle

