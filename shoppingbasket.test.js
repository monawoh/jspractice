const ShoppingBasket = require('./shoppingbasket')
const Candy = require('./candy')

describe('Shopping class', () => {
  it('adds item to basket ', () => {
  basket = new ShoppingBasket 
  basket.addItem(new Candy('Skittles', 2.99))
  expect(basket.basket).toEqual([{name:'Skittles', price: 2.99}])
  });
});

describe('Shopping class', () => {
  it('checks price of item ', () => {
  basket = new ShoppingBasket 
  basket.addItem(new Candy('Skittles', 2.99))
  basket.addItem(new Candy('Skittles', 2.99))
  expect(basket.getTotalPrice()).toEqual(5.98)
  });
});