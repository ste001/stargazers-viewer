import React from 'react';
import renderer from 'react-test-renderer';
import MainButton from '../../components/MainButton';

describe('<Main Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MainButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 1 child', () => {
    const tree = renderer.create(<MainButton />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it ('can be disabled', () => {
    const tree = renderer.create(<MainButton disabled/>).toJSON();
    expect(tree.props.accessibilityState.disabled).toBe(true);
  })
});