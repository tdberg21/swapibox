import React from 'react';
import PropTypes from 'prop-types';

const Controls = (props) => {

  return (
    <div>
      <button
        onClick={(event) => props.getData(event)}
        title="people"
      >
        People
      </button>
      <button
        onClick={(event) => props.getData(event)}
        title="planets"
      >
      Planets
      </button>
      <button
        onClick={(event) => props.getData(event)}
        title="vehicles"
      >
      Vehicles
      </button>
    </div>
  );
};



export default Controls;


// The cards should have:
// Name
// Homeworld
// Species
// Population of Homeworld
// A button to “Favorite” the person
// The button should have an active class indicating it has been pressed.