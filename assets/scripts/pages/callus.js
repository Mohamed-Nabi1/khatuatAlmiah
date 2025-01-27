import { loadCSS } from "../utils/cssloader.js";
import { unloadCSS } from "../utils/cssloader.js";

export function renderCallUs(mainContent) {
  unloadCSS("./assets/styles/home.css");
  loadCSS("./assets/styles/callus.css");

  mainContent.innerHTML = `
    <div class="container text-center">
      <!-- Logo Section -->
      <div class="logo-section">
        <img src="./assets/images/logo.svg" alt="logo image" class="img-fluid p-5">
      </div>

      <!-- Content Section -->
      <div class="row content-section w-100 p-5">
      <h2>تواصل معنا</h2>
      <p>نسعد بخدمتك وتقديم أفضل حلول أنظمة المياه</p>
      <p>
        <strong>هاتف:</strong> <a href="tel:+966502442796">0502442796</a><br>
        <strong>بريد إلكتروني:</strong> <a href="mailto:PurificationSteps@gmail.com">PurificationSteps@gmail.com</a><br>
        <strong>العنوان:</strong> المملكة العربية السعودية الرياض حي اليرموك شارع المليسان
      </p>
  </div>
  `;
}
