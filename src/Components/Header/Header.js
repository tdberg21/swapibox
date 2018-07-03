import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      favorites: []
    };
  }

  render() {
    return (
      <div className = "header">
        <button>View Favorites {this.state.favorites.length}</button>
      </div>
    );
  }
}