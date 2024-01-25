const Square = require('../lib/square.js')

describe('Square', () => {
    test('This test should render a square that is green with whtie text', () => {
        const shape = new Square();
        // shapeColor = 'green';
        expect(shape.makeSquare()).toBe(`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <rect width="200" height="200" fill='green'  />
  

  <text x="150" y="125" font-size="60" text-anchor="middle" fill='white'>JJJ</text>

</svg>`);
    })
})