import React from 'react';
import { render } from 'enzyme';
import MainButton from '../Buttons/MainButton';
import SearchButton from '../Buttons/SearchButton';

describe('<MainButton /> rendering', () => {
  const wrapper = render(<MainButton />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<SearchButton /> rendering', () => {
  const wrapper = render(<SearchButton />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
