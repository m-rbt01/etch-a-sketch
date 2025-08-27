# Etch-a-Sketch Project
A resizable etch-a-sketch board that changes in color and opacity with mouse interactions.

## About the Project
This project is intended to showcase DOM manipulation and flexbox layout design. The page creates a 16x16 grid to represent the etch-a-sketch board by using DOM nodes and methods. Each time the mouse hovers on a square, the square responds with a randomized RGB color and increased opacity. The page also provides a button that allows the user to resize the board.
* The script file creates the initial grid and adds it to the DOM tree.
* CSS Flexbox layout organizes the squares into a grid structure.
* The grid listens for mouse hover events across all squares, only changing the color of the interacted square.
* Squares are assigned a randomized RGB color with each mouse hover.
* Each hover interaction increases the square's opacity by 10% until fully colored.
* The new grid button accepts a number between 1-100, clears the existing grid, and creates a new grid with the specified squares per side.

## Contact
Christian Donjuan - [LinkedIn](https://www.linkedin.com/in/christian-donjuan/) - chdonjuan.1@gmail.com  
Live Preview: https://m-rbt01.github.io/etch-a-sketch/

## Acknowledgements
This project was developed by applying key principles covered in the following resources:
- **Foundations Course** - _JavaScript Basics_, on [The Odin Project](https://www.theodinproject.com/paths/foundations/courses/foundations).  