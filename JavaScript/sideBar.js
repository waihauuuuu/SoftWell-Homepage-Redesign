document.addEventListener("DOMContentLoaded", () => {
    // after content loaded, prevent activated before loaded
    const btnMenu = document.querySelector(".btnMore");
    const btnServices = document.querySelector(".s-services")
    const btnBack = document.querySelector(".btnBack");
    const ServicesbtnBack = document.querySelector(".services-btnBack");
    const sidebar = document.querySelector(".sidebar");
    const servicesbar = document.querySelector(".servicesbar");
    const body = document.body;

    btnMenu.addEventListener("click", () => {
        sidebar.style.transform = "translateX(0)";
        body.classList.add("no-scroll");
    });

    btnBack.addEventListener("click", () => {
        sidebar.style.transform = "translateX(-100%)";
        body.classList.remove("no-scroll");
    });

    btnServices.addEventListener("click", () => {
        servicesbar.style.transform = "translateX(0)";
        sidebar.style.transform = "translateX(-100%)";
    });

    ServicesbtnBack.addEventListener("click", () => {
        servicesbar.style.transform = "translateX(100%)";
        sidebar.style.transform = "translateX(0)";
    });
});