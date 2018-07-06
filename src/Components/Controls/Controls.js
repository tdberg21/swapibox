import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ getData, getPlanetData }) => {

  return (
    <div>
      <button
        onClick={(event) => getData(event)}
        title="people"
      >
        People
      </button>
      <button
        onClick={(event) => getPlanetData(event)}
        title="planets"
      >
      Planets
      </button>
      <button
        onClick={(event) => getPlanetData(event)}
        title="vehicles"
      >
      Vehicles
      </button>
    </div>
  );
};

Controls.propTypes = {
  getData: PropTypes.func
};

export default Controls;


