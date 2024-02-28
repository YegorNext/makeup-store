const dragBox = document.querySelector(".history__content-wrap");
const scrollSpeed = 0.5; // Уменьшите значение, чтобы уменьшить скорость

let isDragging = false;
let startX;

const dragging = (e) => {
    if (!isDragging) return;
    dragBox.scrollLeft -= e.type === 'touchmove' ? -(startX - e.touches[0].clientX) * scrollSpeed : e.movementX;
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
const scrollInterval = 5000;
const scrollPercentage = 20; // Прокрутить на 20% ширины контейнера
let isScrollingToEnd = false;

function autoScroll() {
    if (isScrollingToEnd) {
        // Если контейнер прокручивается в самый конец, устанавливаем флаг в false и прокручиваем в начало
        isScrollingToEnd = false;
        whomBox.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        // Прокручиваем на указанный процент ширины контейнера
        const scrollAmount = (whomBox.scrollWidth * scrollPercentage) / 100;
        const newScrollLeft = whomBox.scrollLeft + scrollAmount;

        if (newScrollLeft >= whomBox.scrollWidth - whomBox.clientWidth) {
            // Если достигнут конец, устанавливаем флаг в true
            isScrollingToEnd = true;
            whomBox.scrollTo({
                left: whomBox.scrollWidth,
                behavior: 'smooth'
            });
        } else {
            whomBox.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    }
}

const scrollIntervalId = setInterval(autoScroll, scrollInterval);


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
