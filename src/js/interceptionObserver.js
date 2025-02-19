document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".animate-me");
    const elementsToAnimate02 = document.querySelectorAll(".animate-me02");
    const elementsToAnimate03 = document.querySelectorAll(".animate-me03");


    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                if (entry.target.classList.contains("animate-me")) {
                    entry.target.classList.add("animate-slideLeft");
                } else if (entry.target.classList.contains("animate-me02")) {
                    entry.target.classList.add("animate-slideRight");
                } else if (entry.target.classList.contains("animate-me03")) {
                    entry.target.classList.add("animate-zoomIn");
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    elementsToAnimate.forEach((element) => observer.observe(element));
    elementsToAnimate02.forEach((element) => observer.observe(element));
    elementsToAnimate03.forEach((element) => observer.observe(element));
});
