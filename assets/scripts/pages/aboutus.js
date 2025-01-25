import { loadCSS, unloadCSS } from "../utils/cssloader.js";

export function renderAboutUs(mainContent) {
  unloadCSS("./assets/styles/home.css");
  loadCSS("./assets/styles/aboutus.css");
  mainContent.innerHTML = `
   <div class="container text-center">
        <!-- Logo Section -->
        <img src="./assets/images/image.png" alt="logo image" class="img-fluid w-50 p-5">


        <!-- Content Section -->
        <div class="row content-section w-100 p-5">
            <div class="h3">من نحن</div>

            <span>
                <br>
                "شركة قطرات المياه" شركة متخصصة في تقديم حلول شاملة للمياه في المملكة العربية السعودية. نحن نهتم
                بتلبية احتياجات عملائنا من خلال تقديم خدمات تركيب وصيانة فلاتر المياه، وتركيب وصيانة محطات تحلية المياه،
                وخدمات تحليل وفحص المياه، وتركيب أجهزة تبريد الخزانات، وتنظيف الخزانات.
                <br><br>
                تتميز شركتنا بتوفير خدمات عالية الجودة والمهنية لجميع عملائنا. نحن نعمل بجد لتحقيق رضا العملاء من خلال
                تقديم أفضل الخدمات والحلول التي تلبي احتياجاتهم.
                <br><br>
                فريق عملنا مؤهل ومدرب على أعلى مستوى لتقديم الخدمات بشكل احترافي ومهني. نحن نستخدم أحدث التقنيات
                والأدوات لتلبية احتياجات عملائنا بكفاءة عالية وبأفضل الطرق الممكنة.
                <br><br>
                تتوفر خدماتنا في جميع أنحاء المملكة العربية السعودية، ونحن نعمل بجد لتقديم الخدمات في الوقت المناسب
                وبأسعار تنافسية.
                <br><br>
                إذا كنت تبحث عن شركة تقدم خدمات تركيب وصيانة نظام المياه الخاص لك بشكل شامل، فلا تتردد في الاتصال بنا
                اليوم وسنكون سعداء بتلبية احتياجاتك.
            </span>
        </div>
    </div>
  `;
}
