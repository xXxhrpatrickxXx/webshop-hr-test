fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const photos = data.slice(20, 30);
    swiperTemplate(photos, "js-guests-slider","Nye Gæster");
  })
  .then(()=> {
    swiperInit("js-guests-slider");
  })

