document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');
    const video = document.querySelector('.shows__list__item__video');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab-button');
            const tab = document.querySelector(`[data-tab-id="${tabId}"]`);

            if (!video.paused) {
                video.pause();
            }

            tabs.forEach(tab => {
                tab.classList.remove('shows__list--is-active');
            });

            buttons.forEach(button => {
                button.classList.remove('shows__tabs__button--is-active');
            });

            this.classList.add('shows__tabs__button--is-active');

            tab.classList.add('shows__list--is-active');
        });
    });
});   