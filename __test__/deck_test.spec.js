let should = require('should')
let Deck = require('../deck') // First import!

// Create a describe block with a callback
describe('The Deck module', () => {
 // Next declare a variable so that all our other tests
 // can see it.
    let target;
    beforeEach(() => {
 // Now assign to that variable inside this callback.
    target = new Deck()
    })

    describe('shuffle function', () => {
      it('should shuffle the deck putting cards in random order', () => {
        // This is where we'll write our first test

      })
    })

    describt('deal function', () => {
      it('should give user the correct number of cards from the shuffled deck', => {
        
      })
    })
})
