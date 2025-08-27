# Etch-a-Sketch Documentation
### PROBLEM 
Create a program that displays a 16x16 (or user-specified) grid of squares that change color as the user hovers over them. 
* The program should maintain a trail of colors throughout the grid indicating user interaction.
* The square's color should be randomized with each interaction.
* Each interaction should darken the square's color by 10%.
* The squares must fill up the space of the grid container.
* There should be a button on the page that prompts the user to enter the number of squares per side. 
* The user input size should be limited to a maximum of 100x100 grid.
* The current grid should be removed and replaced by the new grid.

### PLAN
**UI**
- color changing squares on mouse hover
- resize grid button
- browser prompt for user input

**Input**
- number of squares per grid side (_number, optional_)

**Output**
- grid display

**Process**
1. create 16x16 grid of squares
2. fill the size of the container
3. randomize color of a square on mouse hover
4. increase the opacity of a square with each interaction
5. get user grid size if button is clicked
6. remove the current grid
7. include the user's new grid

### ALGORITHM
```
SET container to the DOM container reference

CALL the create grid function, PASS squares per side (SPS)
    IF the SPS is out of range 1-100 THEN
        ALERT the user that their number is out of range
    ENDIF
    ELSE
        SET grid container inner HTML to an empty string
        FOR rows up to the SPS
            SET a row div to a DOM node
            SET row class list to square-row
            FOR columns up to the SPS
                SET a square div to a DOM node
                SET square class list to square-cell
                SET the square's opacity to 0 for initial transparency
                CALL append to child on the current row with new square
            ENDFOR
            CALL append to child on the grid container with new row
        ENDFOR
    ENDELSE
ENDCALL

LISTEN for mouse hovering over grid container
    CALL change color function and PASS event object
        SET square to the event target node
        IF the square is of class square-cell THEN
            CALL random color value function 
                RETURN a randomized integer between 0-255 inclusively 
            ENDCALL
            SET red color to randomized returned number
            SET green color to randomized returned number
            SET blue color to randomized returned number
            SET the square's background color to the rgb variables
            CALL increase opacity function and PASS the square
                IF the current opacity is LESS THAN 1 THEN
                    INCREASE the opacity by 10%
                ENDIF
            ENDCALL
        ENDIF
    ENDCALL
ENDLISTEN

LISTEN for new size button click 
    CALL resize grid function
        PROMPT the user for the number of squares per side 1-100
        IF the user input is NOT null from cancelling THEN
            PARSE the user input to integer type
            IF the parsed user input is NOT a Number THEN
                ALERT the user that their input is not a number
            ENDIF
            ELSE
                CALL the create grid function and PASS the SPS
            ENDELSE
        ENDIF
    ENDCALL
ENDLISTEN
```