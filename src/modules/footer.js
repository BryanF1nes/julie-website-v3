export const Footer = (() => {
   const el = {
      content: () => document.getElementById('content'),
   }

   const init = () => {
      el.content().appendChild(createFooter());
   }

   const createFooter = () => {
      const footer = document.createElement('footer');
      footer.innerHTML = `
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path fill="#B495F5" d="M0,96 C240,160 480,160 720,130 C960,100 1200,50 1440,90 L1440,320 L0,320 Z"></path>
        </svg>
        <div class="footer-content">
            <div class="footer-links">
                <button id="aboutMe">About Me</button>
                <button id="books">Books</button>
                <button id="contactMe">Contact Me</button>
                <button id="followMe">Follow Me</button>
            </div>
            <div class="footer-icons">
                <a href="#"><i class="fa-brands fa-facebook fa-xl"></i></a>
                <a href="#"><i class="fa-brands fa-instagram fa-xl"></i></a>
            </div>
            <div class="footer-copyright">
                <p>&copy; Julie Ann Garnett Author | Website Built By Bryan Fines</p>
            </div>
        </div>
        `;

      return footer;
   }

   return { init }
})()
