import { renderFooter } from "./components/footer.js";
import { renderHome } from "./pages/home.js";
import { renderHeader } from "./components/header.js";
import { renderAboutUs } from "./pages/aboutus.js";
import { renderServices } from "./pages/services.js";
import { renderCallUs } from "./pages/callus.js";

const appContent = document.getElementById("main-content");

// Define routes
const routes = {
  "/": renderHome,
  "/aboutus": renderAboutUs,
  "/services": renderServices,
  "/callus": renderCallUs,
  404: () => (appContent.innerHTML = `<h2>404 - page not found</h2>`),
};

function loadRoute(pathname) {
  renderHeader();
  renderFooter();

  // Ensure valid routing
  const route = routes[pathname] || routes[404];
  route(appContent);
}

// Handle navigation clicks
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");

    if (window.location.pathname !== href) {
      history.pushState(null, "", href);
      loadRoute(href);
    }
  }
});

// Handle page load and browser navigation
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/index.html") {
    history.replaceState(null, "", "/"); // Normalize root path
  }
  loadRoute(window.location.pathname);
});

window.addEventListener("popstate", () => {
  loadRoute(window.location.pathname);
});
