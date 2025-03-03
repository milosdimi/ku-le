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

  // Funktion für Viewport-Check
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  }

  // Scroll-Animation für #about
  const aboutSection = document.querySelector("#about");
  const textColumn = aboutSection.querySelector(".col-lg-6:first-child");
  const imageColumn = aboutSection.querySelector(".col-lg-6:last-child");
  const featureItems = aboutSection.querySelectorAll(".feature-item");
  let hasAnimated = false;

  // Scroll-Animation für #cta
  const ctaSection = document.querySelector("#cta");
  const ctaButtons = ctaSection.querySelectorAll(".social-btn");
  let ctaHasAnimated = false;

  window.addEventListener("scroll", function () {
    // #about Animation
    if (isInViewport(aboutSection) && !hasAnimated) {
      console.log("About Animation triggered");
      textColumn.classList.add("visible");
      imageColumn.classList.add("visible");
      featureItems.forEach((item, index) => {
        setTimeout(() => item.classList.add("visible"), index * 150);
      });
      hasAnimated = true;
    }

    // #cta Animation
    if (isInViewport(ctaSection) && !ctaHasAnimated) {
      console.log("CTA Animation triggered");
      ctaSection.classList.add("visible");
      ctaButtons.forEach((btn, index) => {
        setTimeout(() => btn.classList.add("visible"), index * 150);
      });
      ctaHasAnimated = true;
    }

    // Parallax-Effekt für #cta
    const ctaImg = document.querySelector(".cta-bg-img");
    if (ctaImg) { // Nur ausführen, wenn das Bild existiert
      const ctaSectionTop = ctaSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (ctaSectionTop < windowHeight && ctaSectionTop > -ctaSection.offsetHeight) {
        const scrollPosition = (ctaSectionTop - windowHeight) * 0.2;
        ctaImg.style.transform = `translateY(${scrollPosition}px)`;
      }
    }
  });
});