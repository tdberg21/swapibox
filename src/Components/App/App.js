import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Controls from '../Controls/Controls.js';
import Container from '../CardContainer/CardContainer.js';
import getScrollText from '../../apiCalls.js';
import './App.css';


class App extends Component {
  constructor () {
    super(); 
    
    this.state = {
      info: [],
      scrollTextMovie: {
        "title": "The Empire Strikes Back",
        "episode_id": 5,
        "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
        "director": "Irvin Kershner",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1980-05-17"}
    };
  }
  

  componentDidMount() {
    // getScrollText()
    //   .then(parsedData => this.setState({
    //     scrollTextMovie: parsedData
    //   }));
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
          <Controls />
          <Container />
        </main>
      </div>
    );
  }
}

export default App;
