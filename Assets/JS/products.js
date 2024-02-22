const fetchProducts = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const products = data;
      console.log(products);
      swiperTemplate(products, "js-guests-slider", "Patrick test");
      swiperInit("js-guests-slider");
      //   return products;
    });
};

export default fetchProducts;
