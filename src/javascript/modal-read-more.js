(() => { 
  const refs = { 
    openReadModalBtn: document.querySelector('[data-modal-read-more-open]'), 
    closeReadModalBtn: document.querySelector('[data-modal-read-more-close]'), 
    modalRead: document.querySelector('[data-modal-read-more]'), 
  }; 
 
  refs.openReadModalBtn.addEventListener('click', toggleModal); 
  refs.closeReadModalBtn.addEventListener('click', toggleModal); 
 
  function toggleModal() { 
    document.body.classList.toggle('modal-read-more-open'); 
    refs.modalRead.classList.toggle('is-hidden-modal-read-more'); 
  } 
})();

