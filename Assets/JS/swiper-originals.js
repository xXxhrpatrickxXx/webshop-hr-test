fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const photos = data.slice(0, 10);
    swiperTemplate(photos, "js-original-slider","Nye Originaler");
  })
  .then(()=> {
    swiperInit("js-original-slider");
  })

