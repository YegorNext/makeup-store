const dragBox = document.querySelector(".history__content-wrap");
let isDragging = false;
let startX;

const dragging = (e) => {
    if (!isDragging) return;
    dragBox.scrollLeft += e.type === 'touchmove' ? startX + e.touches[0].clientX : e.movementX;
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

/////////

const whomBox = document.querySelector(".for-whom__elems-wrapper");
let isWhomDragging = false;
let startWhomX;

const wdragging = (e) => {
    if (!isWhomDragging) return;

    e.preventDefault(); 

    whomBox.scrollLeft += e.type === 'touchmove' ? startWhomX + e.touches[0].clientX : e.movementX;
    startWhomX = e.type === 'touchmove' ? e.touches[0].clientX : null;
}

whomBox.addEventListener('mousedown', (e) => {
    isWhomDragging = true;
    startWhomX = null;
});
document.addEventListener('mouseup', () => isWhomDragging = false);
whomBox.addEventListener('mousemove', wdragging);

whomBox.addEventListener('touchstart', (e) => {
    isWhomDragging = true;
    startWhomX = e.touches[0].clientX;
});
whomBox.addEventListener('touchmove', wdragging);
document.addEventListener('touchend', () => isWhomDragging = false);