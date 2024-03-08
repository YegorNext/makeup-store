
document.addEventListener('DOMContentLoaded', function() {
  const tabletCarouselElement = document.querySelector('#for-whom-carousel-tablet');
  const mobileCarouselElement = document.querySelector('#for-whom-carousel-mobile');

  const widthCarouselHistoryElement = document.querySelector('#history-carousel-tablet');
  const mobileCarouselHistoryElement = document.querySelector('#history-carousel-mobile');
  const tabletCarouselHistoryElement = document.querySelector('#history-carousel-tblt');

  const carouselTablet = new bootstrap.Carousel(tabletCarouselElement, {
    interval: 5000,
    wrap: true
  });

  const carouselMobile = new bootstrap.Carousel(mobileCarouselElement, {
      interval: 5000,
      wrap: true
  });

  const carouselHistoryWidth = new bootstrap.Carousel(widthCarouselHistoryElement, {
    interval: 5000,
    wrap: true
  });

  const carouselHistoryMobile = new bootstrap.Carousel(mobileCarouselHistoryElement, {
      interval: 5000,
      wrap: true
  });

  const carouselHistoryTablet = new bootstrap.Carousel(tabletCarouselHistoryElement, {
    interval: 5000,
    wrap: true
  });



    carouselTablet.cycle();
    carouselMobile.cycle();
    carouselHistoryWidth.cycle();
    carouselHistoryMobile.cycle();
    carouselHistoryTablet.cycle();

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


document.addEventListener("DOMContentLoaded", function() {
    var myVideo = document.getElementById("story-video");

    if (myVideo.played.length === 0) {
        myVideo.play();
    }
});

});


