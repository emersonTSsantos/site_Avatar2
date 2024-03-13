document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');
    const video = document.querySelector('.shows__list__item__video');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab-button');
            const tab = document.querySelector(`[data-tab-id="${tabId}"]`);

            // Pausar o vídeo se estiver reproduzindo
            if (!video.paused) {
                video.pause();
            }

            // Esconder todas as abas
            tabs.forEach(tab => {
                tab.classList.remove('shows__list--is-active');
            });

            // Remover a classe de ativo de todos os botões
            buttons.forEach(button => {
                button.classList.remove('shows__tabs__button--is-active');
            });

            // Adicionar classe de ativo ao botão clicado
            this.classList.add('shows__tabs__button--is-active');

            // Exibir a aba correspondente ao botão clicado
            tab.classList.add('shows__list--is-active');
        });
    });
});
