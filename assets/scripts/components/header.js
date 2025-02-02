import { loadCSS } from "../utils/cssloader.js";

export function renderHeader() {
  loadCSS("./assets/styles/header.css");

  document.getElementById("header").innerHTML = `
  <nav class="navbar px-0 navbar-expand-lg bg-body-tertiary navbar-light shadow fixed-top">
        <div class="container-fluid">
            <img src="assets/images/logo.svg"
                class="img-fluid" alt="شركة خطوات التنقية التجارية - فلاتر المياه" width="60px" height="60px">
            <a class="navbar-brand" href="/" data-link>خطوات التنقية التجارية</a>  

            <button class="navbar-toggler text-center" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="تبديل التنقل">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end text-center" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" href="/" data-link>الرئيسية</a></li>
                    <li class="nav-item"><a class="nav-link" href="/aboutus" data-link>حول</a></li>
                    <li class="nav-item"><a class="nav-link" href="/services" data-link>خدماتنا</a></li>
                    <li class="nav-item"><a class="nav-link" href="/callus" data-link>اتصل بنا</a></li>
                </ul>
            </div>
        </div>
    </nav>
  `;
}

// Global event listener for all navigation clicks
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");

    if (window.location.pathname !== href) {
      history.pushState(null, "", href);
      window.dispatchEvent(new Event("popstate")); // Triggers route update
    }
  }
});
