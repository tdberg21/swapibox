import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ getData, getPlanetData, getVehicleData }) => {

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
        onClick={(event) => getVehicleData(event)}
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


