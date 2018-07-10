import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = (props) => {

  let cardToRender = Object.keys(props.info).map(item => {
    console.log(props.info[item])
    return <p> {[item]} : {props.info[item]} </p>
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


  // if (props.info.species) {
  //   return (
  //     <div className="card">
  //       <h5>{props.info.name}</h5>
  //       <p>Species: {props.info.species} </p>
  //       <p>Homeworld: {props.info.homeworld}</p>
  //       <p>Homeworld population:{props.info.population}</p>
  //       <button 
  //         onClick={(event) => props.checkForFaves(props.info.id, event)}
  //         className="favorite-button">
  //         Favorite
  //       </button>
  //     </div>
  //   );
  // } 
  
  // if (props.info.terrain) {
  //   const residentsToDisplay = props.info.residents.map((resident, index) => {
  //     return (<li key={index}>{resident}</li>);
  //   });
    
  //   return (
  //     <div className="card">
  //       <h5>{props.info.name}</h5>
  //       <p>Climate: {props.info.climate} </p>
  //       <p>Terrain: {props.info.terrain}</p>
  //       <p>Population:{props.info.population}</p>
  //       <ul>Residents:{residentsToDisplay}</ul>
  //       <button 
  //         onClick={(event) => props.checkForFaves(props.info.id, event)}
  //         className="favorite-button"
  //       >
  //       Favorite
  //       </button>
  //     </div>
  //   );
  // } 
   
  // if (props.info.model) {
  //   return (
  //     <div className="card">
  //       <h5>{props.info.name}</h5>
  //       <p>Model: {props.info.model} </p>
  //       <p>Class: {props.info.class}</p>
  //       <p>Passengers:{props.info.passengers}</p>
  //       <button 
  //         onClick={(event) => props.checkForFaves(props.info.id, event)}
  //         className="favorite-button"
  //       >
  //       Favorite
  //       </button>
  //     </div>
  //   );
  // }
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
