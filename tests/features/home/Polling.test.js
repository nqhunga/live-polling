import React from 'react';
import { shallow } from 'enzyme';
import { Polling } from '../../../src/features/home/Polling';

describe('home/Polling', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Polling {...props} />
    );

    expect(
      renderedComponent.find('.home-polling').length
    ).toBe(1);
  });
});
