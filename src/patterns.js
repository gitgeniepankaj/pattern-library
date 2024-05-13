// Base class for all patterns
class Pattern {
    constructor(size) {
        if  (size <= 0) {
            throw new Error("Size must be a positive number.");
        }
        this.size = size;
    }

    /**
     * Abstract method to draw the pattern. Should be overridden by subclasses.
     */
    draw() {
        throw new Error("This method should be overridden by subclasses");
    }

    /**
     * Helper method to draw lines between points for patterns.
     */
    drawLine(x1, y1, x2, y2, grid) {
        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);
        const sx = (x1 < x2) ? 1 : -1;
        const sy = (y1 < y2) ? 1 : -1;
        let err = dx - dy;
        
        while (true) {
            if (grid[y1] && grid[y1][x1] !== undefined) {
                grid[y1][x1] = '*';
            }
            if (x1 === x2 && y1 === y2) break;
            let e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x1 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y1 += sy;
            }
        }
    }
}

// Butterfly pattern
class Butterfly extends Pattern {
    /**
     * Draws a butterfly pattern using asterisks.
     * @returns {string} The butterfly pattern as a string.
     */
    draw() {
        let output = [];
        const n = this.size;
        // Top Half
        for (let i = 1; i <= n; i++) {
            let line = '*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i);
            output.push(line);
        }
        // Bottom Half
        for (let i = n; i >= 1; i--) {
            let line = '*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i);
            output.push(line);
        }
        return output.join('\n') + '\n';
    }
}

// Triangle pattern
class Triangle extends Pattern {
    /**
     * Draws a triangle pattern of a given size.
     * @returns {string} A string representing the triangle.
     */
    draw() {
        let output = [];
        for (let i = 1; i <= this.size; i++) {
            output.push('* '.repeat(i).trim());
        }
        return output.join('\n') + '\n';
    }
}

// Square pattern
class Square extends Pattern {
    /**
     * Draws a square pattern using asterisks.
     * @returns {string} The square pattern as a string.
     */
    draw() {
        let output = [];
        for (let i = 0; i < this.size; i++) {
            output.push('* '.repeat(this.size).trim());
        }
        return output.join('\n') + '\n';
    }
}

// Pyramid pattern
class Pyramid extends Pattern {
    /**
     * Draws a pyramid pattern using asterisks.
     * @returns {string} The pyramid pattern as a string.
     */
    draw() {
        let output = [];
        for (let i = 1; i <= this.size; i++) {
            output.push(' '.repeat(this.size - i) + '* '.repeat(i).trim());
        }
        return output.join('\n') + '\n';
    }
}

// Diamond pattern
class Diamond extends Pattern {
    /**
     * Draws a diamond pattern using asterisks.
     * @returns {string} The diamond pattern as a string.
     */
    draw() {
        let output = [];
        let n = this.size;
        for (let i = 1; i <= n; i++) {
            output.push(' '.repeat(n - i) + '* '.repeat(i).trim());
        }
        for (let i = n - 1; i > 0; i--) {
            output.push(' '.repeat(n - i) + '* '.repeat(i).trim());
        }
        return output.join('\n') + '\n';
    }
}

// Circle pattern
class Circle extends Pattern {
    /**
     * Draws a circle pattern using asterisks.
     * @returns {string} The circle pattern as a string.
     */
    draw() {
        let output = [];
        let radius = this.size;
        let diameter = radius * 2;
        for (let i = 0; i <= diameter; i++) {
            let line = '';
            for (let j = 0; j <= diameter; j++) {
                let distance = Math.sqrt((i - radius) ** 2 + (j - radius) ** 2);
                line += (distance > radius - 0.5 && distance < radius + 0.5) ? '*' : ' ';
            }
            output.push(line);
        }
        return output.join('\n') + '\n';
    }
}
// Fish pattern class
class Fish extends Pattern {
    /**
     * Draws a fish pattern using ASCII characters.
     * @returns {string} The fish pattern as a string.
     */
    draw() {
        let output = [];
        let n = this.size;

        output.push(' '.repeat(n) + '*');
        for (let i = 1; i < n; i++) {
            output.push(' '.repeat(n - i) + '*' + ' '.repeat(i * 2 - 1) + '*');
        }

        output.push('*' + ' '.repeat(n * 2 - 1) + '*');

        for (let i = n - 1; i > 0; i--) {
            output.push(' '.repeat(n - i) + '*' + ' '.repeat(i * 2 - 1) + '*');
        }
        output.push(' '.repeat(n) + '*');

        let tailWidth = n;
        for (let i = 0; i < tailWidth; i++) {
            output.push(' '.repeat(n - 1) + '*' + ' '.repeat(i) + '*');
        }

        return output.join('\n') + '\n';
    }
}

