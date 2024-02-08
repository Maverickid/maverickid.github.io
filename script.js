// JavaScript code to handle the toggling of active class
document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll(".ingredient-container");
    const nextBtn = document.querySelector(".next-btn");
    const backBtn = document.querySelector(".prev-btn");
    let currentIndex = 0;

    function showContainer(index) {
        containers.forEach((container, idx) => {
            if (idx === index) {
                container.classList.add("active");
            } else {
                container.classList.remove("active");
            }
        });
        // Update button states
        if (index === 0) {
            backBtn.classList.add("inactive");
        } else {
            backBtn.classList.remove("inactive");
        }

        if (index === containers.length - 1) {
            nextBtn.classList.add("inactive");
        } else {
            nextBtn.classList.remove("inactive");
        }
    }

    function nextContainer() {
        currentIndex = (currentIndex + 1) % containers.length;
        showContainer(currentIndex);
    }

    function prevContainer() {
        currentIndex = (currentIndex - 1 + containers.length) % containers.length;
        showContainer(currentIndex);
    }

    // Event listeners for next and back buttons
    document.querySelector(".next-btn").addEventListener("click", nextContainer);
    document.querySelector(".prev-btn").addEventListener("click", prevContainer);

    // Show the first container by default
    showContainer(currentIndex);
});
    