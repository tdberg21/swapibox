import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Controls from '../Controls/Controls.js';
import Container from '../CardContainer/CardContainer.js';
import fetchData from '../../apiCalls.js';
import generateRandomNumber from '../../helper.js';
import './App.css';


class App extends Component {
  constructor () {
    super(); 
    
    this.state = {
      info: [],
      scrollTextMovie: {}
    };

    this.getData = this.getData.bind(this);
  }
  

  async componentDidMount() {
    let number = generateRandomNumber() + 1;
    let category = 'films';
    const scrollTextMovie = await fetchData(number, category);
    await this.setState({
      scrollTextMovie
    });
  }

  getData = async (event) => {
    var category = event.target.title;
    const url = `https://swapi.co/api/${category}/`;
    fetch(url)
      .then(data => data.json()) 
      .then(parsedData => this.setState({info: parsedData.results}))
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
        <aside className="text-scroll-container"> 
          <p>
            {this.state.scrollTextMovie.opening_crawl}
            {this.state.scrollTextMovie.title}
            {this.state.scrollTextMovie.release_date}
          </p>
        </aside>
        <main>
          <Header />
          <Controls getData= {this.getData}/>
          <Container info= {this.state.info}/>
        </main>
      </div>
    );
  }
}

export default App;
