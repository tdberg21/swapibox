import React from 'react';
import Controls from '../Components/Controls/Controls.js';
import { shallow, mount } from 'enzyme';


describe('CONTROLS TESTS', () => {
  let mockGetData = jest.fn();
  let mockGetPlanetData = jest.fn();
  let mockVehicleData = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Controls getData={mockGetData} getPlanetData={mockGetPlanetData} getVehicleData={mockVehicleData}/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke getData when the people button is clicked', () => {
    wrapper.find('.people-button').simulate('click');

    expect(mockGetData).toHaveBeenCalled();
  });

  it('should invoke getPlanetData when the planet button is clicked', () => {
    wrapper.find('.planet-button').simulate('click');

    expect(mockGetPlanetData).toHaveBeenCalled();
  });

  it('should invoke getVehicleData when the vehicle button is clicked', () => {
    wrapper.find('.vehicle-button').simulate('click');

    expect(mockVehicleData).toHaveBeenCalled();
  });
});

