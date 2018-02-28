$(window).on('load', function(){
  $(".js-slider").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: '50px',
    prevArrow:'<button class="prevArrow slider__arrow slider__prev"><span></span></button>',
    nextArrow:'<button class="nextArrow slider__arrow slider__next"><span></span></button>'
  });
});
