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

let telBtn = document.querySelector('.header__btn');
let modal = document.querySelector('.modal');
let no = document.querySelector('.no');
let yes = document.querySelector('.yes');

// Модальное окно заказать звонок!
telBtn.addEventListener('click', function(){
  // console.log('helloos')
   modal.style.display = 'block';


   let yes = document.querySelector('.yes');
   
    yes.addEventListener('click', function(){
      modal.style.display = 'none';
   });
    no.addEventListener('click', function(){
      alert('Ну и пошел ты в ЖОПУ!')
      modal.style.display = 'none';
   });
});

// Модальное окно на запрет клика правой кнопкой мышки!
document.oncontextmenu = function(){
  // let modalDanger = document.querySelector('.mod-fix');
  // let body = document.querySelector('body');

      // modalDanger.style.display = 'block';
      // body.style.background = 'black';
    
    // function mod() {
    //   modalDanger.style.display = 'none';
    //   body.style.background = '';
    // }
    // setInterval(mod, 3000);
    return false
}