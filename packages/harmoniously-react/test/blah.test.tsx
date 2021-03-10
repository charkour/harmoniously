import { userConstraintsSmall } from '@harmoniously/shared';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Harmony } from '../stories/Harmony.stories';

describe('Harmony', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Harmony assignments={userConstraintsSmall} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
