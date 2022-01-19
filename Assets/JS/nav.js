let navUlElement = document.querySelector(".c-nav__ul");

const navHTML = [
    {
        name : "Home",
        href : "/home/"
    },

    {
        name : "Originals",
        href : "/originals/"
    },

    {
        name : "Guests",
        href : "/guests/"
    },

    {
        name : "Frames",
        href : "/frames/"
    },

    {
        name : "Contact",
        href : "/contact/"
    }
]

navHTML.forEach(function(item) {
    let li = document.createElement("li");
    li.classList.add("c-nav__li");

    let anchor = document.createElement("a");
    anchor.classList.add("c-nav__a");
    anchor.href=item.href;
    anchor.innerHTML=item.name;

    li.appendChild(anchor);
    navUlElement.appendChild(li);
});