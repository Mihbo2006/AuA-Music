$('.openPopup').click(function(e){
    e.preventDefault(e);
    $('.popupBG').fadeIn(100);
    $('html').addClass('noScroll'); // This class removes anything higher than viewport
});

$('.closePopup').click(function(e){
    e.preventDefault();
    $('.popupBG').fadeOut(100);
    $('html').removeClass('noScroll');
});