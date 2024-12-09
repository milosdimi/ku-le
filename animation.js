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
