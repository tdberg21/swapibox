import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Controls from '../Controls/Controls.js';
import Container from '../CardContainer/CardContainer.js';
// import apiCall from '../../apiCalls.js';
import './App.css';


class App extends Component {
  constructor () {
    super(); 
    
    this.state = {
      info: [],
      scrollText: 'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....'
    };
  }
  

  randomNumGenerator = () => {
    return Math.floor(Math.random() * 7);
  };

  componentDidMount() {
    // fetch(`https://swapi.co/api/films/${this.randomNumGenerator()}/`)
    //   .then(data => data.json())
    //   .then(parsedData => this.setState({
    //     scrollText: parsedData.opening_crawl
    //   }));
  }


  render() {
    return (
      <div className="App">
        <aside className="text-scroll-container"> 
          <p>{this.state.scrollText}</p>
        </aside>
        <main>
          <Header />
          <Controls />
          <Container />
        </main>
      </div>
    );
  }
}

export default App;
