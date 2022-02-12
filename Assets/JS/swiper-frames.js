fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const photos = data.slice(10, 20);
    swiperTemplate(photos, "js-frames-slider","Nye Rammer");
  })
  .then(()=> {
    swiperInit("js-frames-slider");
  })

