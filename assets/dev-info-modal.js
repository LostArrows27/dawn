document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('DevInfoButton');
  const modal = document.getElementById('DevInfoModal');
  const closeButton = document.getElementById('ModalClose-DevInfo');

  if (button && modal) {
    button.addEventListener('click', function () {
      modal.classList.remove('hidden');
      modal.classList.add('visible');
      document.body.classList.add('overflow-hidden');
    });

    closeButton.addEventListener('click', function () {
      modal.classList.remove('visible');
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.classList.remove('visible');
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }
});
