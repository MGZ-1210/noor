document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalTexte = document.getElementById("modal-texte");
  const modalFermer = document.getElementById("modal-fermer");

  function ouvrirModal() {
    modal.classList.add("modal-actif");
  }

  function fermerModal() {
    modal.classList.remove("modal-actif");
  }

  const imagesProduits = document.querySelectorAll(".produit img");

  imagesProduits.forEach(function (image) {
    image.addEventListener("click", function () {
      const fiche = image.closest(".produit").querySelector(".produit-contenu");

      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modalTexte.innerHTML = fiche.innerHTML;

      ouvrirModal();
    });
  });
  const imagesAccueil = document.querySelectorAll(".accueil-images img");

  imagesAccueil.forEach(function (image) {
    image.addEventListener("click", function () {
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modalTexte.innerHTML = "<p>" + image.alt + "</p>";

      ouvrirModal();
    });
  });
  modalFermer.addEventListener("click", fermerModal);

  modal.addEventListener("click", function (evenement) {
    if (evenement.target === modal) {
      fermerModal();
    }
  });

  document.addEventListener("keydown", function (evenement) {
    if (evenement.key === "Escape") {
      fermerModal();
    }
  });

});
