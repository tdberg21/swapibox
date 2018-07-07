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

  // beforeEach(() => {
    

  it('should have a default state of cards that is an empty array', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.state('cards').length).toBe(0);
  });
  // });

  it('should have a default state of favorites that is an empty array', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });

    expect(wrapper.state('favorites').length).toBe(0);
  });

  it('should have a default state of scrolltextMovie that is an object', () => {
    let mockScrollTextInfo = {text: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", title: "A New Hope", year: "1977-05-25"};

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockScrollTextInfo)
    }))
    const wrapper = shallow(<App />);
    console.log(wrapper.state('scrollTextMovie'))
    expect(wrapper.state('scrollTextMovie')).toEqual({})
  });
  })

  // it('should add an object to state.scrollTextMovie when the component is mounted', () => {
  //   wrapper = mount(<App />);

  //   expect(wrapper.state().scrollTextMovie.title).toEqual('The Empire Strikes Back');
  // });
// });


