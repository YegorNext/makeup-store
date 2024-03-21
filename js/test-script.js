var isDragging = false;
var startX;
var carouselElements = document.querySelectorAll('.carousel.slide');

carouselElements.forEach(function (element) {
    element.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.clientX;
    });
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        var deltaX = e.clientX - startX;
        if (Math.abs(deltaX) > 10) {
            carouselElements.forEach(function (element) {
                if (deltaX > 0) {
                    $(element).carousel('prev');
                } else {
                    $(element).carousel('next');
                }
            });
            isDragging = false;
        }
    }
});

document.addEventListener('mouseup', function () {
    isDragging = false;
});