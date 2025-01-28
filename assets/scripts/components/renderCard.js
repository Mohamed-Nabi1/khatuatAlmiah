export function renderCard(image,title,desc) {
    const card = document.createElement("div");
  
    card.className = "col text-center";
  
    card.innerHTML = `
          <img class="services rounded-circle pb-4" src=${image}
              alt="image" style="width: 230px; height: 230px;">
               <div class="h3 pb-4">${title}</div>
               <div class="h5 pb-4">${desc}</div>
      `;
    return card;
  }