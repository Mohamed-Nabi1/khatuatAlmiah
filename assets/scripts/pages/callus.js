import { loadCSS } from "../utils/cssloader.js";
import { unloadCSS } from "../utils/cssloader.js";

export function renderCallUs(mainContent) {
  unloadCSS("./assets/styles/home.css");
  loadCSS("./assets/styles/callus.css");

  mainContent.innerHTML = `
    <div class="container text-center">
      <!-- Logo Section -->
      <img src="./assets/images/logo.svg" alt="logo image" class="img-fluid w-50 p-5">


      <!-- Content Section -->
      <div class="row content-section w-100 p-5">
      <h2>تواصل معنا</h2>
      <p>نسعد بخدمتك وتقديم أفضل حلول أنظمة المياه</p>
      <p>
        <strong>هاتف:</strong> <a href="tel:+966502442797">0502442797</a><br>
        <strong>بريد إلكتروني:</strong> <a href="mailto:example@example.com">example@example.com</a><br>
        <strong>العنوان:</strong> المملكة العربية السعودية الرياض حي اليرموك شارع المليسان
      </p>
  </div>
  `;
}
