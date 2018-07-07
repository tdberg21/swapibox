import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ getData, getPlanetData, getVehicleData }) => {

  return (
    <div>
      <button
        onClick={(event) => getData(event)}
        title="people"
        className="people-button"
      >
        People
      </button>
      <button
        onClick={(event) => getPlanetData(event)}
        title="planets"
        className="planet-button"
      >
      Planets
      </button>
      <button
        onClick={(event) => getVehicleData(event)}
        title="vehicles"
        className="vehicle-button"
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


