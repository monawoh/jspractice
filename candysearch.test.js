const candysearch = require('./candysearch')


describe('candysearch', () => {
  it ('returns Maltesers and Mars', () => {
    expect(candysearch('Ma', 10)).toEqual(['Maltesers', 'Mars']);
    });
  it ('returns Mars', () => {
      expect(candysearch('Ma', 2)).toEqual(['Mars']);
    });
  it ('returns Skitties, Skittles, Starburst', () => {
      expect(candysearch('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
  it ('returns Skitties, Skittles', () => {
      expect(candysearch('S', 4)).toEqual(['Skitties', 'Skittles']);
    });
  it ('returns Skitties, Skittles', () => {
    expect(candysearch('s', 4)).toEqual(['Skitties', 'Skittles']);
  });
});

// > searchCandies('Ma', 10).sort(); // using sort so the order of values is not random
// [ 'Maltesers', 'Mars' ]

// > searchCandies('Ma', 2).sort(); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10).sort(); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4).sort(); 
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4

// > searchCandies('s', 4).sort(); 
// [ 'Skitties', 'Skittles' ]

