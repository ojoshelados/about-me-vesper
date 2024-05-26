document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');
    const closeButtons = document.querySelectorAll('.close-card');
    const restoreButton = document.getElementById('restore-cards');
    const cards = document.querySelectorAll('.card-custom');
    const homeCards = document.getElementById('home-cards');
    const reloadMessage = document.getElementById('reload-message');
    const reloadCardsButton = document.getElementById('reload-cards');

    function showTabContent(tabName) {
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabName) {
                content.classList.add('active');
            }
        });

        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === tabName) {
                tab.classList.add('active');
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const tabName = this.getAttribute('data-tab');
            showTabContent(tabName);
        });
    });

    // Mostrar la primera pestaña por defecto
    showTabContent('home');

    // Manejar el cierre de tarjetas
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card-custom');
            card.style.display = 'none';

            if (homeCards.querySelectorAll('.card-custom:not([style="display: none;"])').length === 0) {
                reloadMessage.classList.remove('d-none');
            }
        });
    });

    // Restablecer tarjetas
    restoreButton.addEventListener('click', function() {
        cards.forEach(card => {
            card.style.display = '';
        });
        restoreButton.classList.add('d-none');
    });

    // Manejar el botón de recargar tarjetas
    reloadCardsButton.addEventListener('click', function() {
        cards.forEach(card => {
            card.style.display = '';
        });
        reloadMessage.classList.add('d-none');
    });

    // Manejar el enlace de Twitter
    const twitterLink = document.querySelector('a[href="https://x.com/ojoshelados"]');
    if (twitterLink) {
        twitterLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.open('https://x.com/ojoshelados', '_blank');
        });
    }
});
