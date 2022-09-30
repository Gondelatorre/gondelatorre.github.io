const rocket = document.getElementById('rocket');
const obstacle = document.getElementById('obstacle');
const moveDist = 40;

const up = 'ArrowUp';
const down = 'ArrowDown'


function move(action) {
}

function moveUp() {
    let position = parseInt(window.getComputedStyle(rocket).getPropertyValue('top'));

    if (position <= 0)
        return;

    position = position - moveDist;
    rocket.style.setProperty('top', position + 'px');

}

function moveDown() {

    let position = parseInt(window.getComputedStyle(rocket).getPropertyValue('top'));

    if (position >= 160)
        return;

    position = position + moveDist;
    rocket.style.setProperty('top', position + 'px');
}


document.addEventListener("keydown", function (event) {
     detectAction(event);
})

function detectAction(event) {

    if (event.key === up) {
        //move(up);
        moveUp();
        return;
    }
    if (event.key === down) {
        //move(down);
        moveDown();
        return;
    }
}