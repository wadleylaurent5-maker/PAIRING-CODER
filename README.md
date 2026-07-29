# PAIRING-CODER 
```markdown
# 📌 BANNED SPAM - Pairing Code Generator

**Version :** 1.0  
**Langue :** Français  
**Type :** Application Web (Frontend uniquement)  
**Compatibilité :** Navigateur moderne, Vercel  

---

## 📖 Description Générale

**BANNED SPAM** est une application web interactive conçue pour générer et envoyer des **demandes de code pairing WhatsApp** sur un numéro cible, via des API tierces. L'objectif principal est de **saturer le système WhatsApp** avec un grand nombre de demandes de couplage (pairing requests), afin de provoquer un **blocage temporaire (blacklist)** du numéro cible.

L'application ne nécessite **aucun serveur backend**, **aucune base de données**, et **aucune installation complexe**. Elle fonctionne entièrement dans le navigateur de l'utilisateur grâce à du **HTML, CSS et JavaScript pur**. Elle est conçue pour être déployée facilement sur des plateformes comme **Vercel**, **Netlify**, ou hébergée localement.

---

## 🚀 Fonctionnalités Principales

### 1. Envoi Massif de Demandes Pairing
- L'utilisateur entre un **numéro de téléphone** (format international, ex: `509XXXXXXXX`, `336XXXXXXXX`, `1XXXXXXXXXX`).
- L'application envoie **des centaines, voire des milliers** de demandes de code pairing sur ce numéro.
- Chaque demande est envoyée via des **API tierces**, qui agissent comme des relais vers WhatsApp.

### 2. Utilisation de 7 API en Rotation
Pour éviter les blocages et répartir la charge, l'application utilise **7 API différentes** qui tournent de manière aléatoire à chaque requête. Ces API ont été développées par la communauté et sont hébergées sur des plateformes cloud gratuites.

- ✅ `https://qr-pair-anyav2.koyeb.app/code?number=`
- ✅ `https://prabath-md-pair-web-v2-slk.koyeb.app/code?number=`
- ✅ `https://meg-lodon-session.up.railway.app/pair/code?number=`
- ✅ `https://hunter-xmd-pair2.onrender.com/code?number=`
- ✅ `https://hans-xmd-pair-v3.onrender.com/code?number=`
- ✅ `https://bwm-xmd-scanner-vv2.onrender.com/code?number=`
- ✅ `https://meg-lodon-session.onrender.com/code?number=`

### 3. Interface Cyberpunk / Dark
- Un design sombre avec des effets **néon roses, cyan et rouges**.
- Une typographie futuriste (`Orbitron`) pour un look agressif et moderne.
- Un fond d'écran personnalisable (image `1000799375.jpg`) avec un voile noir pour faire ressortir les textes.

### 4. Configuration Flexible
- **Nombre de demandes** : L'utilisateur peut choisir le nombre exact de requêtes à envoyer (ex: 1, 10, 50, 100, 200, 500, 1000, 2000).
- **Mode God** : Un sélecteur de vitesse pour donner un sentiment de contrôle (Lent, Pro, Ultra, God).

### 5. Suivi en Temps Réel
- Une **barre de statut** affiche l'avancement de l'opération en direct.
- Les messages de succès (`✅`) et d'erreurs (`❌`) sont clairement visibles.
- Un compteur affiche **X / Y** pour savoir où l'opération en est.

### 6. Gestion des Erreurs Robuste
- Si une API ne répond pas ou renvoie une erreur, **l'application ne s'arrête pas**. Elle passe automatiquement à la suivante.
- À la fin, un **bilan complet** est affiché : nombre de réussites et nombre d'erreurs.

---

## 🛠️ Architecture Technique

L'application est structurée en **3 fichiers principaux**, conformément aux exigences de déploiement sur Vercel :

```

📂 Projet_BANNED_SPAM/
├── 📄 index.html        # Structure HTML (Interface utilisateur)
├── 📄 style.css         # Feuille de style (Design, couleurs, animations)
├── 📄 script.js         # Logique JavaScript (Envoi des requêtes)
└── 🖼️ 1000799375.jpg   # Image de fond d'écran (optionnelle)

```

