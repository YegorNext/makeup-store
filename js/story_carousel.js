const dragBox = document.querySelector(".history__content-wrap");
const scrollSpeed = 0.85; 

let isDragging = false;
let startX;

const dragging = (e) => {
    if (!isDragging) return;
    dragBox.scrollLeft = e.type === 'touchmove' ? (startX - e.touches[0].clientX) * scrollSpeed : e.movementX;
    startX = e.type === 'touchmove' ? e.touches[0].clientX : null;
}

dragBox.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = null;
});
document.addEventListener('mouseup', () => isDragging = false);
dragBox.addEventListener('mousemove', dragging);

dragBox.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});
dragBox.addEventListener('touchmove', dragging);
document.addEventListener('touchend', () => isDragging = false);