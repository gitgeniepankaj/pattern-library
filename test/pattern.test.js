const { Butterfly, Triangle, Square, Pyramid } = require('../src/patterns');

describe('Pattern Generation Tests', () => {
    test('Butterfly Pattern', () => {
        const size = 3;
        const butterfly = new Butterfly(size);
        const expected = ' *   * \n** **\n*   *\n*   *\n** **\n *   * \n';
        expect(butterfly.draw()).toBe(expected);
    });

    test('Triangle Pattern', () => {
        const size = 3;
        const triangle = new Triangle(size);
        const expected = '* \n* * \n* * * \n';
        expect(triangle.draw()).toBe(expected);
    });

    test('Square Pattern', () => {
        const size = 3;
        const square = new Square(size);
        const expected = '* * * \n* * * \n* * * \n';
        expect(square.draw()).toBe(expected);
    });

    test('Pyramid Pattern', () => {
        const size = 3;
        const pyramid = new Pyramid(size);
        const expected = '  * \n * * \n* * * \n';
        expect(pyramid.draw()).toBe(expected);
    });
});
