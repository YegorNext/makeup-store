const container1 = document.querySelector(".for-whom__elems-wrapper");
const scrollSpeed1 = 0.8; 
const scrollInterval1 = 5000;
const scrollPercentage1 = 20;
let isScrollingToEnd1 = false;
let isDragging1 = false;
let startX1;
let isAutoScrollScheduled1 = false;
let scrollTimeout1;
let scrollIntervalId1;

function dragging1(e) {
    if (!isDragging1) return;
    container1.scrollLeft -= e.type === 'touchmove' ? -(startX1 - e.touches[0].clientX) * scrollSpeed1 : e.movementX;
    startX1 = e.type === 'touchmove' ? e.touches[0].clientX : null;

    clearTimeout(scrollTimeout1);
    scrollTimeout1 = setTimeout(() => {
        isDragging1 = false; 
        scheduleAutoScroll1();
    }, 5000);
}

function startAutoScroll1() {
    isAutoScrollScheduled1 = true;
    scrollIntervalId1 = setInterval(() => {
        autoScroll1();
    }, scrollInterval1);
}

function stopAutoScroll1() {
    clearInterval(scrollIntervalId1);
    isAutoScrollScheduled1 = false;
}

container1.addEventListener('mousedown', (e) => {
    isDragging1 = true;
    startX1 = null;

    clearTimeout(scrollTimeout1);
});
document.addEventListener('mouseup', () => {
    isDragging1 = false; 
    scheduleAutoScroll1();
});
container1.addEventListener('mousemove', dragging1);

container1.addEventListener('touchstart', (e) => {
    isDragging1 = true;
    startX1 = e.touches[0].clientX;

    clearTimeout(scrollTimeout1);
});
container1.addEventListener('touchmove', dragging1);
document.addEventListener('touchend', () => {
    isDragging1 = false; 
    scheduleAutoScroll1();
});

function scheduleAutoScroll1() {
    if (!isAutoScrollScheduled1) {
        startAutoScroll1();
        scrollTimeout1 = setTimeout(() => {
            stopAutoScroll1();
        }, 5000);
    }
}

function autoScroll1() {
    if (isScrollingToEnd1) {
        isScrollingToEnd1 = false;
        container1.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        const scrollAmount = (container1.scrollWidth * scrollPercentage1) / 100;
        const newScrollLeft = container1.scrollLeft + scrollAmount;

        if (newScrollLeft >= container1.scrollWidth - container1.clientWidth) {
            isScrollingToEnd1 = true;
            container1.scrollTo({
                left: container1.scrollWidth,
                behavior: 'smooth'
            });
        } else {
            container1.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    }
    clearTimeout(scrollTimeout1);
    isAutoScrollScheduled1 = false;
    scheduleAutoScroll1();
}

scheduleAutoScroll1();



/////
const modals = [ $('#modalFirst'), $('#modalSecond'), $('#modalThird')  ]; 
const anchors = document.querySelectorAll('a[href*="#"]');

function closeOpenedModel(){
    for(let modal of modals){
        modal.hide();
    }

    var modalBackdrops = document.getElementsByClassName('modal-backdrop');
    for (let backdrop of modalBackdrops) {
      backdrop.style.display = 'none';
    }
}

for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();

        closeMenu();
        closeOpenedModel();
        
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        }); 
    });
}
