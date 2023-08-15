// Sélectionnez tous les conteneurs de menu
const menuContainers = document.querySelectorAll('.menu-container');

// Ajoutez un gestionnaire d'événement à chaque conteneur de menu
menuContainers.forEach(menuContainer => {
  menuContainer.addEventListener('click', () => {
    // Fermez tous les autres menus déroulants
    menuContainers.forEach(otherMenu => {
      if (otherMenu !== menuContainer) {
        otherMenu.classList.remove('open');
        otherMenu.style.marginTop = 0;
      }
    });

    // Ouvrez ou fermez le menu actuel
    menuContainer.classList.toggle('open');

    // Ajustez la position des menus suivants avec une animation
    let isOpen = menuContainer.classList.contains('open');
    let menuHeight = menuContainer.clientHeight;
    let numOptions = menuContainer.querySelectorAll('.menu-list li').length;

    let nextMenu = menuContainer.nextElementSibling;
    let offset = isOpen ? menuHeight * numOptions : 0;

    while (nextMenu) {
      nextMenu.style.transition = 'margin-top 0.3s ease-in-out';
      nextMenu.style.marginTop = `${offset}px`;
      nextMenu = nextMenu.nextElementSibling;
    }
  });
});
