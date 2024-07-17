document.addEventListener('DOMContentLoaded', function() {
  const errorModal = document.getElementById('error-modal');
  const heartIcon = document.getElementById('heart-icon');

  heartIcon.addEventListener('click', function() {
    mimicServerCall()
      .then(function(response) {
        if (response === 'success') {
          heartIcon.classList.add('full-heart');
          heartIcon.classList.add('activated-heart');
        } else {
          throw new Error('Server returned error');
        }
      })
      .catch(function(error) {
        errorModal.classList.remove('hidden');
        errorModal.innerText = error.message;

        setTimeout(function() {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});

const { JSDOM } = require("jsdom");
