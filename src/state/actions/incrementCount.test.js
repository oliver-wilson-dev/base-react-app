import toggleTheme from './toggleTheme';
import { INCREMENT_COUNT } from './constants';

describe('toggleTheme', () => {
  it('should return an object with the type property INCREMENT_COUNT', () => {
    expect(toggleTheme()).toEqual({ type: INCREMENT_COUNT });
  });
});
