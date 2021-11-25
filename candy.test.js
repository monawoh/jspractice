const Candy = require('./candy');
describe ('candy class', ()  => {
  it('creates new candy with name and price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars')
    expect(candy.getPrice()).toBe(4.99)
  });
});