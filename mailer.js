// Kontaktformular senden
function sendMail(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mqakobra", {
        method: "POST",
        body: data, // Hier war dein Fehler: Du hast FormData doppelt verwendet!
        headers: {
            "Accept": "application/json",
        },
    })
        .then(response => {
            if (response.ok) {
                window.location.href = "./send_mail.html"; // Erfolgsseite aufrufen
            } else {
                return response.json().then(err => Promise.reject(err));
            }
        })
        .catch(error => {
            console.error("Fehler beim Senden des Formulars:", error);
        });
}
