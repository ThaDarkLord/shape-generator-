const Shape = require('./shapes')

class Triangle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    makeTriangle(){
        return `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <polygon points="100,0 0,200 200,200" fill=${this.shapeColor} />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>

</svg>`;

    }
}

module.exports = Triangle;