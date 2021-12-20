/*
1. dynamically create multiple divs that accounts for every single box
2. add dummy value to it and set text color to white
3. put all of that into CSS Grid, such that it will fit to screen 
(small num = big boxes, large num = small boxes)
*/

function etchASketch(){
    let button = document.querySelector('#btn');
    button.onclick = () => {
        let input = document.getElementById('size').value;
        input = parseInt(input);
        //need to verify that input is less than 26 and greater than 0
        if (input >= 1 && input <= 25){
            //this will delete all previous divs (if available) and create new ones
            // when the submit button is clicked
            const destroy = document.querySelectorAll('.box');
            destroy.forEach((div) => {
                div.parentNode.removeChild(div);
            });

            // create a custom grid with multiple divs
            const grid = document.querySelector('.grid');
            for (i = 0; i < input * input; i++){
                let tmp = document.createElement('div');
                tmp.className = "box";
                grid.appendChild(tmp);
            }
            //setting grid lines to white
            const colorChanger = document.querySelectorAll('.box');
            colorChanger.forEach((div) => {
                div.style.cssText = 'color: white';
            });
            
            //putting all divs into a grid
            grid.style.cssText = 'display: grid; grid-template-columns: repeat(' + input + ', 1fr)';

            //other features of the project
            mouseOver("red"); // default color is red
            erase();
            clear();
            rainbow();
        }
        else{
            alert("Invalid Input! Try Again.");
        }
    }
}

// argument takes in the name of color when mouseover sketchpad 
// and will change the color of the div
function mouseOver(color){
    const hover = document.querySelectorAll('.box');
    hover.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.cssText = 'background-color: ' + color;
        });
    });
}

//erase when mouseover 
function erase(){
    let eraseButton = document.querySelector('#erase');
    eraseButton.onclick = () => {
        const hover = document.querySelectorAll('.box');
        hover.forEach((div) => {
            div.addEventListener("mouseover", () => {
                div.style.cssText = 'background-color: white';
            });
        });
    }
}

// this function will clear the entire pad and start over
function clear(){
    // MISTAKE: have to link erase button first
    let clearButton = document.querySelector('#clear');
    clearButton.onclick = () => {
        const hover = document.querySelectorAll('.box');
        hover.forEach((div) => {
            div.style.cssText = 'background-color: white';
        });
    }
};

// the color of the div when mouseover will be randomly generated
function rainbow(){
    let rainbowButton = document.querySelector("#rainbow");
    rainbowButton.onclick = () => {
        const hover = document.querySelectorAll(".box");
        hover.forEach((div) => {
            div.addEventListener("mouseover", () => {
                r = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                div.style.cssText = 'background-color: rgb' + '(' + r + ',' + g + ',' + b + ')';
            })
        })
    }
}

//create a main function that will run everything
etchASketch();