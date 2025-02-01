import { loadCSS, unloadCSS } from "../utils/cssloader.js";
import { renderCard } from "../components/renderCard.js";
export function renderServices(mainContent) {
  unloadCSS("./assets/styles/home.css");
  loadCSS("./assets/styles/services.css");

  mainContent.innerHTML = ` <div class="services-container p-5">
        <div class="container">
        <div class="row" >
          <!-- Column 1 -->
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div class="column">
              <div class="box3">خدماتنا</div>
            </div>
          </div>
          <!-- Column 2 -->
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div class="column">
             <div class="logo">
                <img src="./assets/images/logo.svg" alt="شركة خطوات التنقية التجارية - فلاتر المياه">
             </div>
            </div>
          </div>
        </div>
      </div>
      <p>نحن في خطوات التنقيه التجارية نقدم خدمة صيانة متكاملة لفلاتر المياه المنزلية ومحطات التحلية لضمان عملها بكفاءة عالية وتقديم مياه نقية وصحية. تعتمد صحتك وجودة حياتك على المياه التي تستخدمها، ولذلك نحرص على تقديم أفضل خدمات الصيانة لضمان أداء ممتاز لنظام المياه في منزلك أو منشأتك.</p>
       <p>نحن نقدم خدمات صيانة شاملة لفلاتر المياه التي تضمن لك مياه نقية وصحية طوال الوقت. تشمل خدمات الصيانة:
        تنظيف الفلاتر: إزالة الرواسب والشوائب التي قد تتراكم مع مرور الوقت.
        استبدال الفلاتر: تغيير الفلاتر القديمة والتالفة لضمان استمرار كفاءة النظام.
        فحص الأنابيب والوصلات: التأكد من عدم وجود تسريبات قد تؤثر على جودة المياه.
        ضبط الضغط: التأكد من أن الضغط داخل الفلتر في مستوياته المثلى لضمان تدفق مياه سليم</p>
   <p>نقدم أيضًا خدمات صيانة متخصصة لمحطات التحلية لضمان استمرارية عملها بكفاءة عالية وتنقية المياه بنجاح. تشمل خدماتنا:
    فحص وتنظيف الأغشية (Membranes): تنظيف الأغشيةالمستخدمة في التحلية لضمان عدم تراكم الملوثات.
    صيانة الخزانات: تنظيف الخزانات من أي ترسبات أو بكتيريا قد تؤثر على المياه.
    فحص نظام الأشعة فوق البنفسجية (UV): التأكد من عمل نظام UV بشكل فعال للقضاءعلى أي بكتيريا أو فيروسات.
    فحص مضخات المياه: التأكد من عمل المضخات بشكل سليم لتوفير تدفق مياه مستمر.
    </p>
        <div id="services-container" class="p-5 text-center" ></div>

 `;
  const servicesContainer = document.getElementById("services-container");
  servicesContainer.appendChild(
    renderCard(
      "./assets/images/1.jpg",
      "بيع فلاتر المياه",
      "خدمة بيع أفضل وأجود انواع فلاتر المياه"
    )
  );
  servicesContainer.appendChild(
    renderCard(
      "./assets/images/2.jpg",
      "محطات تحلية المياه",
      "خدمة تركيب وصيانة محطات تحلية المياه"
    )
  );
  servicesContainer.appendChild(
    renderCard(
      "./assets/images/3.jpg",
      "صيانة فلاتر المياه",
      "خدمة تركيب وصيانة فلاتر مياه بأعلي جودة"
    )
  );

  document
    .getElementById("imag1")
    .appendChild(renderCard("./assets/images/1.jpg", "", ""));

  document
    .getElementById("imag2")
    .appendChild(renderCard("./assets/images/2.jpg", "", ""));
}
