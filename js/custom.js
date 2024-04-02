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

function stopAllVideos(){
     $('video:not([autoplay])').each(function() {
          this.pause();
     });   
}

$('#spoiler-st-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-dbl').addClass('expand');
         

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-dbl').removeClass('expand');

         video.pause();
    }

});


$('#spoiler-lp-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-lp').addClass('expand');

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-lp').removeClass('expand');

         video.pause();
    }

});

$('#spoiler-one-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);


    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-one').addClass('expand');

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-one').removeClass('expand');

         video.pause();
    }

});

$('#spoiler-two-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-two').addClass('expand');

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-two').removeClass('expand');

         video.pause();
    }

});

$('#spoiler-three-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);


    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-three').addClass('expand');

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-three').removeClass('expand');

         video.pause();
    }

});

$('#spoiler-four-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-four').addClass('expand');

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-four').removeClass('expand');

         video.pause();
    }

});

$('#spoiler-five-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);


    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-five').addClass('expand');

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-five').removeClass('expand');

         video.pause();
    }

});


$('#spoiler-six-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-six').addClass('expand');

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-six').removeClass('expand');

         video.pause();
    }

});

$('#spoiler-seven-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-seven').addClass('expand');

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-seven').removeClass('expand');

         video.pause();
    }

});

$('#spoiler-eight-btn').on('click', function(){
    var expanded = $(this).attr('aria-expanded');
    var video = $(this).parent().find('video').get(0);

    if(expanded == 'true'){
         $(this).addClass('hide-angels');
         $('#switcher-eight').addClass('expand');

         stopAllVideos();
         video.play();
    }

    if(expanded == 'false'){
         $(this).removeClass('hide-angels');
         $('#switcher-eight').removeClass('expand');
         
         video.pause();
    }

});

$('#spoiler-nine-btn').on('click', function(){
     var expanded = $(this).attr('aria-expanded');
     var video = $(this).parent().find('video').get(0);
 
     if(expanded == 'true'){
          $(this).addClass('hide-angels');
          $('#switcher-nine').addClass('expand');
 
          stopAllVideos();
          video.play();
     }
 
     if(expanded == 'false'){
          $(this).removeClass('hide-angels');
          $('#switcher-nine').removeClass('expand');
          
          video.pause();
     }
 
 });

 $('#spoiler-ten-btn').on('click', function(){
     var expanded = $(this).attr('aria-expanded');
     var video = $(this).parent().find('video').get(0);
 
     if(expanded == 'true'){
          $(this).addClass('hide-angels');
          $('#switcher-ten').addClass('expand');
 
          stopAllVideos();
          video.play();
     }
 
     if(expanded == 'false'){
          $(this).removeClass('hide-angels');
          $('#switcher-ten').removeClass('expand');
          
          video.pause();
     }
 
 });

 $('#spoiler-eleven-btn').on('click', function(){
     var expanded = $(this).attr('aria-expanded');
     var video = $(this).parent().find('video').get(0);

     if(expanded == 'true'){
          $(this).addClass('hide-angels');
          $('#switcher-eleven').addClass('expand');

          stopAllVideos();
          video.play();
     }

     if(expanded == 'false'){
          $(this).removeClass('hide-angels');
          $('#switcher-eleven').removeClass('expand');

          video.pause();
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
     
          if(expanded == 'true' && !$(element).hasClass('show')){
                $(element).addClass('show');
                $(this).find('u').text('');
          }
          else{
               $(element).removeClass('show');
               $(this).find('u').text('читати повний відгук');
         }
     });

     $(element).on('click', function(){          
          $(controller).click();
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

 
 controlArrow('#history-nine-btn', '#history__arrow-nine');
 controlArrow('#history-ten-btn', '#history__arrow-ten');
 controlArrow('#history-eleven-btn', '#history__arrow-eleven');
 controlArrow('#history-twelve-btn', '#history__arrow-twelve');
 controlArrow('#history-thirteen-btn', '#history__arrow-thirteen');
 controlArrow('#history-fourteen-btn', '#history__arrow-fourteen');
 controlArrow('#history-fifteen-btn', '#history__arrow-fifteen');
 controlArrow('#history-sixteen-btn', '#history__arrow-sixteen');

 controlArrow('#history-seventeen-btn', '#history__arrow-seventeen');
 controlArrow('#history-eighteen-btn', '#history__arrow-eighteen');
 controlArrow('#history-nineteen-btn', '#history__arrow-nineteen');
 controlArrow('#history-twenty-btn', '#history__arrow-twenty');
 controlArrow('#history-twentyone-btn', '#history__arrow-twentyone');
 controlArrow('#history-twentytwo-btn', '#history__arrow-twentytwo');
 controlArrow('#history-twentythree-btn', '#history__arrow-twentythree');
 controlArrow('#history-twentyfour-btn', '#history__arrow-twentyfour');



 const detailButtons = document.getElementsByClassName('stock__detail-btn');

 for(let btn of detailButtons){
     btn.addEventListener('click', function(){
          if($(this).attr('aria-expanded') == 'true')
               this.innerHTML = '<u class = "small white">приховати</u>';
          else this.innerHTML = '<u class = "small white">читати детально</u>';
     });
 }