// Ganesh pattern class
class Ganesh extends Pattern {
    /**
     * Draws a representation of Ganesh using ASCII characters.
     * @returns {string} The Ganesh pattern as a string.
     */
    draw() {
        let output = [];
        let n = this.size;  // Size to scale the drawing, base it on number of rows.

        // Head
        output.push(' '.repeat(n + 3) + '****');
        output.push(' '.repeat(n + 2) + '******');
        output.push(' '.repeat(n + 2) + '*    *');

        // Big ears
        output.push('**' + ' '.repeat(n + 1) + '*    *' + ' '.repeat(n + 1) + '**');
        output.push('*' + ' '.repeat(n + 3) + '*' + ' '.repeat(n + 3) + '*');

        // Trunk
        output.push(' '.repeat(n + 3) + '****');
        output.push(' '.repeat(n + 3) + '*  *');
        output.push(' '.repeat(n + 3) + '* *');
        output.push(' '.repeat(n + 3) + '**');

        // Body
        output.push(' '.repeat(n + 1) + '*******');
        output.push(' '.repeat(n) + '*       *');
        output.push(' '.repeat(n) + '*********');

        // Legs
        output.push('*' + ' '.repeat(n - 1) + '*       *' + ' '.repeat(n - 1) + '*');
        output.push('*' + ' '.repeat(n - 1) + '*       *' + ' '.repeat(n - 1) + '*');
        
        return output.join('\n') + '\n';
    }
}

// Heart pattern class
class Heart extends Pattern {
    /**
     * Draws a heart shape using ASCII characters.
     * @returns {string} The heart pattern as a string.
     */
    draw() {
        let output = [];
        let n = this.size;

        for (let i = n / 2; i <= n; i += 2) {
            output.push(' '.repeat(n - i) + '*'.repeat(i) + ' '.repeat(n - i) + '*'.repeat(i));
        }

        for (let i = n; i >= 1; i--) {
            output.push(' '.repeat(n - i) + '*'.repeat(i * 2));
        }

        return output.join('\n') + '\n';
    }
}

class Kite extends Pattern {
    /**
     * Draws a kite shape using ASCII characters.
     * @returns {string} The kite pattern as a string.
     */
    draw() {
        let output = [];
        let n = this.size;

        // Ensure that star repetitions do not go into negative values
        for (let i = 1; i <= n; i++) {
            output.push(' '.repeat(n - i) + '* ' + (i > 1 ? '* '.repeat(i - 1) : ''));
        }

        for (let i = n - 1; i >= 1; i--) {
            output.push(' '.repeat(n - i) + '* ' + (i > 1 ? '* '.repeat(i - 1) : ''));
        }

        // Tail of the kite
        const tailLength = n * 3;
        for (let i = 0; i < tailLength; i++) {
            output.push(' '.repeat(n - 1) + (i % 3 === 0 ? '*' : i % 3 === 1 ? 'o' : '-'));
        }

        return output.join('\n') + '\n';
    }
}

// Pentagram pattern class
class Pentagram extends Pattern {
    /**
     * Draws a pentagram using ASCII characters.
     * @returns {string} The pentagram pattern as a string.
     */
    draw() {
        let output = [];
        let n = this.size;
        let center = n;
        let radius = n;

        const points = [];
        for (let i = 0; i < 5; i++) {
            let angle = (Math.PI / 2) + (i * (2 * Math.PI / 5));
            let x = center + radius * Math.cos(angle);
            let y = center + radius * Math.sin(angle);
            points.push({ x: Math.round(x), y: Math.round(y) });
        }

        let grid = Array.from({ length: 2 * n + 1 }, () => Array(2 * n + 1).fill(' '));
        for (let i = 0; i < 5; i++) {
            let next = (i + 2) % 5;
            this.drawLine(points[i].x, points[i].y, points[next].x, points[next].y, grid);
        }

        grid.forEach(line => output.push(line.join('')));
        return output.join('\n') + '\n';
    }
}

