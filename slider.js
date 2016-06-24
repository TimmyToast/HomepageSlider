function swapIn() {

  jumpCount = jumpCount + 1;
  leftPercent = leftPercent - 100;
  $( ".imageSlides" ).animate({
    left: leftPercent+"%"
  }, 500, function() {

  if (jumpCount == totalSteps){           
    $(".imageSlides").css("left", 0);
    jumpCount = 0;
    leftPercent = 0;
  } 
    setTimeout(swapIn, 2000);
  });
  
}

function sliderHeight(){

  $(".imageSlider").height( $(".imageSlider").width() * 1.30434782608696);

}

jQuery(window).resize(function() {

  sliderHeight();

});

$( window ).load(function() {

  jumpCount = 0;
  leftPercent = 0;
  totalSteps = $('.imageSlides ul li').length;
  $(".imageSlides").width( (totalSteps + 1) * 100 + "%");

  theListsItems = $(".imageSlides ul li").first().html();
  $(".imageSlides ul").append("<li>" + theListsItems + "</li>");
  $(".imageSlider li").width( (100 / (totalSteps + 1))+ "%");
      
  setTimeout(swapIn, 3000);
  sliderHeight();

});