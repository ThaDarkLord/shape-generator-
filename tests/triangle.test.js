const Triangle = require('../lib/triangle.js')

describe('Triangle', () => {
    test('This test should render a triangle that is green with white text', () => {
        const shape = new Triangle();
        // shapeColor = 'green';
        expect(shape.makeTriangle()).toBe(` <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <polygon points="100,0 0,200 200,200" fill='green' />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill='white'>JJJ</text>
   
   </svg>`);
    })
})