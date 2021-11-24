const User = require('./user');
describe('user class', () => {
 it("creates a new class with name and introduction", () => {
   const user = new User('Uma');
   expect(user.getName()).toBe('Uma')
   expect(user.getIntroduction()).toBe('Hi, my name is Uma')
 });
});