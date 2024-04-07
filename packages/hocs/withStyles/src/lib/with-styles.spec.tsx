import withStyles from './with-styles';

describe('withStyles', () => {
  it('should work', () => {
    expect(withStyles()()()).toBeTruthy();
  });
});
