import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div className= "header">
      <h1 className="title">SwapiBox</h1>
      <button
        onClick={props.showFaves}
        className="show-faves-button"
      >
      View Favorites {props.favorites.length}
      </button>
    </div>
  );
};

Header.propTypes = {
  showFaves: PropTypes.func,
  favorites: PropTypes.array
};

export default Header;