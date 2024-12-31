document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    // Scroll Animation Trigger
    window.addEventListener("scroll", () => {
      sections.forEach(section => {
        if (isElementInView(section)) {
          section.style.animationPlayState = "running";
        }
      });
    });
  
    // Function to check if the section is in view
    function isElementInView(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.top <= window.innerHeight;
    }
  });
  