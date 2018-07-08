import React from 'react';
import './Controls.css';
import PropTypes from 'prop-types';

const Controls = ({ getData, getPlanetData, getVehicleData }) => {

  return (
    <div className="controls-container">
      <button
        onClick={(event) => getData(event)}
        title="people"
        className="controls-button people-button"
      >
        People
      </button>
      <button
        onClick={(event) => getPlanetData(event)}
        title="planets"
        className="controls-button planet-button"
      >
      Planets
      </button>
      <button
        onClick={(event) => getVehicleData(event)}
        title="vehicles"
        className="controls-button vehicle-button"
      >
      Vehicles
      </button>
    </div>
  );
};

Controls.propTypes = {
  getData: PropTypes.func,
  getVehicleData: PropTypes.func,
  getPlanetData: PropTypes.func
};

export default Controls;


