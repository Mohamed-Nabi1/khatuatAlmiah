import { loadCSS, unloadCSS } from "../utils/cssloader.js";

export function renderServices(mainContent) {
  unloadCSS("./assets/styles/home.css");
  loadCSS("./assets/styles/services.css");
  // mainContent.innerHTML=`Services`;
  mainContent.innerHTML = ` <div class="services-container">
      <div class="box">خدماتنا</div>
      <div class="box2">خدماتنا</div>
      <div class="container">
        <div class="row" >
          <!-- Column 1 -->
          <div class="col-12 col-md-6">
            <div class="column text-center">
              <div class="row">
                <div class="card" style="width: 18rem">
                  <img
                    src="./assets/images/image.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
              <div class="row">
                <div class="card" style="width: 18rem">
                    <img
                      src="./assets/images/image.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
              </div>
            </div>
          </div>
          <!-- Column 2 -->
          <div class="col-12 col-md-6">
            <div class="column">
             <div class="logo">
                <img src="./assets/images/image.png" alt="">
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}
