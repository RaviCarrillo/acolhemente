$(document).ready(function () {
    $('#navbarToggle').click(function () {
        $('#navbarLinks').toggleClass('show');
    });
});

function toggleCardRotation(card) {
    card.querySelector('.card-inner').classList.toggle('flipped');
}