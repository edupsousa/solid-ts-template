import { render } from 'solid-testing-library';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('<App />', () => {
  test('renders the app', () => {
    const { unmount, getByText } = render(() => <App />);
    const counter = getByText('Counter is 0');
    expect(counter).toBeInTheDocument();
    unmount();
  });
  test('click the button', () => {
    const { unmount, getByText } = render(() => <App />);
    const counter = getByText('Counter is 0');
    expect(counter).toBeInTheDocument();
    counter.click();
    expect(counter).toHaveTextContent('Counter is 1');
    unmount();
  });
});
