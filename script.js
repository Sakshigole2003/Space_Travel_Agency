document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".transparent-footer");
  
    // Intersection Observer to show the footer when scrolling down
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("visible");
        } else {
          footer.classList.remove("visible");
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(footer);
  });
  
