import React from 'react';

const Header = (props) => {
  return (
    <div className = "header">
      <button
        onClick={props.showFaves}
      >
      View Favorites {props.favorite.length}
      </button>
    </div>
  );
};


export default Header;