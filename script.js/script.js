$('.about-items > div ').on('click', function(){
 $(this).children('.about-icon').toggleClass('about-rotate-icon');
 $(this).parent('.about-items') .toggleClass('change-color');
 $(this).next('.about-text').slideToggle(300);
})

$('.features-items > div ').on('click', function(){
 $(this).children('.features-title') .toggleClass('title-changer');
 $(this).parent('.features-items') .toggleClass('border-changer');
 $(this).next('.features-text').slideToggle(300);
})