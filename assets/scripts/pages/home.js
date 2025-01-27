import { renderServiceCard } from "../components/serviceCard.js";
import { loadCSS } from "../utils/cssloader.js";

export function renderHome(mainContent) {
  loadCSS("./assets/styles/home.css");
  mainContent.innerHTML = `
  <div class="position-relative">
        <!-- Background Image -->
        <img class="bg-image img-fluid"
            src="https://static.vecteezy.com/system/resources/previews/039/889/434/non_2x/ai-generated-kid-drinking-from-a-glass-of-water-free-photo.jpeg"
            alt="image">

        <!-- Full-Width Text Section -->
        <div class="text-overlay text-center">
            <h3>تنقية المياه لحياة افضل</h3>
        </div>
    </div>

    <!-- Button Container with Flexbox -->
    <div class="button-container d-flex flex-column align-items-center">
    <a href="tel:+966502442796" class="btn btn-primary rounded-1 w-auto w w-sm-25"   target="_blank">اتصل بنا</a>
    <a href="https://wa.me/+966502442796" class="btn btn-primary rounded-1 w-auto w w-sm-25"   target="_blank">تواصل معنا على الواتساب </a>
        
    </div>

    <div class="row expertise mt-3 px-5 py-5">
        <div class="col-12 col-md-6 text-center align-content-center">
            <img class="img-fluid" src="./assets/images/logo.svg" alt="logo image">
        </div>
        <div class="expertise-text col-12 col-md-6 align-content-center">
            <div class="h2 text-center p-2">خبراء معالجة المياه</div>
            <div class="h4 text-center p-2">نعمل علي بيع وتركيب أجهزة تنقية المياه</div>
            <span>
                نحن نقدم حلولا شاملة لتنقية وتحلية المياه بالسهودية بأعلى جودة وافضل سعر، باستخدام أحدث أنواع فلاتر
                المياه عالية الجودة والموثوقية. نقوم أيضا بتوريد وتركيب وصيانة محطات تحلية المياه. نقوم أيضا بتركيب أجهزة تبريد للخزانات لتوفير مياه نظيفة وصحية. نحن نعتمد على فنيين متخصصين
                لتغطية جميع مناطق السعودية. للحصول على مياه نظيفة ونقية، اتصل بنا اليوم واتخذ خطوة نحو الحصول على ماء
                صحي وعالي الجودة.
            </span>
        </div>
    </div>

    <div id="services-container" class="p-5"></div>
  `;

  const servicesContainer = document.getElementById("services-container");
  servicesContainer.appendChild(
    renderServiceCard(
      "./assets/images/1.jpg",
      "بيع فلاتر المياه",
      "خدمة بيع أفضل وأجود انواع فلاتر المياه"
    )
  );
  servicesContainer.appendChild(
    renderServiceCard(
      "./assets/images/2.jpg",
      "محطات تحلية المياه",
      "خدمة تركيب وصيانة محطات تحلية المياه"
    )
  );
  servicesContainer.appendChild(
    renderServiceCard(
      "./assets/images/3.jpg",
      "صيانة فلاتر المياه",
      "خدمة تركيب وصيانة فلاتر مياه بأعلي جودة"
    )
  );

  document.getElementsByClassName("btn btn-primary");
}
