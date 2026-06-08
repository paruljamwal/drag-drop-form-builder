import { persistDraft } from './persistence';

export function initPreviewMode() {
    const root = document.querySelector('.form-builder');
    const toggle = document.getElementById('form-builder-preview-toggle');

    if (!root || !toggle) {
        return;
    }

    const label = toggle.querySelector('[data-fb-preview-label]');

    if (root.classList.contains('form-builder--preview') && label) {
        label.textContent = 'Exit Preview';
        toggle.setAttribute('aria-pressed', 'true');
    }

    toggle.addEventListener('click', () => {
        const isPreview = root.classList.toggle('form-builder--preview');

        if (label) {
            label.textContent = isPreview ? 'Exit Preview' : 'Preview';
        }

        toggle.setAttribute('aria-pressed', isPreview ? 'true' : 'false');
        persistDraft();
    });
}
