// Swiper Slider
const swiper = new Swiper('.bg-slider-thumbs', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
})

const swiper2 = new Swiper('.bg-slider', {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
})

// Navigation bar effects on skroll
window.addEventListener('scroll', function() { 
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})

// Responsive navigatin menu toggle
const menuBtn = document.querySelector('.nav__menu-btn')
const closeBtn = document.querySelector('.nav__close-btn')
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener('click', () => {
  navigation.classList.add('active')
})

closeBtn.addEventListener('click', () => {
  navigation.classList.remove('active')
})
