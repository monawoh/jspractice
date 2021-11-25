const UserBase = require('./userBase')
const User = require('./user')

describe('Userbase', () => {
    it('creating a userbase class with count, getnames and introductions', () => {
    const users = [
        new User('Uma'),
        new User('Josh'),
        new User('Ollie')
    ];
    const userBase = new UserBase(users);
    expect(userBase.count()).toBe(3)
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ])
    expect(userBase.getIntroductions()).toEqual(['Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie'])
    });
});