import React from 'react';
import { render } from '@testing-library/react';

import Index from '@shell/pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index className="" />);
    expect(baseElement).toBeTruthy();
  });
});
