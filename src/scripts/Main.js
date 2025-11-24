import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
    
  }

  init() {
    Icons.load();
    this.initSwiperPagination();
  }

  initSwiperPagination() {
    const target = document.querySelector('.pagination');
    if (!target) return;

    new Swiper(target, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  }
}
new Main();
