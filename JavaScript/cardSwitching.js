let currentIndex = 0;

const cards = [
    {
        title: "What We Do",
        points: [
            "Cost-effectiveness",
            "Increase the rate of productivity",
            "Highly scalable solutions with business growth",
            "Vision and mission accomplishment with tech solutions"
        ]
    },
    {
        title: "Benefits You Get",
        points: [
            "Study the pain points in your business",
            "Data-driven analytics",
            "Design the solutions",
            "Transform the solutions into reality",
            "Sit back and monitor the results"
        ]
    }
]

const cardTitle = document.querySelector(".about-card-title");
const cardList = document.querySelector(".about-points");
const dotContainer = document.querySelector(".dots-container");
const dots = document.querySelectorAll(".dots-container span");
const aboutCard = document.querySelector(".about-card");
const btnNext = document.querySelector(".btnNext");

const blankcard = document.querySelector(".blank-card");

if (dots.length > 0) { // always true, and ensure dots not empty
    dots[0].classList.add("active");
}

function switchCard(index) {
    // Update card    
    setTimeout(() => {
        cardTitle.textContent = cards[index].title;
        cardList.innerHTML = cards[index].points.map(point => `<li>${point}</li>`).join("");
        
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    },350);
    
    currentIndex = index;
}

// mouse enter and leave on next button 
btnNext.addEventListener("mouseover", () => {
    if (!isAnimating) {
        blankcard.style.transform = "rotate(5deg)";
    }
})

btnNext.addEventListener("mouseout", () => {
    if (!isAnimating) {
        blankcard.style.transform = "rotate(0deg)";
    }
})

let isAnimating = false; 

// click next button
btnNext.addEventListener("click", () => {
    if (isAnimating) {
        return;
    }

    isAnimating = true;

    cardTitle.textContent = "";
    cardList.innerHTML = "";

    blankcard.style.transform = "rotate(5deg) translatex(120%)";
    dotContainer.style.opacity = "0";

    setTimeout(() => {
        blankcard.style.transform = "rotate(0deg) translatex(0%)";
        dotContainer.style.opacity = "1";
        isAnimating = false;
    },300)


    let nextIndex = (currentIndex + 1) % dots.length;
    switchCard(nextIndex);
});