// Polygon pattern class
class Polygon extends Pattern {
    constructor(size, sides) {
        super(size);
        if (sides < 3) {
            throw new Error("Polygons must have at least 3 sides.");
        }
        this.sides = sides;
        
    }

    /**
     * Draws a polygon using ASCII characters.
     * @returns {string} The polygon pattern as a string.
     */
    draw() {
        let output = [];
        let n = this.size;
        let center = n;
        let radius = n - 2;

        let vertices = [];
        for (let i = 0; i < this.sides; i++) {
            let angle = 2 * Math.PI * i / this.sides;
            let x = center + radius * Math.cos(angle);
            let y = center + radius * Math.sin(angle);
            vertices.push({ x: Math.round(x), y: Math.round(y) });
        }

        let grid = Array.from({ length: 2 * center + 1 }, () => Array(2 * center + 1).fill(' '));
        for (let i = 0; i < this.sides; i++) {
            let next = (i + 1) % this.sides;
            this.drawLine(vertices[i].x, vertices[i].y, vertices[next].x, vertices[next].y, grid);
        }

        grid.forEach(line => output.push(line.join('')));
        return output.join('\n') + '\n';
    }
}
// Rhombus pattern class
class Rhombus extends Pattern {
    /**
     * Draws a rhombus pattern using ASCII characters.
     * @returns {string} The rhombus pattern as a string.
     */
    draw() {
        let output = [];
        let n = this.size;

        for (let i = 1; i <= n; i++) {
            output.push(' '.repeat(n - i) + '* '.repeat(i));
        }
        for (let i = n - 1; i > 0; i--) {
            output.push(' '.repeat(n - i) + '* '.repeat(i));
        }

        return output.join('\n') + '\n';
    }
}

// RouterBox pattern class
class RouterBox extends Pattern {
    /**
     * Draws a router box pattern using ASCII characters.
     * @returns {string} The router box pattern as a string.
     */
    draw() {
        let output = ['+' + '-'.repeat(this.size * 2) + '+'];
        for (let i = 1; i <= this.size; i++) {
            if (i === 1) {
                output.push('|' + 'o'.repeat(this.size) + ' '.repeat(this.size) + '|');
            } else if (i === 2) {
                output.push('|' + ' '.repeat(this.size / 2) + '[=]' + ' '.repeat(this.size - (this.size / 2 + 3)) + '|');
            } else {
                output.push('|' + ' '.repeat(this.size * 2) + '|');
            }
        }
        output.push('+' + '-'.repeat(this.size * 2) + '+');
        return output.join('\n') + '\n';
    }
}

// Star pattern class
class Star extends Pattern {
    /**
     * Draws a star pattern using ASCII characters.
     * @returns {string} The star pattern as a string.
     */
    draw() {
        let output = [];
        let n = this.size;
        const outerRadius = n;
        const innerRadius = Math.floor(n * Math.sin(Math.PI / 10) / Math.sin(7 * Math.PI / 10));
        let points = [];

        for (let i = 0; i < 10; i++) {
            let angle = Math.PI / 2 + i * 2 * Math.PI / 10;
            let radius = i % 2 === 0 ? outerRadius : innerRadius;
            let x = n + radius * Math.cos(angle);
            let y = n - radius * Math.sin(angle);
            points.push({ x: Math.round(x), y: Math.round(y) });
        }

        let grid = Array.from({ length: 2 * n + 1 }, () => Array(2 * n + 1).fill(' '));
        for (let i = 0; i < 10; i++) {
            let next = (i + 2) % 10;
            this.drawLine(points[i].x, points[i].y, points[next].x, points[next].y, grid);
        }

        grid.forEach(line => output.push(line.join('')));
        return output.join('\n') + '\n';
    }
}

