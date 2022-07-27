let searchbtn = document.querySelector('#serach-btn');
let searchbar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu =document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');
let videobtn =document.querySelectorAll('.vid-btn');



window.onscroll = () =>{
    searchbtn.classList.remove('fa-times');
  searchbar.classList.remove('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  loginform.classList.remove('active');

}
menu.addEventListener('click',() => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});


searchbtn.addEventListener('click',() => {
  searchbtn.classList.toggle('fa-times');
  searchbar.classList.toggle('active');
});

formbtn.addEventListener('click',() => {
  loginform.classList.add('active');
});

formclose.addEventListener('click',() => {
  loginform.classList.remove('active');
});

videobtn.forEach(btn =>{
  btn.addEventListener('click',()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-swiper-slide').src = src
  });
})

var swiper = new Swiper(".review-slide", {
  spaceBetween:20,
  loop:true,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  breakpoints:{
    640:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
    }
  }
});