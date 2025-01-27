import { loadCSS, unloadCSS } from "../utils/cssloader.js";
import { renderCard } from "../components/renderCard.js";
export function renderServices(mainContent) {
  unloadCSS("./assets/styles/home.css");
  loadCSS("./assets/styles/services.css");

  mainContent.innerHTML = ` <div class="services-container p-5">
      <div class="box2">خدماتنا</div>
      <div class="container">
        <div class="row" >
          <!-- Column 1 -->
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div class="column">
              <div class="row">
                <div id="imag1"> </div>
              </div>
              <div class="row">
                  <div id="imag2"> </div>
              </div>
            </div>
          </div>
          <!-- Column 2 -->
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div class="column">
             <div class="logo">
                <img src="./assets/images/logo.svg" alt="">
             </div>
            </div>
          </div>
        </div>
      </div>
      <p> 
      تتميز شركة خطوات التنقية التجارية بخدمات متكاملة  لانظمة  مياه من  تركيب
       و صيانة محطات تحلية المياه، تركيب و صيانة فلاتر المياه تحليل 
       وفحص المياه , تركيب اجهزة تبريد الخزانات  حيث تقوم الشركة
       بخدمة تركيب محطات تحلية مياه المنزل والصناعية باستخدام 
      أحدث التقنيات وأفضل الفلاتر لتحسين المياه وإزالة الشوائب
       والملوثات. كما تتضمن الشركة تركيب فلاتر المياه، 
      و صيانة  محطات التحلية، وتنظيف وتطهير
       الخطوط وشبكات المياه قبل التركيب</p>
   <div id="services-container" class="p-5"></div>

 `;
  const servicesContainer = document.getElementById("services-container");
  servicesContainer.appendChild(renderCard("./assets/images/1.jpg"));
  servicesContainer.appendChild(renderCard("./assets/images/2.jpg"));
  servicesContainer.appendChild(renderCard("./assets/images/3.jpg"));

  document
    .getElementById("imag1")
    .appendChild(renderCard("./assets/images/1.jpg"));

    document
    .getElementById("imag2")
    .appendChild(renderCard("./assets/images/2.jpg"));
}
