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

    if(expanded == 'true') $(this).addClass('hide-angels');

    if(expanded == 'false') $(this).removeClass('hide-angels');

});