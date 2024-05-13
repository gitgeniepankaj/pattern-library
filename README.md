
# Pattern Library

Welcome to the Pattern Library project, version 1.0.0. This repository contains a collection of design and code patterns used for web development. The library provides a rich set of patterns that can be used in various applications, ranging from simple geometric designs to complex symbolic representations.

## Features

- **Centralized pattern storage**: Easy access and reuse of code patterns.
- **Comprehensive examples**: Demonstrations provided in `example.js`.
- **Automated testing**: A comprehensive test suite in the `test` directory ensures pattern integrity.

## Installation

Install the necessary dependencies for the Pattern Library with the following command:

```bash
npm install
```

## Usage

Import the patterns you need from the `src` directory. The `example.js` file shows how to instantiate and display various patterns:

### Example Code

```javascript
// Importing pattern classes
const { Ganesh, Triangle, Square } = require('./src/patterns');

// Function to display patterns
function displayPattern(title, patternInstance) {
    const pattern = patternInstance.draw();
    console.log(`${title}:
${pattern}
`);
}

// Instantiate and display patterns
const ganesh = new Ganesh(5);
const triangle = new Triangle(5);
const square = new Square(5);

displayPattern('Ganesh Pattern', ganesh);
displayPattern('Triangle Pattern', triangle);
displayPattern('Square Pattern', square);
```

## Demo

### Ganesh Pattern:

```
        ****
       ******
       *    *
**      *    *      **
*        *        *
        ****
        *  *
        * *
        **
      *******
     *       *
     *********
*    *       *    *
*    *       *    *

```


### Butterfly Pattern:

```
*        *
**      **
***    ***
****  ****
**********
**********
****  ****
***    ***
**      **
*        *

```


### Triangle Pattern:

```
*
* *
* * *
* * * *
* * * * *

```


### Square Pattern:

```
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

```


### Pyramid Pattern:

```
    *
   * *
  * * *
 * * * *
* * * * *

```


### Diamond Pattern:

```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *

```


### Circle Pattern:

```
   *****
  *     *
 *       *
*         *
*         *
*         *
*         *
*         *
 *       *
  *     *
   *****

```


### Fish Pattern:

```
     *
    * *
   *   *
  *     *
 *       *
*         *
 *       *
  *     *
   *   *
    * *
     *
    **
    * *
    *  *
    *   *
    *    *

```


### Heart Pattern:

```
     *****     *****
   *******   *******
 ********* *********
********************
 ******************
  ****************
   **************
    ************
     **********
      ********
       ******
        ****
         **

```


### Kite Pattern:

```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
    *
    o
    -
    *
    o
    -
    *
    o
    -
    *
    o
    -
    *
    o
    -

```


### Pentagram Pattern:

```


    *           *
    ***       ***
     * *     * *
     *  ** **  *
     *    *    *
      *  * ** *
      ***    **
      *       *
    ** *     * **
   *   *     *   *
 **    *     *    **
*********************
        *   *
        *   *
         * *
         * *
         * *
          *
          *

```


### Rhombus Pattern:

```
         *
        * *
       * * *
      * * * *
     * * * * *
    * * * * * *
   * * * * * * *
  * * * * * * * *
 * * * * * * * * *
* * * * * * * * * *
 * * * * * * * * *
  * * * * * * * *
   * * * * * * *
    * * * * * *
     * * * * *
      * * * *
       * * *
        * *
         *

```


### RouterBox Pattern:

```
+--------------------+
|oooooooooo          |
|     [=]  |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
+--------------------+

```


### Star Pattern:

```
          *
        ** **
       *     *
     **       *
    *          **
   *             *
 **               **
*                   *
*       *****       *
 *      *   *      *
 *     *     *     *
 *     *     *     *
  *     ** **     *
  *       *       *
   *             *
   *             *
   *             *
    *           *
    *************



```


### Sandglass Pattern:

```
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********

```


