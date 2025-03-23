import App from '@/App';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('App', () => {
  it('should match snapshot', () => {
    const result = render(<App />);

    expect(result).toMatchSnapshot();
  });
});
