document.addEventListener('DOMContentLoaded', () => {
  const ACTIVE_CLASSNAME = 'modal--active';

  const overlayEl = document.querySelector('.overlay');
  const loginPopupEl = document.querySelector('.popup--login');
  const containerEl = document.querySelector('.container');
  const competitionLinkEl = document.querySelector('#competition-link');
  const registerLinkEl = document.querySelector('#register-link');
  const closeBtnsEls = document.querySelectorAll('.close-btn');
  const menuEl = document.querySelector('.menu');

  const closeAllPopups = () => {
    const openedModalsEls = document.querySelectorAll('.modal--active');
    openedModalsEls.forEach((modal) => closePopup(modal, ACTIVE_CLASSNAME));
  };

  const closePopupByClickOnEsc = (e) => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  };

  const closePopupByClickOnOverlay = (e) => {
    if (e.target === overlayEl) {
      closeAllPopups();
    }
  };

  const closePopup = (popup, classname) => {
    window.removeEventListener('click', closePopupByClickOnOverlay);
    window.removeEventListener('keydown', closePopupByClickOnEsc);
    overlayEl.classList.remove(ACTIVE_CLASSNAME);
    popup.classList.remove(classname);
  };

  const openPopup = (popup, classname) => {
    window.addEventListener('keydown', closePopupByClickOnEsc);
    window.addEventListener('click', closePopupByClickOnOverlay);
    overlayEl.classList.add(ACTIVE_CLASSNAME);
    popup.classList.add(classname);
  };

  competitionLinkEl.addEventListener('click', (e) => {
    e.preventDefault();
    menuEl.classList.remove('menu--active')
    openPopup(containerEl, ACTIVE_CLASSNAME);
  });

  registerLinkEl.addEventListener('click', (e) => {
    e.preventDefault();
    menuEl.classList.remove('menu--active')
    openPopup(loginPopupEl, ACTIVE_CLASSNAME);
  });

  closeBtnsEls.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      closeAllPopups();
    });
  });

  menuEl.addEventListener('mouseenter', (e) => {
    menuEl.classList.add('menu--active')
  })
  menuEl.addEventListener('mouseleave', (e) => {
    menuEl.classList.remove('menu--active')
  })
});
