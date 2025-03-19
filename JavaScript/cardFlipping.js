document.querySelectorAll(".step-card > div").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transition = "transform 0.5s ease";
        card.style.transform = "rotateY(180deg)";
    });

    card.addEventListener("mouseleave", () => {
        setTimeout(() => {
            card.style.transform = "rotateY(0deg)";
        }, 300);
    });
});
