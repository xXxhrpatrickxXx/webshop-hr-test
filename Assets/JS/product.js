fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const photos = data.slice(80, 100);
    buildProducts(photos);
  })

function buildProducts(photos){
    let productAnchorElement = document.querySelector(".js-product-anchor");
    photos.forEach(photo => {
    const cProduct = document.createElement("div");
    const cFigure = document.createElement("figure");
    const cImg = document.createElement("img");
    const cFigcaption = document.createElement("figcaption");
    const cSection = document.createElement("section");


    cProduct.className = "c-product js-product";
    cFigure.className = "c-product__figure";
    cImg.className = "c-product__image";
    cFigcaption.className = "c-product__figcaption";
    cSection.className = "c-product__content";


    cImg.src = photo.url; 
    cFigcaption.textContent = photo.title;


    productAnchorElement.appendChild(cProduct);
    cProduct.appendChild(cFigure);
    cFigure.appendChild(cImg);
    cFigure.appendChild(cFigcaption);
    cProduct.appendChild(cSection);

    addModalEvent(cProduct);
});
}


