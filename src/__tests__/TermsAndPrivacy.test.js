import React from 'react';
import { shallow } from 'enzyme';
import TermsAndPrivacy from '../TermsAndPrivacy';

describe('<TermsAndPrivacy />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TermsAndPrivacy />);
    expect(wrapper).toHaveLength(1);
  });
});
