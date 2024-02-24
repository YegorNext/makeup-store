const dragBox = document.querySelector(".history__content-wrap");
let isDragging = false;

const dragging = (e) => {
    if (!isDragging) return;
    console.log('dragging');
    dragBox.scrollLeft -= e.movementX;
}

dragBox.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);
dragBox.addEventListener('mousemove', dragging);



const whomBox = document.querySelector(".for-whom__elems-wrapper");
let isWhomDragging = false;

const wdragging = (e) => {
    if (!isWhomDragging) return;
    whomBox.scrollLeft -= e.movementX;
}

whomBox.addEventListener('mousedown', () => isWhomDragging = true);
document.addEventListener('mouseup', () => isWhomDragging = false);
whomBox.addEventListener('mousemove', wdragging);