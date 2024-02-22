
const fetchImages = () => {
  const MAX_NUMBER = 5000;
  const RANDOM_START = Math.floor(Math.random() * MAX_NUMBER);
  const RANDOM_RANGE = 20;
  const RANDOM_END = RANDOM_START + RANDOM_RANGE;

  fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const photos = data.slice(RANDOM_START, RANDOM_END);
    console.log(photos);
    buildProducts(photos);
  })

  return photos;
}

export default fetchImages;