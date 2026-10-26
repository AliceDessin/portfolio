// ==========================================
// 1. VALIDATION DU FORMULAIRE
// ==========================================

const form = document.querySelector(".contact-form");
const nameInput = document.querySelector("#nom-input");
const emailInput = document.querySelector("#email-input");
const message = document.querySelector("#message");

// Messages d'erreur, de succes & message cache

const nameError = document.querySelector(".nom-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");
const formSuccess = document.querySelector(".form-success");
const messageCacher = document.querySelector(".message-cacher");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Cacher le succes, le message cache et TOUTES les erreurs

    formSuccess.classList.add("hidden");
    if (messageCacher) messageCacher.classList.add("hidden");
    if (nameError) nameError.classList.add("hidden");
    if (emailError) emailError.classList.add("hidden");
    if (messageError) messageError.classList.add("hidden");

    let isValid = true;

    // Si le nom est vide
    if (nameInput.value.trim() == "") {
        if (nameError) nameError.classList.remove("hidden");
        isValid = false;
    }

    // Si le nom est "Bob"
    if (nameInput.value.trim() == "Bob") {
        if (messageCacher) {
            messageCacher.classList.remove("hidden");
        }
    }
    
    // Si l'email est vide ou n'a pas @

    if (emailInput.value.trim() == "" || !emailInput.value.includes("@")) {
        if (emailError) emailError.classList.remove("hidden");
        isValid = false;
    }

    // Si le message est vide
    if (message.value.trim() == "") {
        if (messageError) messageError.classList.remove("hidden");
        isValid = false;
    }

    // Si tout est valide
    if (isValid) {
        formSuccess.classList.remove("hidden");
        
        // Vider les inputs
        nameInput.value = "";
        emailInput.value = "";
        message.value = "";
    }
});


// ==========================================
// 2. COMPTEUR DE CLICS SUR LES RESEAUX
// ==========================================

const liensReseaux = document.querySelectorAll(".reseau-lien");
const messageDeso = document.querySelector(".deso");

// variable pour conter les click
const liensClicks = new Set();


liensReseaux.forEach((lien) => {
    lien.addEventListener("click", (event) => {
        event.preventDefault();
        liensClicks.add(lien);

        if (liensClicks.size === 1) {
            messageDeso.classList.remove("hidden");
        }
    });
});
