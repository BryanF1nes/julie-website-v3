import { HomePage } from "./homepage.js";

export const DisplayController = (() => {
   const init = () => {
      HomePage.init();
   }

   return { init }
})();

export const EventHandler = (() => {
   const bindEvents = () => {
      const buyNow = document.getElementById('buyNow');
      const banner = document.querySelector('.banner-text');

      if (buyNow) {
         buyNow.addEventListener('click', handleBuyNow);
      }
      if (banner) {
         banner.addEventListener('click', handleBanner);
      }
   };

   const handleBuyNow = () => {
      window.open("https://www.authorhouse.com/en/bookstore/bookdetails/860746-daisys-delightful-day");
   };

   const handleBanner = () => {
      const content = document.getElementById('content');
      content.innerHTML = "";
      HomePage.init();
      bindEvents(); // 👈 re-attach after render
   };

   return { bindEvents }
})();