class Swastik extends Pattern {
    draw() {
        let output = '';
        const n = this.size;  // Ensure the size is adequate to form a Swastik.
        if (n % 2 === 0 || n < 5) {
            throw new Error("Size must be an odd number and at least 5 for proper formation.");
        }
        let grid = Array.from({ length: n }, () => Array(n).fill(' '));
        const mid = Math.floor(n / 2);

        // Vertical and horizontal line through the middle
        for (let i = 0; i < n; i++) {
            grid[mid][i] = '*';
            grid[i][mid] = '*';
        }

        // Top left
        for (let i = 2; i < mid; i++) {
            grid[i][0] = '*';
        }

        // Bottom right
        for (let i = mid + 1; i < n-2; i++) {
            grid[i][n - 1] = '*';
        }

        // Top right
        for (let i = 0; i < mid; i++) {
            grid[0][i] = '*';
        }

        // Bottom left
        for (let i = mid + 1; i < n; i++) {
            grid[n - 1][i] = '*';
        }

        // Convert grid to string
        grid.forEach(line => {
            output += line.join('') + '\n';
        });

        return output;
    }
}
// Sandglass pattern class
class Sandglass extends Pattern {
    /**
     * Draws a sandglass pattern using ASCII characters.
     * @returns {string} The sandglass pattern as a string.
     */
    draw() {
        let output = [];
        const n = this.size;

        if (n % 2 === 0) {
            throw new Error("Size must be an odd number for proper symmetry.");
        }

        for (let i = 0; i <= Math.floor(n / 2); i++) {
            output.push(' '.repeat(i) + '*'.repeat(n - 2 * i));
        }
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            output.push(' '.repeat(i) + '*'.repeat(n - 2 * i));
        }

        return output.join('\n') + '\n';
    }
}

// Shuriken pattern class
class Shuriken extends Pattern {
    /**
     * Draws a shuriken pattern using ASCII characters.
     * @returns {string} The shuriken pattern as a string.
     */
    draw() {
        let output = [];
        const n = this.size;

        if (n < 5 || n % 2 === 0) {
            throw new Error("Size must be an odd number and at least 5 for proper formation.");
        }

        let grid = Array.from({ length: n }, () => Array(n).fill(' '));
        let mid = Math.floor(n / 2);
        let armLength = Math.floor(n / 3);

        for (let i = 0; i < n; i++) {
            grid[mid][i] = '*';
            grid[i][mid] = '*';
        }
        for (let i = 1; i <= armLength; i++) {
            grid[mid - i][mid - i] = '*';
            grid[mid + i][mid + i] = '*';
            grid[mid - i][mid + i] = '*';
            grid[mid + i][mid - i] = '*';
        }

        grid.forEach(line => output.push(line.join('')));
        return output.join('\n') + '\n';
    }
}

// Wave pattern class
class Wave extends Pattern {
    /**
     * Initializes a new instance of the Wave class with specific properties.
     * @param {number} length - The length of the wave pattern.
     * @param {number} amplitude - The height of the waves.
     * @param {number} frequency - The number of wave cycles.
     */
    constructor(length, amplitude, frequency) {
        super();
        this.length = length;
        this.amplitude = amplitude;
        this.frequency = frequency;
    }

    /**
     * Draws a wave pattern using ASCII characters.
     * @returns {string} The wave pattern as a string.
     */
    draw() {
        let output = [];
        const height = 2 * this.amplitude;

        let grid = Array.from({ length: height + 1 }, () => Array(this.length).fill(' '));
        for (let x = 0; x < this.length; x++) {
            let y = Math.floor(this.amplitude * Math.sin((x / this.length) * this.frequency * 2 * Math.PI) + this.amplitude);
            grid[y][x] = '*';
        }

        grid.forEach(line => output.push(line.join('')));
        return output.join('\n') + '\n';
    }
}

// XPattern pattern class
class XPattern extends Pattern {
    /**
     * Draws an X pattern using ASCII characters.
     * @returns {string} The X pattern as a string.
     */
    draw() {
        let output = [];
        const n = this.size;

        if (n < 3 || n % 2 === 0) {
            throw new Error("Size must be an odd number and at least 3 for proper formation.");
        }

        let grid = Array.from({ length: n }, () => Array(n).fill(' '));
        for (let i = 0; i < n; i++) {
            grid[i][i] = '*';
            grid[i][n - i - 1] = '*';
        }

        grid.forEach(line => output.push(line.join('')));
        return output.join('\n') + '\n';
    }
}

// ZigZag pattern class
class ZigZag extends Pattern {
    /** 
     * @param {number} height - The height.
     * @param {number} width - The width. 
     */
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
            
