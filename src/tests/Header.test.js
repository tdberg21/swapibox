import React from 'react';
import Header from '../Components/Header/Header.js';
import { shallow } from 'enzyme';


describe('HEADER TESTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});