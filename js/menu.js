const menuControl = $('#menu-icon');

const overlay = $('.overlay');
const menuUI = $('.menu'); 
const close_btn = $('#menu-btn-close');

var isEnabled = false;


function showMenu(){
    isEnabled = true;

    $(overlay).fadeIn(50).addClass('show-overlay');
    $(menuUI).fadeIn(80).addClass('show-menu');
    
    $('html').addClass('overflow-y');
}

function closeMenu(){
    if(isEnabled){
        $(overlay).fadeOut(50).removeClass('show-overlay');
        $(menuUI).fadeOut(50).removeClass('show-menu');

        $('html').removeClass('overflow-y');
        
        isEnabled = false;
    }
}

menuControl.on('click', showMenu);
overlay.on('click', closeMenu);

close_btn.on('click', closeMenu);

