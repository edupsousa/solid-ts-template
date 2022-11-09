import { render } from 'solid-testing-library';
import { describe, expect, test } from 'vitest';
import Logo from './Logo';

describe('<Logo />', () => {
  test('renders the logo', () => {
    const { getByAltText, unmount } = render(() => <Logo rotate={false} />);
    expect(getByAltText('logo')).toBeInTheDocument();
    unmount();
  });
});
