import { initPalette } from './palette';
import { initCanvas } from './canvas';
import { initDragDrop } from './drag-drop';
import { initFieldActions } from './field-actions';
import { initFieldOptionsPanel } from './field-options';

document.addEventListener('DOMContentLoaded', () => {
    initTitleCounter();
    initPalette();
    initCanvas();
    initDragDrop();
    initFieldActions();
    initFieldOptionsPanel();
});

function initTitleCounter() {
    const titleInput = document.getElementById('form-builder-title');
    const charCount = document.getElementById('form-builder-char-count');

    if (!titleInput || !charCount) {
        return;
    }

    const maxLength = parseInt(titleInput.getAttribute('maxlength'), 10) || 200;

    const updateCharCount = () => {
        const length = titleInput.value.length;
        charCount.textContent = `${length} / ${maxLength}`;

        if (length >= maxLength) {
            charCount.classList.add('text-red-600');
            charCount.classList.remove('text-gray-500');
        } else {
            charCount.classList.remove('text-red-600');
            charCount.classList.add('text-gray-500');
        }
    };

    titleInput.addEventListener('input', updateCharCount);
    updateCharCount();
}
