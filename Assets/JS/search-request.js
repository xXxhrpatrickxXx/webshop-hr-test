let requestParams = {
    query: window.location.search.split("?q=").pop().split("&").shift(),
    category: window.location.search.split("&cat=").pop().split("&").shift(),
}

console.log(requestParams);