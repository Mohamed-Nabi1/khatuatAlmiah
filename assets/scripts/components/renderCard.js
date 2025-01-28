export function renderCard(image) {
    const card = document.createElement("div");
  
    card.className = "col text-center";
  
    card.innerHTML = `
          <img class="services rounded-circle pb-4" src=${image}
              alt="image" style="width: 230px; height: 230px;">
      `;
    return card;
  }