    draw() {
        let output = '';
        const numRows = this.height * 2; // Each zigzag consists of an upward and a downward line
        const numColumns = this.width * this.height; // Total width for the zigzag to fully develop

        // Initialize the grid to fill with spaces
        let grid = Array.from({ length: numRows }, () => Array(numColumns).fill(' '));

        // Populate the grid with zigzag pattern
        for (let row = 0; row < numRows; row++) {
            const rowPattern = row % 2 === 0 ? '/' : '\\';  // Determine the pattern for the current row
            const start = Math.floor(row / 2) * this.width;
            const end = start + this.width;

            if (rowPattern === '/') {
                for (let col = start; col < end; col++) {
                    grid[row][col] = rowPattern;
                }
            } else {
                for (let col = start; col < end; col++) {
                    grid[row][end - (col - start) - 1] = rowPattern;
                }
            }
        }

        // Convert the grid to a string output
        grid.forEach(line => output += line.join('') + '\n');

        return output;
    }
}

// Ladder pattern class
class Ladder extends Pattern {
    /**
     * Initializes a new instance of the Ladder class with specific properties.
     * @param {number} height - The height of the ladder.
     * @param {number} width - The width of each rung.
     */
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    /**
     * Draws a ladder pattern using ASCII characters.
     * @returns {string} The ladder pattern as a string.
     */
    draw() {
        let output = [];
        const rungSpacing = 3;

        const totalLines = this.height * rungSpacing;
        for (let i = 0; i < totalLines; i++) {
            if (i % rungSpacing === 0) {
                output.push('|' + '-'.repeat(this.width) + '|');
            } else {
                output.push('|' + ' '.repeat(this.width) + '|');
            }
        }

        return output.join('\n') + '\n';
    }
}

// HalfPyramid pattern class
class HalfPyramid extends Pattern {
    /**
     * Initializes a new instance of the HalfPyramid class with specific properties.
     * @param {number} height - The height of the pyramid.
     * @param {string} type - The type of the pyramid ('straight', 'inverted', 'left', 'invertedLeft').
     */
    constructor(height, type) {
        super();
        this.type = type;
        this.height = height;
    }

    /**
     * Draws a half pyramid pattern using ASCII characters.
     * @returns {string} The half pyramid pattern as a string.
     */
    draw() {
        let output = []; 
        switch (this.type) {
            case 'straight':
                for (let i = 1; i <= this.height; i++) {
                    output.push('* '.repeat(i).trim());
                }
                break;
            case 'inverted':
                for (let i = this.height; i > 0; i--) {
                    output.push('* '.repeat(i).trim());
                }
                break;
            case 'left':
                for (let i = 1; i <= this.height; i++) {
                    output.push(' '.repeat(this.height - i) + '* '.repeat(i).trim());
                }
                break;
            case 'invertedLeft':
                for (let i = this.height; i > 0; i--) {
                    output.push(' '.repeat(this.height - i) + '* '.repeat(i).trim());
                }
                break;
            default:
                return "Invalid pyramid type specified.";
        }
       
        return output.join('\n') + '\n';
    }
}

// Rectangle pattern class
class Rectangle extends Pattern {
    /**
     * Initializes a new instance of the Rectangle class with specific properties.
     * @param {number} height - The height of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {boolean} fill - Whether to fill the interior of the rectangle.
     */
    constructor(height, width, fill = false) {
        super( );
        this.fill = fill;
        this.height = height;
        this.width = width;
    }

    /**
     * Draws a rectangle pattern using ASCII characters.
     * @returns {string} The rectangle pattern as a string.
     */
    draw() {
        let output = [];
        for (let i = 0; i < this.height; i++) {
            if (i === 0 || i === this.height - 1) {
                output.push('* '.repeat(this.width).trim());
            } else {
                if (this.fill) {
                    output.push('* ' + '  '.repeat(this.width - 2) + '*');
                } else {
                    output.push('* ' + '* '.repeat(this.width - 2) + '*');
                }
            }
        }
        return output.join('\n') + '\n';
    }
}


// Other pattern can be added similarly

// Exporting the classes for use in other modules
module.exports = {
    Butterfly,
    Triangle,
    Square,
    Pyramid,
    Diamond,
    Circle,
    Fish,
    Ganesh,
    Heart,
    Kite,
    Pentagram,
    Polygon,
    Rhombus,
    RouterBox,
    Star,
    Swastik,
    Sandglass,
    Shuriken,
    Wave,
    XPattern,
    ZigZag,
    Ladder,
    HalfPyramid,
    Rectangle,
    // Can be added once implemented
};

