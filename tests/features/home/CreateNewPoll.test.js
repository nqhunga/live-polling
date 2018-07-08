import React from 'react';
import { shallow } from 'enzyme';
import { CreateNewPoll } from '../../../src/features/home/CreateNewPoll';

describe('home/CreateNewPoll', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CreateNewPoll {...props} />
    );

    expect(
      renderedComponent.find('.home-create-new-poll').length
    ).toBe(1);
  });
});
