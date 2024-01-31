document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.navbar-links').classList.toggle('active');
});

function toggleCardRotation(card) {
    card.querySelector('.card-inner').classList.toggle('flipped');
};

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });