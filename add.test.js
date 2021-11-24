// simple version

const { expect } = require("@jest/globals");

describe('add', () => {
  // test cases
});

// complicated
describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
});

const add = require('./add');