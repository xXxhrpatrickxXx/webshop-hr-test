let requestParams = {
    query: window.location.search.split("?q=").pop().split("&").shift(),
    category: window.location.search.split("&cat=").pop().split("&").shift(),
}

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const photos = data.slice(50, 70);
    buildProducts(photos);
  })