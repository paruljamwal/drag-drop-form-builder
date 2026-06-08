import { initPalette } from './palette';
import { initCanvas } from './canvas';
import { initDragDrop } from './drag-drop';
import { initFieldActions } from './field-actions';
import { initFieldOptionsPanel } from './field-options';
import { initFieldReorder } from './field-reorder';
import { initSchemaOutput } from './schema-output';
import { initPersistence } from './persistence';
import { initPreviewMode } from './preview-mode';
import { initDeleteModal } from './confirm';

document.addEventListener('DOMContentLoaded', () => {
    initDeleteModal();
    initPersistence();
    initTitleCounter();
    initPalette();
    initCanvas();
    initDragDrop();
    initFieldActions();
    initFieldOptionsPanel();
    initFieldReorder();
    initSchemaOutput();
    initPreviewMode();
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

        charCount.classList.toggle('form-builder-meta-card__count--limit', length >= maxLength);
    };

    titleInput.addEventListener('input', updateCharCount);
    updateCharCount();
}
