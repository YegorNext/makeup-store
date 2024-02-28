const dragBox = document.querySelector(".history__content-wrap");
const scrollSpeed = 0.8; 
const scrollStInterval = 5000;
const scrollStPercentage = 20;
let isDragging = false;
let startX;
let isScrollingStToEnd = false;
let isAutoScrollStScheduled = false;
let scrollTimeout;
let scrollIntervalSt;

function dragging(e) {
    if (!isDragging) return;
    dragBox.scrollLeft -= e.type === 'touchmove' ? -(startX - e.touches[0].clientX) * scrollSpeed : e.movementX;
    startX = e.type === 'touchmove' ? e.touches[0].clientX : null;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isDragging = false; 
        scheduleAutoScrollSt();
    }, 5000);
}

function startAutoScrollSt() {
    isAutoScrollStScheduled = true;
    scrollIntervalSt = setInterval(() => {
        autoScrollSt();
    }, scrollStInterval);
}

function stopAutoScrollSt() {
    clearInterval(scrollIntervalSt);
    isAutoScrollStScheduled = false;
}

dragBox.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = null;

    clearTimeout(scrollTimeout);
});
document.addEventListener('mouseup', () => {
    isDragging = false; 
    scheduleAutoScrollSt();
});
dragBox.addEventListener('mousemove', dragging);

dragBox.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;

    clearTimeout(scrollTimeout);
});
dragBox.addEventListener('touchmove', dragging);
document.addEventListener('touchend', () => {
    isDragging = false; 
    scheduleAutoScrollSt();
});

function scheduleAutoScrollSt() {
    if (!isAutoScrollStScheduled) {
        startAutoScrollSt();
        scrollTimeout = setTimeout(() => {
            stopAutoScrollSt();
        }, 5000);
    }
}

function autoScrollSt() {
    if (isScrollingStToEnd) {
        isScrollingStToEnd = false;
        dragBox.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        const scrollAmount = (dragBox.scrollWidth * scrollStPercentage) / 100;
        const newScrollLeft = dragBox.scrollLeft + scrollAmount;

        if (newScrollLeft >= dragBox.scrollWidth - dragBox.clientWidth) {
            isScrollingStToEnd = true;
            dragBox.scrollTo({
                left: dragBox.scrollWidth,
                behavior: 'smooth'
            });
        } else {
            dragBox.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    }
}

scheduleAutoScrollSt();