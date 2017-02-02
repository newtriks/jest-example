import React from 'react';
import SomeComponent from './SomeComponent';
import renderer from 'react-test-renderer';

it('renders SomeComponent as expected', () => {
  const msg = 'BOOM';
  const component = renderer.create(
    <SomeComponent message={msg} />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
