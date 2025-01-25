import { loadCSS } from "../utils/cssloader.js";

export function renderCallUs(mainContent) {
  unloadCSS("./assets/styles/home.css");
  loadCSS('./assets/styles/callus.css');

  mainContent.innerHTML = `
    <div class="full-width-bg text-center py-5 bg-primary text-white">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <img class="img-fluid mb-3" src="./assets/images/image.png" alt="khatuat altaqnia Systems Logo">
          </div>
          <div class="col-md-8">
            <h2 class="mb-3">لا تتردد في التواصل معنا</h2>
            <p class="mb-3">للحصول على أفضل حلول أنظمة المياه</p>
            <p class="mb-3">
              <strong>هاتف:</strong> <a class="text-white text-decoration-underline" href="tel:0000000">0000000</a><br>
              <strong>بريد إلكتروني:</strong> <a class="text-white text-decoration-underline" href="mailto:000000">00000</a><br>
              <strong>العنوان:</strong> السعودية
            </p>
          </div>
        </div>
      </div>
  `;
}