import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Controls from '../Controls/Controls.js';
import CardContainer from '../CardContainer/CardContainer.js';
import { fetchData, getPeople, fetchPlanets, fetchVehicleData } from '../../apiCalls.js';
import './App.css';

class App extends Component {
  constructor () {
    super(); 
    
    this.state = {
      cards: [],
      favorites: [],
      scrollTextMovie: {}
    };
  }

  async componentDidMount() {
    let category = 'films';
    const scrollTextMovie = await fetchData(category);
    const scrollTextYear = scrollTextMovie.release_date;
    await this.setState({
      scrollTextMovie: {
        title: scrollTextMovie.title,
        year: scrollTextYear,
        text: scrollTextMovie.opening_crawl
      }
    });
  }

  checkForFavorites = (key, event) => {
    let duplicate = this.state.favorites.find(favorite => {
      return favorite.id === key;
    });
    let button = event.target;
    if (duplicate) {
      button.closest('div').classList.remove('favorite');
      button.innerText = 'favorite';
      this.removeFromFavorites(key);
    } else {
      button.closest('div').classList.add('favorite');
      button.innerText = 'unfavorite';
      this.addToFaves(key);
    }
  }

  addToFaves = (key) => {
    let cardToFave;
   
    this.state.cards.forEach(card => {
      if (card.id === key) {
        cardToFave = card;
      }
    });
    this.setState({
      favorites: [...this.state.favorites, cardToFave]
    });
  }

  removeFromFavorites = (key) => {
    const newFaves = this.state.favorites.filter(favorite => {
      return favorite.id !== key;
    });
    this.setState({
      favorites: newFaves
    });
  }

  showFaves = () => {
    this.setState({
      cards: this.state.favorites
    });
  }

  getPeopleData = async (event) => {
    let category = event.target.title;
    const people = await getPeople(category);
    this.setState({ cards: people });
  }

  getPlanetData = async (event) => {
    let category = event.target.title;
    const planets = await fetchPlanets(category);
    this.setState({ cards: planets });
  }

  getVehicleData = async (event) => {
    let category = event.target.title;
    const vehicles = await fetchVehicleData(category);
    this.setState({cards: vehicles});
  }

  render() {
    return (
      <div className="App">
        <aside className="text-scroll-container"> 
          <p className="text-scroll">
            {this.state.scrollTextMovie.text}
            <br/>
            {this.state.scrollTextMovie.title}
            <br/>
            {this.state.scrollTextMovie.year}
          </p>
        </aside>
        <main className="card-holder">
          <Header 
            favorites={this.state.favorites}
            showFaves={this.showFaves}/>
          <Controls 
            getData= {this.getPeopleData}
            getPlanetData= {this.getPlanetData}
            getVehicleData= {this.getVehicleData}
          />
          <CardContainer 
            cards= {this.state.cards}
            checkForFaves= {this.checkForFavorites}
          />
        </main>
      </div>
    );
  }
}

export default App;
