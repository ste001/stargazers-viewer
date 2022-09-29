import React from 'react';
import renderer from 'react-test-renderer';
import UserCard from '../../components/UserCard';

describe('<UserCard />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<UserCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a text', () => {
    const tree = renderer.create(<UserCard />).toJSON();
    expect(tree.children[0].children[0].type).toBe('Text');
  });

  it('renders an image', () => {
    const tree = renderer.create(<UserCard />).toJSON();
    expect(tree.children[1].children[0].type).toBe('Image');
  });
});
