import { loadCSS } from "../utils/cssloader.js";
import { unloadCSS } from "../utils/cssloader.js";

export function renderCallUs(mainContent) {
  unloadCSS("./assets/styles/home.css");
  unloadCSS("./assets/styles/aboutus.css")
  loadCSS("./assets/styles/callus.css");

  mainContent.innerHTML = `
    <div class="container text-center">
      <!-- Logo Section -->
      <div class="logo-section">
        <img src="./assets/images/logo.svg" alt="شركة خطوات التنقية التجارية - فلاتر المياه" class="img-fluid w-80 p-3">
      </div>

      <!-- Content Section -->
      <div class="row content-section w-100 p-5">
        <h2>تواصل معنا</h2>
        <p>نسعد بخدمتك وتقديم أفضل حلول أنظمة المياه</p>
        <div class="contact-info text-end">
            <p > 
                <strong><i class="fas fa-phone"></i> هاتف:</strong> 
<a href="tel:+966502442796" onclick="gtag_report_conversion('tel:+966502442796')">
  0502442796
</a><br> 
                <strong><i class="fas fa-envelope"></i> بريد إلكتروني:</strong> <a href="mailto:PurificationSteps@gmail.com">PurificationSteps@gmail.com</a><br>
                <strong><i class="fas fa-map-marker-alt"></i> العنوان:</strong> المملكة العربية السعودية الرياض حي اليرموك شارع المليسان
            </p>
        </div>
      </div>
      <div class="row mt-4">
    <div class="col-12">
        <h3>موقعنا</h3>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4314.580179939149!2d46.776205009304!3d24.801146988267536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1739481613132!5m2!1sen!2seg" 
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
        </iframe>
    </div>
</div>
    </div>
  `;
}
