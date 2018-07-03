import React from 'react';
import Controls from '../Components/Controls/Controls.js';
import { shallow } from 'enzyme';


describe('CONTROLS TESTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Controls />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

