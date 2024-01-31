$(document).ready(function () {
    $('#navbarToggle').click(function () {
        $('#navbarLinks').toggleClass('show');
    });
});

function toggleCardRotation(card) {
    // Adiciona ou remove a classe 'flipped' do card
    card.classList.toggle('flipped');
}