const tabletCarouselElement = document.querySelector('#for-whom-carousel-tablet');
const mobileCarouselElement = document.querySelector('#for-whom-carousel-mobile');

const carouselTablet = new bootstrap.Carousel(tabletCarouselElement, {
  interval: 5000
});

const carouselMobile = new bootstrap.Carousel(mobileCarouselElement, {
    interval: 5000
});
