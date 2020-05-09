const scrollToTopButton = document.querySelector("#scroll-to-top");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if(window.pageYOffset > 300) {
        if(!scrollToTopButton.classList.contains("btnEntrance")) {
            scrollToTopButton.classList.remove("btnExit");
            scrollToTopButton.classList.add("btnEntrance");
            scrollToTopButton.style.display = "block";
        }
        
    } else {
        if(scrollToTopButton.classList.contains("btnEntrance")) {
            scrollToTopButton.classList.remove("btnEntrance");
            scrollToTopButton.classList.add("btnExit");
            scrollToTopButton.style.display = "none";
            setTimeout(function() {
                scrollToTopButton.style.display = "none";
            }, 250)
        }
        
    }
}

scrollToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}

// function smoothScrollBackToTop() {
//     const targetPosition = 0;
//     const startPosition = window.pageYOffset;
//     const distance = targetPosition - startPosition;
//     const duration = 750;
//     let start = null;

//     window.requestAnimationFrame(step);

//     function step(timeStamp) {
//         if(!start) {
//             start = timeStamp;
//             const progress = timeStamp - start;
//             window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
//             if(progress < duration) {
//                 window.requestAnimationFrame(step);
//             }
//         }     
//     }
// }  

// function easeInOutCubic(t, b, c, d) {
//     t /= d/2;
//     if(t < 1) return c/2 * t * t * t +b;
//     t -= 2;
//     return c/2 * (t*t*t + 2) + b;

// } 
    