export function renderHeader() {
  const header = document.getElementById("header");
  header.innerHTML = `
  <nav class="navbar px-5 navbar-expand-lg bg-body-tertiary navbar-light shadow fixed-top">
        <div class="container-fluid">
            <!-- Logo (aligned to the far left) -->
            <img src="https://png.pngtree.com/template/20190316/ourmid/pngtree-water-logo-image_79160.jpg"
                class="img-fluid" alt="logo image" width="30px" height="30px">
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
                        <a class="nav-link active" aria-current="page" href="#">الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">حول</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">اتصل بنا</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  `;
}
