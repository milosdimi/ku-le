document.addEventListener("DOMContentLoaded", function () {
  // Hero-Titel-Animation
  const titleElement = document.getElementById("hero-title");
  const titleText = "Auto verkaufen leicht gemacht!";
  let index = 0;

  function typeWriter() {
    if (index < titleText.length) {
      titleElement.innerHTML += titleText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  window.addEventListener("load", typeWriter);

  // Scroll-to-Top Button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
      scrollTopBtn.classList.remove("hide");
    } else {
      scrollTopBtn.classList.add("hide");
      scrollTopBtn.classList.remove("show");
    }
  });
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Cookie-Banner
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "block";
  } else {
    cookieBanner.style.display = "none";
  }
  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
  declineButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "false");
    cookieBanner.style.display = "none";
  });

  // Scroll-Animation für #about
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  }

  const aboutSection = document.querySelector("#about");
  const textColumn = aboutSection.querySelector(".col-lg-6:first-child");
  const imageColumn = aboutSection.querySelector(".col-lg-6:last-child");
  const featureItems = aboutSection.querySelectorAll(".feature-item");
  let hasAnimated = false;

  window.addEventListener("scroll", function () {
    if (isInViewport(aboutSection) && !hasAnimated) {
      console.log("Animation triggered"); // Debugging
      textColumn.classList.add("visible");
      imageColumn.classList.add("visible");
      featureItems.forEach((item, index) => {
        setTimeout(() => item.classList.add("visible"), index * 150);
      });
      hasAnimated = true;
    }
  });
});