const dragBox = document.querySelector(".history__content-wrap");
let isDragging = false;
let startX;

const startDragging = (e) => {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
}

const dragging = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const movementX = startX - currentX;
    dragBox.scrollLeft += movementX;
    startX = currentX;
}

const stopDragging = () => {
    isDragging = false;
}

dragBox.addEventListener('mousedown', startDragging);
dragBox.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', stopDragging);

// Добавляем обработчики для тач-событий
dragBox.addEventListener('touchstart', startDragging);
dragBox.addEventListener('touchmove', dragging);
document.addEventListener('touchend', stopDragging);