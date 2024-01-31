$(document).ready(function () {
    $('#navbarToggle').click(function () {
        $('#navbarLinks').toggleClass('show');
    });
});

function toggleCardRotation(card) {
    card.querySelector('.card-inner').classList.toggle('flipped');
};

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });