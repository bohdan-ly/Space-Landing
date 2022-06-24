import '@scss/style.scss'
import './js/accordion.js'
import './js/tabs.js'
import './js/burger.js'
import './js/modal.js'

// Swiper

const swiper = new Swiper('.swiper', {
    // Install modules
    // modules: [Navigation, Pagination],
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.next__arrow',
        prevEl: '.prev__arrow',
      },
  });


