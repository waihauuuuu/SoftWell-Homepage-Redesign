const Abtract = document.querySelector(".abstract");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    let trigger = window.innerHeight * 0.1;

    if (scrollPos > trigger) {
        gsap.to(Abtract, {
            scale: 6,
            rotate: -90,
            duration: 0.1,
            ease: "power2.out"
        });
    } else {
        gsap.to(Abtract, {
            scale: 1,
            rotate: 0,
            duration: 0.1,
            ease: "power2.out"
        });
    }
})