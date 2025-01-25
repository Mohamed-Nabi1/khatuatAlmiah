import { loadCSS } from "../utils/cssloader.js";
export function renderFooter() {
  loadCSS("./assets/styles/footer.css");
  const footer = document.getElementById("footer");
  footer.innerHTML = ` <div class="container">
            <div class="social-links mb-3">          
                <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
            
            <p>.&copy;2025 جميع الحقوق محفوظة لشركة خطوات المياه</p>
        </div>`;
}
