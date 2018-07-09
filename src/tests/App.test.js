import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App/App.js';
import { shallow, mount } from 'enzyme';

describe('APP TESTS', () => {

  it('should have a default state of cards that is an empty array', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.state('cards').length).toBe(0);
  });

  it('should have a default state of favorites that is an empty array', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });

    expect(wrapper.state('favorites').length).toBe(0);
  });

  it('should have a default state of scrolltextMovie that is an object', async () => {
    let mockScrollTextInfo = {text: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", title: "A New Hope", year: "1977-05-25"};

    window.fetch = await jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockScrollTextInfo)
    }));
    const wrapper = mount(<App />);

    expect(wrapper.state('scrollTextMovie')).toEqual({});
  });

  it('should call fetch with the correct params when getData is invoked', () => {
    const mockEvent = { target: {title: 'people'} };
    const expectedParams = 'https://swapi.co/api/people/';
    const wrapper = shallow(<App />);
    const mockPeopleInfo = {} 
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPeopleInfo)
    }));
    wrapper.instance().getData(mockEvent);

    expect(window.fetch).toHaveBeenCalledWith(expectedParams);
  });

  it('should call fetch with the correct params when getPLanetData is invoked', () => {
    const mockEvent = { target: { title: 'planet' } };
    const expectedParams = 'https://swapi.co/api/planet/';
    const wrapper = shallow(<App />);
    const mockPlanetInfo = {};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPlanetInfo)
    }));

    wrapper.instance().getPlanetData(mockEvent);

    expect(window.fetch).toHaveBeenCalledWith(expectedParams);
  });

  it('should clean the vehicle data when cleanVehicleData is invoked', () => {
    const mockVehicles = [
      { "name": "Sand Crawler", "model": "Digger Crawler", "manufacturer": "Corellia Mining Corporation", "cost_in_credits": "150000", "length": "36.8", "max_atmosphering_speed": "30", "crew": "46", "passengers": "30", "cargo_capacity": "50000", "consumables": "2 months", "vehicle_class": "wheeled", "pilots": []
      }];
    const wrapper = shallow(<App />);

    expect(wrapper.instance().cleanVehicleData(mockVehicles)).toEqual([{ "class": "wheeled", "id": "0 Sand Crawler", "model": "Digger Crawler", "name": "Sand Crawler", "passengers": "30" }]);
  });

  it('should add a card to favorites when addToFaves is invoked', () => {
    const mockState = [{ "class": "wheeled", "id": "0 Sand Crawler", "model": "Digger Crawler", "name": "Sand Crawler", "passengers": "30" }, { "class": "winged", "id": "1 taco", "model": "taco", "name": "taco", "passengers": "3" }];
    const mockKey = "0 Sand Crawler";
    const wrapper = shallow(<App />);
    wrapper.instance().setState({cards: mockState});
    wrapper.instance().addToFaves(mockKey);
    
    expect(wrapper.state('favorites')).toEqual([{ "class": "wheeled", "id": "0 Sand Crawler", "model": "Digger Crawler", "name": "Sand Crawler", "passengers": "30" }]);

  });

  it('should update state when showFaves is invoked to replace cards array with favorites array', () => {
    const mockFavorites = [{ "class": "wheeled", "id": "0 Sand Crawler", "model": "Digger Crawler", "name": "Sand Crawler", "passengers": "30" }];
    const wrapper = shallow(<App />);
    wrapper.instance().setState({
      favorites: mockFavorites
    });
    expect(wrapper.state('cards')).toEqual([]);
    wrapper.instance().showFaves();

    expect(wrapper.state('cards')).toEqual([{ "class": "wheeled", "id": "0 Sand Crawler", "model": "Digger Crawler", "name": "Sand Crawler", "passengers": "30" }]);

  });

});
