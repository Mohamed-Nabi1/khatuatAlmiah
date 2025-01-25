import { renderFooter } from "./components/footer.js";
import { renderHome } from "./pages/home.js";
import { renderHeader } from "./components/header.js";
import { renderAboutUs } from "./pages/aboutus.js";
import { renderServices } from "./pages/services.js";
import { renderCallUs } from "./pages/callus.js";

const appContent = document.getElementById("main-content");
const routes = {
  "#/": renderHome,
  "#/aboutus": renderAboutUs,
  "#/services": renderServices,
  "#/callus": renderCallUs,
  404: () => (appContent.innerHTML = `<h2>404 - page not found</h2>`),
};

function loadRoute(hash) {
  renderHeader();
  renderFooter();

  const path = hash || "#/"; // Always default to '#/' if no hash
  const route = routes[path] || routes[404];
  route(appContent);
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    window.location.hash = href;
    loadRoute(href);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Check if the current location hash is empty or not set, and force load renderHome
  if (!window.location.hash) {
    window.location.hash = "#/"; // Set to the homepage route explicitly
  }
  loadRoute(window.location.hash); // Load the initial route based on hash
});

window.addEventListener("hashchange", () => {
  loadRoute(window.location.hash);
});
