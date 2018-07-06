import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Controls from '../Controls/Controls.js';
import CardContainer from '../CardContainer/CardContainer.js';
import fetchData from '../../apiCalls.js';
import generateRandomNumber from '../../helper.js';
import './App.css';


class App extends Component {
  constructor () {
    super(); 
    
    this.state = {
      cards: [],
      scrollTextMovie: {}
    };

    this.getData = this.getData.bind(this);
  }
  
  async componentDidMount() {
    let number = generateRandomNumber() + 1;
    let category = 'films';
    const scrollTextMovie = await fetchData(number, category);
    await this.setState({
      scrollTextMovie: {
        title: scrollTextMovie.title,
        year: scrollTextMovie.release_date,
        text: scrollTextMovie.opening_crawl
      }
    });
  }

  getData = (event) => {
    var category = event.target.title;
    const url = `https://swapi.co/api/${category}/`;
    fetch(url)
      .then(data => data.json()) 
      .then(parsedData => this.fetchHomeWorld(parsedData.results))
      .then(results => this.fetchSpecies(results)) 
      .then(people => this.setState({cards: people}))
      .catch(error => console.log(error));
  }

  fetchHomeWorld = (data) => {
    const unresolvedPromises = data.map(person => (
      fetch(person.homeworld)
        .then(data => data.json())
        .then(results => ({ ...person, homeworld: results.name, population: results.population }))
    ));
    return Promise.all(unresolvedPromises);
  }

  fetchSpecies = (data) => {
    const unresolvedPromises = data.map(person => (
      fetch(person.species)
        .then(data => data.json())
        .then(results => ({ ...person, species: results.name }))
    ));
    return Promise.all(unresolvedPromises);
  }

  getPlanetData = (event) => {
    var category = event.target.title;
    const url = `https://swapi.co/api/${category}/`;
    fetch(url)
      .then(data => data.json())
      .then(planets => this.cleanPlanetData(planets.results))
      .then(cleanPlanets =>  {
        return cleanPlanets.map(planet => {
          this.fetchResidents(planet.residents)
          .then(names => planet.residents = names)
          console.log(planet)
          return planet
        });
      }
    )
      .then(results => this.setState({cards: results}));
      // .catch(error => console.log(error));
  }

  cleanPlanetData = (planets) => {
    const cleanPlanets = planets.map(planet => {
        return {planet: planet.name,
         population: planet.population,
         terrain: planet.terrain,
         climate: planet.climate,
        residents: planet.residents};
    });
    return cleanPlanets;
  }

  fetchResidents = (data) => {
    const unresolvedPromises = data.map(resident => {
        return fetch(resident)
          .then(response => response.json())
          .then(resident => resident.name)
          .catch(error => console.log(error))
      });
    return Promise.all(unresolvedPromises);
  }



  render() {
    return (
      <div className="App">
        <aside className="text-scroll-container"> 
          <p className="text-scroll">
            {this.state.scrollTextMovie.text}
            {this.state.scrollTextMovie.title}
            {this.state.scrollTextMovie.year}
          </p>
        </aside>
        <main>
          <Header />
          <Controls 
            getData= {this.getData}
            getPlanetData= {this.getPlanetData}/>
          <CardContainer cards= {this.state.cards}/>
        </main>
      </div>
    );
  }
}

export default App;
