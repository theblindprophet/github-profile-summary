import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
