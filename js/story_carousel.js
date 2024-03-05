const dragBox = document.querySelector(".history__content-wrap");
const scrollSpeed = 0.85; 

let isDragging = false;
let startTouchX;

const startDragging = (e) => {
    if (e.type === 'touchstart') {
        isDragging = true;
        startTouchX = e.touches[0].clientX;
    } else if (e.type === 'mousedown') {
        isDragging = true;
        startTouchX = e.clientX;
    }
}

const dragging = (e) => {
    if (!isDragging) return;

    let currentTouchX;

    if (e.type === 'touchmove') {
        currentTouchX = e.touches[0].clientX;
    } else if (e.type === 'mousemove') {
        currentTouchX = e.clientX;
    }

    const movementX = (startTouchX - currentTouchX) * scrollSpeed;

    dragBox.scrollLeft += movementX;

    startTouchX = currentTouchX;
}

const stopDragging = () => {
    isDragging = false;
}

dragBox.addEventListener('mousedown', startDragging);
document.addEventListener('mouseup', stopDragging);
dragBox.addEventListener('mousemove', dragging);

dragBox.addEventListener('touchstart', startDragging);
dragBox.addEventListener('touchmove', dragging);
document.addEventListener('touchend', stopDragging);