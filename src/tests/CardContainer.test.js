import React from 'react';
import CardContainer from '../Components/CardContainer/CardContainer.js';
import Card from '../Components/Card/Card.js';
import { shallow } from 'enzyme';


describe('CARD CONTAINER TESTS', () => {
  let wrapper;
  let mockCards = [{ class: "wheeled", id: 0, model: "Digger Crawler", name: "Sand Crawler", passengers: "30" }, { class: "repulsorcraft", id: 1, model: "T-16 skyhopper", name: "T-16 skyhopper", passengers: "1" }]

  beforeEach(() => {
    wrapper = shallow(<CardContainer cards={mockCards}/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all the cards', () => {
    expect(wrapper.find(Card).length).toBe(2);
  })
});