### Shuriken Pattern:

```
    *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
    *

```


### XPattern Pattern:

```
*       *
 *     *
  *   *
   * *
    *
   * *
  *   *
 *     *
*       *

```


### Wave Pattern:

```
                    ******                        ******
                   *      *                      *      *
                 **        **                  **        **
                *            *                *            *
                              *
*              *                             *
 *            *                *            *
  **        **                  **        **
    *      *                      *      *
     ******                        ******


```


### Ladder Pattern:

```
|----------|
|          |
|          |
|----------|
|          |
|          |
|----------|
|          |
|          |
|----------|
|          |
|          |
|----------|
|          |
|          |

```


### Straight Pyramid Pattern:

```
*
* *
* * *
* * * *
* * * * *

```


### Inverted Pyramid Pattern:

```
* * * * *
* * * *
* * *
* *
*

```


### Left Pyramid Pattern:

```
    *
   * *
  * * *
 * * * *
* * * * *

```


### Inverted Left Pyramid Pattern:

```
* * * * *
 * * * *
  * * *
   * *
    *

```


### Filled Rectangle Pattern:

```
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *

```


### Hollow Rectangle Pattern:

```
* * * * * * * * * *
*                 *
*                 *
*                 *
* * * * * * * * * *

```


### Pentagon Pattern:

```



                  **
              ****  *
          ****      *
      ****           *
    **                *
    *                  *
    *                  *
    *                   *
    *                    *
    *                     *
    *                     *
    *                      *
    *                       *
    *                      *
    *                      *
    *                     *
    *                    *
    *                   *
    *                   *
    *                  *
    **                *
      ****           *
          ****       *
              ****  *
                  **




```


### Hexagon Pattern:

```




        ***************
       *               *
       *               *
      *                 *
      *                 *
     *                   *
     *                   *
    *                     *
    *                     *
   *                       *
   *                       *
  *                         *
   *                       *
   *                       *
    *                     *
     *                    *
     *                   *
      *                  *
      *                 *
       *                *
        *              *
        *              *
         **************





```


### Octagon Pattern:

```


              ***
            **   **
          **       **
        **           **
      **               **
      *                 *
     *                   *
     *                   *
    *                     *
    *                     *
   *                       *
   *                       *
  *                         *
  *                         *
  *                         *
   *                       *
   *                       *
    *                     *
    *                     *
     *                   *
     *                   *
      *                 *
      **               **
        **           **
          **       **
            **   **
              ***



```


### Swastik Pattern:

```
******
     *
*    *
*    *
*    *
***********
     *    *
     *    *
     *    *
     *
     ******

```


### ZigZag Pattern:

```
/////
\\\\\
     /////
     \\\\\
          /////
          \\\\\

```

## Running Tests

Execute the following command to run tests, using Jest as specified in the development dependencies:

```bash
npm run test
```

## Pattern Details

The Pattern Library includes a variety of patterns, each encapsulated within its own class:

- **Geometric Patterns**: Basic shapes (Square, Triangle), complex constructs (Polygon, Ladder).
- **Symbolic Patterns**: Culturally significant symbols (Swastik, Ganesh).
- **Decorative Patterns**: Visually appealing designs (Butterfly, Star).

These are implemented in `src/patterns.js`, where each class provides a method to draw the pattern based on its unique properties.

## Folder Structure

The project is organized as follows, with each folder serving a specific purpose:

```
/
    example.js               # Demonstrates how to use the patterns
    package.json             # Project metadata and dependency management
    package-lock.json        # Locks down versions of dependencies
src/
    index.js                 # Main entry point for the pattern library
    patterns.js              # Definitions of various patterns
test/
    pattern.test.js          # Test scripts for validating patterns
```

## Contributing

Contributions are welcome! Please submit pull requests or open issues to discuss potential changes or additions.

## License

This project is licensed under the ISC license. Feel free to use it as you wish within the terms of the license.
