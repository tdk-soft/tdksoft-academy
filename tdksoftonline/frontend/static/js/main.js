document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        full_name: document.getElementById('full_name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    const res = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    const result = await res.json();
    document.getElementById('response').innerText = result.detail;
});

document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-btn');

    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("🚀 Un parent a cliqué sur le bouton de réservation !");
            // Ici, tu pourras ajouter un tag Google Analytics ou Facebook Pixel plus tard
        });
    });
});
