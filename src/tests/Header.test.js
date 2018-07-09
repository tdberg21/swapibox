import React from 'react';
import Header from '../Components/Header/Header.js';
import { shallow } from 'enzyme';


describe('HEADER TESTS', () => {
  let wrapper;
  let mockFaves = [];
  beforeEach(() => {
    wrapper = shallow(<Header 
                        favorites={mockFaves}
                        showFaves={jest.fn()}
                      />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});