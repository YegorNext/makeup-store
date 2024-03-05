const tabletCarouselElement = document.querySelector('#for-whom-carousel-tablet');
const mobileCarouselElement = document.querySelector('#for-whom-carousel-mobile');

const carouselTablet = new bootstrap.Carousel(tabletCarouselElement, {
  //interval: 5000
});

const carouselMobile = new bootstrap.Carousel(mobileCarouselElement, {
    //interval: 5000
});

function scrollCarousels(){
  carouselTablet.next();
  carouselMobile.next();
}

const intervalTablet = setInterval(scrollCarousels, 5000);


////
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