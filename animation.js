// Hero-Titel-Animation
const titleElement = document.getElementById("hero-title");
const titleText = "Willkommen bei Ku-Le";
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

// Contakt
function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/mqakobra", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./send_mail.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

// Check if the user has previously accepted/declined cookies
document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');
  const declineButton = document.getElementById('decline-cookies');

  // Überprüfen, ob der Benutzer bereits eine Wahl getroffen hat
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.remove('hidden'); // Cookie-Banner anzeigen
  } else {
    cookieBanner.classList.add('hidden'); // Cookie-Banner ausblenden
  }

  // Benutzer akzeptiert Cookies
  acceptButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('hidden'); // Cookie-Banner ausblenden
  });

  // Benutzer lehnt Cookies ab
  declineButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'false');
    cookieBanner.classList.add('hidden'); // Cookie-Banner ausblenden
  });
});
