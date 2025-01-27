import { loadCSS, unloadCSS } from "../utils/cssloader.js";

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
                <div class="card">
                  <img
                    src="./assets/images/1.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
              <div class="row">
                <div class="card" >
                    <img
                      src="./assets/images/2.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
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
      <div class="row slide-section">
  <!-- Column 1 -->
  <div class="col-12 col-md-4">
    <div class="card">
      <div class="card">
        <img src="./assets/images/1.jpg" alt="">
      </div>
    </div>
  </div>

  <!-- Column 2 -->
  <div class="col-12 col-md-4">
    <div class="card">
      <img src="./assets/images/2.jpg" alt="">
    </div>
  </div>

  <!-- Column 3 -->
  <div class="col-12 col-md-4">
    <div class="card">
      <img src="./assets/images/3.jpg" alt="">
    </div>
  </div>
</div>`;
}
