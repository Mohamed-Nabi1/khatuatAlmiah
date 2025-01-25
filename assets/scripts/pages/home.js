import { loadCSS } from "../utils/cssloader.js";

export function renderHome(mainContent) {
  loadCSS("./assets/styles/home.css");
  mainContent.innerHTML = `<div class="container w-100 h-50 bg-black">

    </div>`;
}
