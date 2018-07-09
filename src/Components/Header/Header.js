import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ showFaves, favorites }) => {
  return (
    <div className= "header">
      <img src= "http://1000logos.net/wp-content/uploads/2017/06/Star-Wars-symbol.jpg" alt="Star Wars Logo" height="100" width="250"/>
      <button
        onClick={showFaves}
        className="show-faves-button"
      >
      View Favorites {favorites.length}
      </button>
    </div>
  );
};

Header.propTypes = {
  showFaves: PropTypes.func,
  favorites: PropTypes.array
};

export default Header;