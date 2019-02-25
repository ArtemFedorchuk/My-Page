let btn = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu-tog'),
    headerBtn = document.querySelector('.header__btn');

btn.addEventListener('click', function(){
		// console.log('hello')
  		menu.classList.toggle('menu-togler');
  		if (document.querySelector('.menu-togler')){
  			headerBtn.style.opacity = '0';
  			menu.style.marginBottom = '-30px';
  			btn.style.marginBottom = '-50px';
  		}else{
  			headerBtn.style.opacity = '1';
  		}
});


$(function (){

$('.big-slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        dots: true,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});