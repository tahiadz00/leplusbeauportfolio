// =========================================================================
// ÉTAPE 1 : CIBLAGE DES ÉLÉMENTS DU MENU BURGER
// =========================================================================

// On récupère le bouton burger grâce à son identifiant unique
const burgerBtn = document.getElementById('burgerBtn');

// On récupère la liste des liens du menu de navigation
const navMenu = document.getElementById('navMenu');

// On récupère tous les liens à l'intérieur du menu pour détecter le clic
const navLinks = document.querySelectorAll('.nav-link');

// =========================================================================
// ÉTAPE 2 : LOGIQUE D'OUVERTURE ET FERMETURE DU MENU BURGER
// =========================================================================

// On écoute le clic sur le bouton burger
burgerBtn.addEventListener('click', () => {
    // La méthode .toggle active la classe 'open' si elle n'est pas là, ou l'enlève si elle y est déjà.
    // Cela permet d'ouvrir et de fermer le rideau du menu mobile à chaque pression.
    navMenu.classList.toggle('open');
});

// =========================================================================
// ÉTAPE 3 : FERMETURE AUTOMATIQUE LORS DU CLIC SUR UN LIEN
// =========================================================================

// On parcourt chaque lien du menu avec une boucle forEach
navLinks.forEach(link => {
    // Dès qu'un utilisateur clique sur l'une des rubriques (ex: "Projet SAV")
    link.addEventListener('click', () => {
        // On supprime immédiatement la classe 'open' pour replier le menu automatiquement
        navMenu.classList.remove('open');
    });
});