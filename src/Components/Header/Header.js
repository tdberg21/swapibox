import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: props.favorites
    };
  }

  render() {
    return (
      <div className = "header">
        <button>View Favorites 0</button>
      </div>
    );
  }
}