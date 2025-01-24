const appContent = document.getElementById("main-content");

const routes = {
  "#/": renderLogin,
  404: () => (appContent.innerHTML = `<h2>404 - page not found</h2>`),
};

function loadRoute(hash) {
  renderHeader();
  renderSidebar(appContent); // Pass appContent to sidebar
  renderFooter();
  appContent.innerHTML = "";

  const path = hash || window.location.hash || "#/";

  const route = routes[path] || routes[404];
  route(appContent);
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    window.location.hash = href; // Use the correct hash value
    loadRoute(href);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  loadRoute(window.location.hash);
});

window.addEventListener("hashchange", () => {
  loadRoute(window.location.hash);
});
