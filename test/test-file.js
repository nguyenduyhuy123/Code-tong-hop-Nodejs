const chai = require('chai');
const expect = chai.expect;

describe('Example Test', () => {
  it('should pass', () => {
    expect(1 + 1).to.equal(2);
  });

  it('should fail', () => {
    expect(1 + 1).to.equal(3);
  });
});