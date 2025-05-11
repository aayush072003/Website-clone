let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=> {
header.classList.toggle('shadow',window.scrollY > 0);
});

menu.oneclick = () => {
  menu.classList.toggle('bx');
  navbar.classList.toggle('navbar');
}
menu.oneclick = () => {
  menu.classList.remove('bx');
  navbar.classList.remove('navbar');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 
  
  //Swiper
  var swiper = new Swiper(".Feature-container",{
    spaceBetween: 20,
    loop:true,
    autoplay:{
      delay: 55000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
  });