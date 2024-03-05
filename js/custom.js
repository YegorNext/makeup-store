$('#spoiler-ph-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    

    if(expanded == 'true') $('#switcher1').addClass('expand');
    
    if(expanded == 'false') $('#switcher1').removeClass('expand');

});
$('#spoiler-lk-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    

    if(expanded == 'true') $('#switcher2').addClass('expand');
    
    if(expanded == 'false') $('#switcher2').removeClass('expand');

});
$('#spoiler-wm-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    

    if(expanded == 'true') $('#switcher3').addClass('expand');
    
    if(expanded == 'false') $('#switcher3').removeClass('expand');

});

$('#spoiler-sp-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    

    if(expanded == 'true') $('#switcher4').addClass('expand');
    
    if(expanded == 'false') $('#switcher4').removeClass('expand');

});

$('#spoiler-st-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-dbl').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-dbl').removeClass('expand');
    }

});


$('#spoiler-lp-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-lp').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-lp').removeClass('expand');
    }

});

$('#spoiler-one-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-one').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-one').removeClass('expand');
    }

});

$('#spoiler-two-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-two').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-two').removeClass('expand');
    }

});

$('#spoiler-three-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-three').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-three').removeClass('expand');
    }

});

$('#spoiler-four-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-four').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-four').removeClass('expand');
    }

});

$('#spoiler-five-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-five').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-five').removeClass('expand');
    }

});


$('#spoiler-six-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-six').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-six').removeClass('expand');
    }

});

$('#spoiler-seven-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-seven').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-seven').removeClass('expand');
    }

});

$('#spoiler-eight-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-eight').addClass('expand');
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-eight').removeClass('expand');
    }

});

$('#faq-first-btn').on('click', function(){
     var expanded = $(this).attr('aria-expanded');
     
 
     if(expanded == 'true') $('#faq_switcher-first').addClass('expand');
     
     if(expanded == 'false') $('#faq_switcher-first').removeClass('expand');
 
 });

 $('#faq-second-btn').on('click', function(){
     var expanded = $(this).attr('aria-expanded');
     
 
     if(expanded == 'true') $('#faq_switcher-second').addClass('expand');
     
     if(expanded == 'false') $('#faq_switcher-second').removeClass('expand');
 
 });

 $('#faq-third-btn').on('click', function(){
     var expanded = $(this).attr('aria-expanded');
     
 
     if(expanded == 'true') $('#faq_switcher-third').addClass('expand');
     
     if(expanded == 'false') $('#faq_switcher-third').removeClass('expand');
 
 });


 $('#faq-fourth-btn').on('click', function(){
     var expanded = $(this).attr('aria-expanded');
     
 
     if(expanded == 'true') $('#faq_switcher-fourth').addClass('expand');
     
     if(expanded == 'false') $('#faq_switcher-fourth').removeClass('expand');
 
 });

 $('#faq-fifth-btn').on('click', function(){
     var expanded = $(this).attr('aria-expanded');
     
 
     if(expanded == 'true') $('#faq_switcher-fifth').addClass('expand');
     
     if(expanded == 'false') $('#faq_switcher-fifth').removeClass('expand');
 
 });



 

 function controlArrow(controller, element){
     $(controller).on('click', function(){
          var expanded = $(this).attr('aria-expanded');
     
          if(expanded == 'true') $(element).addClass('show');
          if(expanded == 'false') $(element).removeClass('show');
     });
 }


 controlArrow('#history-first-btn', '#history__arrow-first');
 controlArrow('#history-second-btn', '#history__arrow-second');
 controlArrow('#history-third-btn', '#history__arrow-third');
 controlArrow('#history-fourth-btn', '#history__arrow-fourth');
 controlArrow('#history-fifth-btn', '#history__arrow-fifth');
 controlArrow('#history-six-btn', '#history__arrow-six');
 controlArrow('#history-seven-btn', '#history__arrow-seven');
 controlArrow('#history-eigth-btn', '#history__arrow-eigth');


 const detailButtons = document.getElementsByClassName('stock__detail-btn');

 for(let btn of detailButtons){
     btn.addEventListener('click', function(){
          if($(this).attr('aria-expanded') == 'true')
               this.innerHTML = '<u class = "small white">приховати</u>';
          else this.innerHTML = '<u class = "small white">читати детально</u>';
     });
 }