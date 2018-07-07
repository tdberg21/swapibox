import React from 'react';
import PropTypes from 'prop-types';


const Card = (props) => {
  if (props.info.species) {
    return (
      <div>
        <h5>{props.info.name}</h5>
        <p>species: {props.info.species} </p>
        <p>homeworld: {props.info.homeworld}</p>
        <p>homeworld population:{props.info.population}</p>
        <button 
        onClick={() => props.addToFaves(props.info.id)}
        className="favorite-button">Favorite</button>
      </div>
    );
  } 
  
  if (props.info.terrain) {
    if (props.info.residents === undefined) {
      return
    }
    else {
      const residentsToDisplay = props.info.residents.map((resident, i) => {
        <li>resident: {resident}</li>}
    )
      
    return (
      <div>
        <h5>{props.info.planet}</h5>
        <p>climate: {props.info.climate} </p>
        <p>terrain: {props.info.terrain}</p>
        <p>population:{props.info.population}</p>
        <ul>{residentsToDisplay}</ul>
        <button onClick={() => props.addToFaves(props.info.id)}>Favorite</button>
      </div>
    );
  }
    
} 
   
  if (props.info.model) {
    return (
      <div>
        <h5>{props.info.name}</h5>
        <p>model: {props.info.model} </p>
        <p>class: {props.info.class}</p>
        <p>passengers:{props.info.passengers}</p>
        <button onClick={() => props.addToFaves(props.info.id)}>Favorite</button>
      </div>
    )
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

