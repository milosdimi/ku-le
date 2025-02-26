// Hero-Titel-Animation
const titleElement = document.getElementById("hero-title");
const titleText = "Willkommen bei Ku-Le Cars";
let index = 0;

function typeWriter() {
  if (index < titleText.length) {
    titleElement.innerHTML += titleText.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Geschwindigkeit der Textanzeige
  }
}

// Starte die Animation beim Laden der Seite
window.addEventListener("load", typeWriter);



document.addEventListener("DOMContentLoaded", function () {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  // Überprüfen, ob der Benutzer bereits eine Entscheidung getroffen hat
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "block"; // Cookie-Banner anzeigen
  } else {
    cookieBanner.style.display = "none"; // Cookie-Banner ausblenden
  }

  // Benutzer akzeptiert Cookies
  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none"; // Cookie-Banner ausblenden
  });

  // Benutzer lehnt Cookies ab
  declineButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "false");
    cookieBanner.style.display = "none"; // Cookie-Banner ausblenden
  });
});


