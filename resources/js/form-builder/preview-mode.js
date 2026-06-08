import { persistDraft } from './persistence';

export function initPreviewMode() {
    const root = document.querySelector('.form-builder');
    const toggle = document.getElementById('form-builder-preview-toggle');

    if (!root || !toggle) {
        return;
    }

    if (root.classList.contains('form-builder--preview')) {
        toggle.textContent = 'Exit Preview';
        toggle.setAttribute('aria-pressed', 'true');
    }

    toggle.addEventListener('click', () => {
        const isPreview = root.classList.toggle('form-builder--preview');
        toggle.textContent = isPreview ? 'Exit Preview' : 'Preview';
        toggle.setAttribute('aria-pressed', isPreview ? 'true' : 'false');
        persistDraft();
    });
}
