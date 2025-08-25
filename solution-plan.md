# Etch-a-Sketch Documentation
### PROBLEM 
Create a program that displays a 16x16 (or user-specified) grid of squares that change color as the user hovers over them. 
* The program should maintain a trail of colors throughout the grid indicating user interaction.
* The squares must fill up the space of a 960px wide container.
* There should be a button at the top of the page that prompts the user to enter the number of squares per side. 
* The user specified grid size should be limited to a maximum of 100x100 grid.
* The current grid should be removed and replaced by the new grid.

### PLAN
**UI**
- color changing squares on mouse hover
- size specifier button
- browser prompt for user input

**Input**
- number of squares per grid side (_number, optional_)

**Output**
- grid display

**Process**
1. create 16x16 grid of squares
2. fill the size of the container
3. change color of a square on mouse hover
4. get user grid size if button is clicked
5. remove the current grid
6. include the user's new grid

### ALGORITHM
```
SET container to the DOM container reference
CALL the create grid function, PASS squares per side (SPS)
    FOR iterations up to the SPSxSPS
        SET a square div to a DOM node
        CALL append to child on the container with new square
        ENDCALL
    ENDFOR
ENDCALL
```