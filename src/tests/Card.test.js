import Card from '../Components/Card/Card.js';
import React from 'react';
import { shallow } from 'enzyme';


describe('CARD TESTS', () => {
  let wrapper;
  let mockCheckForFaves = jest.fn();
  
  it('matches the snapshot when a people are passed down', () => {
    let mockPeopleCard = { homeworld: "Tatooine", id: 1530987621630, name: "Luke Skywalker", population: "200000", species: "Human" };
    wrapper = shallow(<Card
      info={mockPeopleCard}
      key="0"
      checkForFaves={mockCheckForFaves}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches the snapshot when a vehicle is passed down', () => {
    let mockPlanetCard = {
      climate: "temperate", id: 1530987442516, planet: "Alderaan", population: "2000000000", residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"], terrain: "grasslands, mountains"};
    wrapper = shallow(<Card
      info={mockPlanetCard}
      key="0"
      checkForFaves={mockCheckForFaves}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches the snapshot when a vehicle is passed down', () => {
    let mockVehicleCard = { class: "wheeled", id: 0, model: "Digger Crawler", name: "Sand Crawler", passengers: "30" };
    wrapper = shallow(<Card
      info={mockVehicleCard}
      key="0"
      checkForFaves={mockCheckForFaves}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke addToFaves function when a favorite button is clicked on a vehicle card', () => {
    let mockVehicleCard = { class: "wheeled", id: 0, model: "Digger Crawler", name: "Sand Crawler", passengers: "30" };
    wrapper = shallow(<Card
      info={mockVehicleCard}
      key="0"
      checkForFaves={mockCheckForFaves}
    />);

    wrapper.find('button').simulate('click');
    expect(mockCheckForFaves).toHaveBeenCalled();
  });

  it('should invoke addToFaves function when a favorite button is clicked on a planet card', () => {
    let mockPlanetCard = {
      climate: "temperate", id: 1530987442516, planet: "Alderaan", population: "2000000000", residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"], terrain: "grasslands, mountains"
    };
    wrapper = shallow(<Card
      info={mockPlanetCard}
      key="0"
      checkForFaves={mockCheckForFaves}
    />);

    wrapper.find('button').simulate('click');
    expect(mockCheckForFaves).toHaveBeenCalled();
  });

  it('should invoke addToFaves function when a favorite button is clicked on a person', () => {
    let mockPeopleCard = { homeworld: "Tatooine", id: 1530987621630, name: "Luke Skywalker", population: "200000", species: "Human" };
    wrapper = shallow(<Card
      info={mockPeopleCard}
      key="0"
      checkForFaves={mockCheckForFaves}
    />);

    wrapper.find('button').simulate('click');
    expect(mockCheckForFaves).toHaveBeenCalled();
  });

});


