(() => {
  const refs = {
    openFranBtn: document.querySelector('[data-fran-open]'),
    closeFranBtn: document.querySelector('[data-fran-close]'),
    fran: document.querySelector('[data-fran]'),
  };

  refs.openFranBtn.addEventListener('click', toggleModal);
  refs.closeFranBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-fran');
    refs.fran.classList.toggle('is-hidden-fran');
  }
})();