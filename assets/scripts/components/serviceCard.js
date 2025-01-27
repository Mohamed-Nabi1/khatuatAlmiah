export function renderServiceCard(image, title, desc) {
  const card = document.createElement("div");

  card.className = "col text-center";

  card.innerHTML = `
        <img class="services rounded-circle pb-4" src=${image}
            alt="image" width="300px" height="300px">
        <div class="h3 pb-4">${title}</div>
        <div class="h5 pb-4">${desc}</div>
            <a href="https://wa.me/+966502442796" class="btn btn-primary rounded-1 w-auto w w-sm-25"   target="_blank">أطلبها الان</a>
    `;
  return card;
}
