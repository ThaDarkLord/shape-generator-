//  inquirer prompt questions for user to decide the shape they want 
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/circle')
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')
//|inquier prompt questions
inquirer .prompt([
    {
        type: 'input',
        message: 'What 3 characters would you like in the center of your design?',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like your text to be? (you can enter the color keyword or hexadecimal number)',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Which shape would you like to use?',
        choices: ['square', 'circle', 'triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color would you like your shape to be ?',
        name: 'shapeColor'
    }
]).then((answers) => {
    let printShape;
    if(answers.shape === 'triangle'){
        printShape = new Triangle(answers.text, answers.textColor, answers.shapeColor).makeTriangle()
    } else if(answers.shape === 'circle'){
        printShape = new Circle(answers.text, answers.textColor, answers.shapeColor).makeCircle()
    } else if(answers.shape === 'square'){
        printShape = new Square(answers.text, answers.textColor, answers.shapeColor).makeSquare()
    }
    fs.writeFile("Logo.svg", printShape, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
})