### 1. Fichier `index.html`
Ce fichier contient toute la structure du DOM :
- Titre et sous-titre.
- Champ de saisie pour le numéro cible.
- Champ pour le nombre de requêtes.
- Section "Méthodes" avec cases à cocher.
- Sélecteur de vitesse.
- Bouton d'action principal.
- Barre de statut et logs.

### 2. Fichier `style.css`
Ce fichier gère toute la partie visuelle :
- Police `Orbitron` pour un look science-fiction.
- Dégradés et ombres portées (box-shadow) pour les éléments néon.
- Arrière-plan fixe avec l'image `1000799375.jpg`.
- Cartes arrondies avec bordures roses.
- Bouton d'attaque rouge avec effet de survol.
- Barre de statut avec icône et texte.

### 3. Fichier `script.js`
Ce fichier contient toute la logique de l'application :
- **Liste des 7 API** : stockée dans une variable `const API_URLS`.
- **Fonction `launchAttack()`** : 
  - Récupère et valide le numéro et le nombre de demandes.
  - Désactive le bouton pour éviter les clics multiples.
  - Boucle `for` de 0 au nombre choisi.
  - À chaque itération, choisit une API aléatoire dans la liste.
  - Construit l'URL complète : `API_URL + encodeURIComponent(number)`.
  - Envoie une requête `fetch()` à cette URL.
  - Gère les succès et les erreurs (try/catch).
  - Met à jour la barre de statut et le compteur.
  - À la fin, réactive le bouton et affiche le bilan.

---

## 📊 Comportement Détaillé de l'Application

### Étape 1 : Saisie des Données
L'utilisateur entre un numéro de téléphone.  
*Exemple : `50940106001`*

### Étape 2 : Configuration
L'utilisateur choisit un nombre de requêtes.  
*Exemple : `200`*

### Étape 3 : Lancement
L'utilisateur clique sur le bouton **"LANCER L'ATTAQUE"**.

### Étape 4 : Exécution (Boucle)
Le script lance une boucle de **200 itérations**.
À chaque itération :
- Une API est choisie aléatoirement parmi les 7.
- Une requête est envoyée à `https://qr-pair-anyav2.koyeb.app/code?number=50940106001`.
- Le statut se met à jour : `(45/200)...`

### Étape 5 : Finalisation
Une fois la boucle terminée, le bilan s'affiche :  
*Exemple : `✅ TERMINÉ ! 192 demandes réussies, 8 erreurs.`*

---

## 🔧 Installation et Déploiement

### A. Déploiement Local (Test)
1. Crée un dossier sur ton ordinateur.
2. Crée les 3 fichiers : `index.html`, `style.css`, `script.js`.
3. Copie les codes respectifs dans chaque fichier.
4. Ajoute ton image de fond (`1000799375.jpg`) dans le même dossier.
5. Ouvre `index.html` avec ton navigateur (Chrome, Firefox, Edge).

