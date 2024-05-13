// Importing pattern classes from the specified file
const { Butterfly, Triangle, Square, Pyramid, Diamond, Circle, Fish, Ganesh, Heart, Kite, Pentagram, Polygon, Rhombus, RouterBox, Star, Swastik, Sandglass, Shuriken, Wave, XPattern, ZigZag, Ladder, HalfPyramid, Rectangle } = require('./src/patterns');

// Function to display patterns with a title
function displayPattern(title, patternInstance) {
    try {
        const pattern = patternInstance.draw();
        console.log(`### ${title}:\n\n\`\`\`\n${pattern}\n\`\`\`\n\n`);
    } catch (error) {
        console.error(`Error displaying ${title}: ${error}`);
    }
}

// Instantiate and display various patterns
const ganesh = new Ganesh(5);
const butterfly = new Butterfly(5);
const triangle = new Triangle(5);
const square = new Square(5);
const pyramid = new Pyramid(5);
const diamond = new Diamond(5);
const circle = new Circle(5);
const fish = new Fish(5);
const heart = new Heart(10);
const kite = new Kite(5);
const pentagram = new Pentagram(10);
const rhombus = new Rhombus(10);
const routerBox = new RouterBox(10);
const star = new Star(10);
const sandglass = new Sandglass(9);
const shuriken = new Shuriken(9);
const wave = new Wave(60, 5, 2);  // Parameters: length, amplitude, frequency
const xpattern = new XPattern(9);
const ladder = new Ladder(5, 10);  // Parameters: height, width
const spattern = new HalfPyramid(5, 'straight');
const ipattern = new HalfPyramid(5, 'inverted');
const lpattern = new HalfPyramid(5, 'left');
const ilpattern = new HalfPyramid(5, 'invertedLeft');
const filledRect = new Rectangle(5, 10, false);
const hollowRect = new Rectangle(5, 10, true);
const pentagon = new Polygon(15, 5);
const hexagon = new Polygon(15, 6);
const octagon = new Polygon(15, 8);
const swastik = new Swastik(11);
const zigzag = new ZigZag(3, 5);  // Parameters: height, width
// Display all patterns
displayPattern('Ganesh Pattern', ganesh);
displayPattern('Butterfly Pattern', butterfly);
displayPattern('Triangle Pattern', triangle);
displayPattern('Square Pattern', square);
displayPattern('Pyramid Pattern', pyramid);
displayPattern('Diamond Pattern', diamond);
displayPattern('Circle Pattern', circle);
displayPattern('Fish Pattern', fish);
displayPattern('Heart Pattern', heart);
displayPattern('Kite Pattern', kite);
displayPattern('Pentagram Pattern', pentagram);
displayPattern('Rhombus Pattern', rhombus);
displayPattern('RouterBox Pattern', routerBox);
displayPattern('Star Pattern', star);
displayPattern('Sandglass Pattern', sandglass);
displayPattern('Shuriken Pattern', shuriken);
displayPattern('XPattern Pattern', xpattern);
displayPattern('Wave Pattern', wave);
displayPattern('Ladder Pattern', ladder);
displayPattern('Straight Pyramid Pattern', spattern);
displayPattern('Inverted Pyramid Pattern', ipattern);
displayPattern('Left Pyramid Pattern', lpattern);
displayPattern('Inverted Left Pyramid Pattern', ilpattern);
displayPattern('Filled Rectangle Pattern', filledRect);
displayPattern('Hollow Rectangle Pattern', hollowRect);
displayPattern('Pentagon Pattern', pentagon);  
displayPattern('Hexagon Pattern', hexagon);  
displayPattern('Octagon Pattern', octagon);
displayPattern('Swastik Pattern', swastik);
displayPattern('ZigZag Pattern', zigzag);
