import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Controls from '../Controls/Controls.js';
import CardContainer from '../CardContainer/CardContainer.js';
import fetchData from '../../apiCalls.js';
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

  getData = (event) => {
    var category = event.target.title;
    const url = `https://swapi.co/api/${category}/`;
    fetch(url)
      .then(response => response.json()) 
      .then(parsedData => this.fetchHomeWorld(parsedData.results))
      .then(results => this.fetchSpecies(results)) 
      .then(people => this.setState({cards: people}))
      .catch(error => console.log(error));
  }

  fetchHomeWorld = (results) => {
    const unresolvedPromises = results.map(person => (
      fetch(person.homeworld)
        .then(response => response.json())
        .then(results => ({ ...person, homeworld: results.name, population: results.population }))
    ));
    return Promise.all(unresolvedPromises);
  }

  fetchSpecies = (apiData) => {
    const unresolvedPromises = apiData.map((person, index) => (
      fetch(person.species)
        .then(response => response.json())
        .then(results => ({ 
          name: person.name, 
          homeworld: person.homeworld, 
          population: person.population, 
          species: results.name, 
          id: `${index} ${person.name}` 
        }))
    ));
    return Promise.all(unresolvedPromises);
  }

  getPlanetData = (event) => {
    var category = event.target.title;
    const url = `https://swapi.co/api/${category}/`;
    return fetch(url)
      .then(response => response.json())
      .then(planets => this.cleanPlanetData(planets.results))
      .then(cleanPlanets =>  {
        return cleanPlanets.map(planet => {
          this.fetchResidents(planet.residents)
            .then(names => planet.residents = names);
          return planet;
        });
      }
      )
      .then(results => this.setState({cards: results}))
      .catch(error => alert(error));
  }

  cleanPlanetData = (planets) => {
    const cleanPlanets = planets.map((planet, index) => { 
      return {
        name: planet.name,
        population: planet.population,
        terrain: planet.terrain,
        climate: planet.climate,
        residents: planet.residents, 
        id: `${index} ${planet.name}`
      };
    });
    return cleanPlanets;
  }

  fetchResidents = (residentsURLs) => {
    const unresolvedPromises = residentsURLs.map(resident => (
      fetch(resident)
        .then(response => response.json())
        .then(resident => resident.name)
        .catch(error => console.log(error))
    ));
    return Promise.all(unresolvedPromises);
  }

  getVehicleData = (event) => {
    var category = event.target.title;
    const url = `https://swapi.co/api/${category}/`;
    fetch(url)
      .then(response => response.json())
      .then(parsedData => this.cleanVehicleData(parsedData.results))
      .then(cleanData => this.setState({cards: cleanData}));
  }

  cleanVehicleData = (vehicles) => {
    const vehiclesToRender = vehicles.map((vehicle, index) => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        id: `${index} ${vehicle.name}`
      };
    });
    return vehiclesToRender;
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
            getData= {this.getData}
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
