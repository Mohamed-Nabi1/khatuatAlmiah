export function renderServiceCard(image, title, desc) {
  const card = document.createElement("div");

  card.className = "col text-center";

  card.innerHTML = `
        <img class="img-fluid pb-4" src=${image}
            alt="image" width="300px" height="300px">
        <div class="h3 pb-4">${title}</div>
        <div class="h5 pb-4">${desc}</div>
        <button type="button" class="btn btn-primary rounded-1 w-auto w-sm-25">اطلبها الان</button>
    `;
  return card;
}
