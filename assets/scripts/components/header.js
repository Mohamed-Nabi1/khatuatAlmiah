import { loadCSS } from "../utils/cssloader.js";

export function renderHeader() {
  loadCSS("./assets/styles/header.css");
  const header = document.getElementById("header");
  header.innerHTML = `
  <nav class="navbar px-5 navbar-expand-lg bg-body-tertiary navbar-light shadow fixed-top ">
        <div class="container-fluid">
            <!-- Logo (aligned to the far left) -->
            <img src="assets/images/image.png"
                class="img-fluid" alt="logo image" width="40px" height="40px">
            <a class="navbar-brand ps-2" href="#">خطوات المياه</a>

            <!-- Toggler for smaller screens -->
            <button class="navbar-toggler text-center" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="تبديل التنقل">
                <span class="navbar-toggler-icon textce"></span>
            </button>

            <!-- Navigation Links (aligned to the right) -->
            <div class="collapse navbar-collapse justify-content-end text-center" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <a id="home-btn" class="nav-link active" aria-current="page" href="#">الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <a id="aboutus-btn" class="nav-link" href="#">حول</a>
                    </li>
                    <li class="nav-item">
                        <a id="services-btn" class="nav-link" href="#">خدماتنا</a>
                    </li>
                    <li class="nav-item">
                        <a id="callus-btn" class="nav-link" href="#">اتصل بنا</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  `;

  document.getElementById("home-btn").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "";
  });
  document.getElementById("aboutus-btn").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "/aboutus";
  });
  document.getElementById("services-btn").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "/services";
  });
  document.getElementById("callus-btn").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "/callus";
  });
}
