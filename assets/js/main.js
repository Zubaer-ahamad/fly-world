document.getElementById("home-link").classList.add("active");
document.getElementById("home-link-1").classList.add("active");
const links = document.querySelectorAll(".menu-link");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
    });
});


