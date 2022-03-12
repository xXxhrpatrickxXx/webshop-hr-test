let formSearchElem = document.querySelector(".c-header__form");
formSearchElem.addEventListener("submit", function(event){
    event.preventDefault();
    let queryParams = {
        query: formSearchElem.query.value,
        category: "all", // This value can be used in the future to determine which category products should be fetched from.
    }
    window.location.assign(`/search/?q=${queryParams.query}&cat=${queryParams.category}`);
});