import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App/App.js';
import { shallow, mount } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('APP TESTS', () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(<App />);
  // });

  it('should have a default state of info that is an empty string', () => {
    // wrapper = shallow(<App />);

    expect(wrapper.state().info.length).toBe(0);
  });

  it('should add an object to state.scrollTextMovie when the component is mounted', () => {
    wrapper = mount(<App />);

    expect(wrapper.state().scrollTextMovie.title).toEqual('The Empire Strikes Back');
  });
});


