const Circle = require('../lib/circle.js')

describe('Circle', () => {
    test('This test should render a circle that is green with whtie text', () => {
        const shape = new Circle();
        // shapeColor = 'green';
        expect(shape.makeCircle()).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <circle cx="150" cy="100" r="80" fill='green' />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill='white'>JJJ</text>
   
   </svg>`);
    })
})