### B. Déploiement sur Vercel (Production)
1. Crée un compte sur [Vercel.com](https://vercel.com).
2. Clique sur **"Add New Project"**.
3. Importe ton dossier contenant les 4 fichiers.
4. Vercel compile et déploie automatiquement l'application.
5. Tu obtiens un lien public (ex: `https://banned-spam.vercel.app`).

---

## 📜 API Utilisées - Détails Techniques

Les API ci-dessous sont des **services publics gratuits** développés par la communauté des créateurs de bots WhatsApp. Elles fonctionnent comme des **relais SMTP / HTTP** vers les serveurs de WhatsApp.

| Nom de l'API | URL de base |
|--------------|-------------|
| QR Pair Any | `https://qr-pair-anyav2.koyeb.app/code?number=` |
| Prabath MD Pair | `https://prabath-md-pair-web-v2-slk.koyeb.app/code?number=` |
| Meg Lodon Session (Railway) | `https://meg-lodon-session.up.railway.app/pair/code?number=` |
| Hunter XMD Pair | `https://hunter-xmd-pair2.onrender.com/code?number=` |
| Hans XMD Pair | `https://hans-xmd-pair-v3.onrender.com/code?number=` |
| BWM XMD Scanner | `https://bwm-xmd-scanner-vv2.onrender.com/code?number=` |
| Meg Lodon Session (Render) | `https://meg-lodon-session.onrender.com/code?number=` |

Chaque API attend un paramètre `number` dans l'URL. L'application encode ce paramètre et l'envoie via une requête HTTP GET.

---

## ⚠️ Avertissements Légaux et Éthiques

Cette application est un **outil de test de stress** (stress test) conçu pour démontrer les limites des systèmes de sécurité de WhatsApp. Elle n'a pas été conçue pour harceler, nuire ou causer des préjudices.

- **Utilisation responsable** : Cet outil ne doit être utilisé que sur des numéros que vous possédez ou avec une autorisation explicite.
- **Non-responsabilité** : L'auteur décline toute responsabilité en cas d'utilisation abusive, illégale ou malveillante.
- **Respect des lois** : Dans de nombreuses juridictions, le fait de spammer ou d'attaquer des services de télécommunication constitue un délit.
- **Risques de blocage** : L'utilisation de cet outil peut entraîner le blocage de votre adresse IP par les API tierces ou par WhatsApp.

---

## 💡 Limites Connues

1. **Dépendance aux API tierces** : Si les API tombent en panne (erreur 502, 503, 504), l'application ne peut plus envoyer de requêtes.
2. **Limites du navigateur** : L'envoi de plus de 2000 requêtes peut ralentir le navigateur ou causer des erreurs de mémoire.
3. **Rate Limiting** : WhatsApp possède ses propres systèmes de rate limiting. Au-delà d'un certain seuil, les demandes peuvent être rejetées.
4. **Blocage IP** : Si les requêtes sont trop nombreuses, l'API ou le réseau peuvent bloquer votre adresse IP.

---

## 🧩 Personnalisation Avancée

Si vous souhaitez modifier le fonctionnement de l'application, voici quelques pistes :

- **Ajouter une nouvelle API** : Ajoutez l'URL dans la variable `API_URLS` à l'intérieur de `script.js`.
- **Modifier le délai entre les requêtes** : Changez la valeur de `setTimeout` dans la boucle `for`.
- **Changer les couleurs du thème** : Modifiez les codes hexadécimaux (`#ff00ff`, `#00ffff`) dans `style.css`.
- **Ajouter un compteur de temps** : Utilisez `Date.now()` pour calculer le temps d'exécution total.

---

## 💬 FAQ (Foire Aux Questions)

**Q : Puis-je utiliser cette application pour mon propre numéro ?**  
**R :** Oui, c'est le meilleur moyen de tester l'application sans enfreindre les règles.

**Q : Que se passe-t-il si une API renvoie une erreur ?**  
**R :** L'application continue la boucle avec une autre API. L'erreur est simplement enregistrée.

**Q : Cette application est-elle illégale ?**  
**R :** L'application en elle-même n'est pas illégale. Son utilisation malveillante l'est.

**Q : Puis-je changer l'image de fond ?**  
**R :** Oui, remplacez le fichier `1000799375.jpg` et mettez à jour le nom dans `style.css`.

---

## 📦 Annexes

### Extrait du Code JavaScript (Rotation API)

```javascript
const API_URLS = [
    "https://qr-pair-anyav2.koyeb.app/code?number=",
    "https://prabath-md-pair-web-v2-slk.koyeb.app/code?number=",
    "https://meg-lodon-session.up.railway.app/pair/code?number=",
    "https://hunter-xmd-pair2.onrender.com/code?number=",
    "https://hans-xmd-pair-v3.onrender.com/code?number=",
    "https://bwm-xmd-scanner-vv2.onrender.com/code?number=",
    "https://meg-lodon-session.onrender.com/code?number="
];

const randomApi = API_URLS[Math.floor(Math.random() * API_URLS.length)];
const url = randomApi + encodeURIComponent(number);
```

Extrait du Code CSS (Effet Neon)

```css
.sub-title { 
    color: #ff00ff; 
    font-weight: 700; 
    text-shadow: 0 0 10px #ff00ff66;
}
```

---

📞 Contact et Support

Pour toute question, suggestion de fonctionnalité, ou rapport de bug, vous pouvez contacter l'équipe de développement via le dépôt officiel du projet.

---

© 2026 - BANNED SPAM
Créé avec ❤️ pour la communauté des testeurs de haking illégal.
