import { render, screen } from '@testing-library/react';

import App from './app';

// @forge/bridge throws on import when it is not running inside an Atlassian
// product iframe, so replace it with a stub for unit tests.
jest.mock('@forge/bridge', () => ({
  makeInvoke: () => jest.fn().mockResolvedValue('Hello, world!'),
  Modal: jest.fn().mockImplementation(() => ({ open: jest.fn() })),
}));

describe('App', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
    await screen.findByText('Hello, world!');
  });

  it('should show the text returned by the resolver', async () => {
    render(<App />);
    expect(await screen.findByText('Hello, world!')).toBeTruthy();
  });
});
