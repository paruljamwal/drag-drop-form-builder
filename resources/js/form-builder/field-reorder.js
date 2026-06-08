import { moveFieldToEnd, reorderField } from './state';

export const REORDER_MIME = 'application/x-form-builder-reorder';

/** @type {string|null} */
let draggedFieldId = null;

export function initFieldReorder() {
    const fieldsList = document.getElementById('form-builder-canvas-fields');

    if (!fieldsList) {
        return;
    }

    fieldsList.addEventListener('dragstart', (event) => {
        const handle = event.target.closest('[data-fb-action="move"]');
        const card = handle?.closest('[data-field-id]');

        if (!handle || !card || !event.dataTransfer) {
            return;
        }

        draggedFieldId = card.dataset.fieldId;
        event.dataTransfer.setData(REORDER_MIME, draggedFieldId);
        event.dataTransfer.effectAllowed = 'move';
        card.classList.add('form-builder-field-card--dragging');
    });

    fieldsList.addEventListener('dragend', (event) => {
        const card = event.target.closest('[data-field-id]');
        card?.classList.remove('form-builder-field-card--dragging');
        clearDropIndicators(fieldsList);
        draggedFieldId = null;
    });

    fieldsList.addEventListener('dragover', (event) => {
        if (!isReorderDrag(event)) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move';
        }

        clearDropIndicators(fieldsList);

        const targetCard = event.target.closest('[data-field-id]');

        if (!targetCard || targetCard.dataset.fieldId === draggedFieldId) {
            fieldsList.classList.add('form-builder-canvas-fields--drop-end');
            return;
        }

        const insertAfter = shouldInsertAfter(targetCard, event.clientY);
        targetCard.classList.add(
            insertAfter
                ? 'form-builder-field-card--drop-after'
                : 'form-builder-field-card--drop-before',
        );
    });

    fieldsList.addEventListener('dragleave', (event) => {
        if (!fieldsList.contains(event.relatedTarget)) {
            clearDropIndicators(fieldsList);
        }
    });

    fieldsList.addEventListener('drop', (event) => {
        const reorderId = event.dataTransfer?.getData(REORDER_MIME);

        if (!reorderId) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        const targetCard = event.target.closest('[data-field-id]');
        clearDropIndicators(fieldsList);

        if (!targetCard || targetCard.dataset.fieldId === reorderId) {
            moveFieldToEnd(reorderId);
            draggedFieldId = null;
            return;
        }

        const insertAfter = shouldInsertAfter(targetCard, event.clientY);
        reorderField(reorderId, targetCard.dataset.fieldId, insertAfter);
        draggedFieldId = null;
    });
}

/**
 * @param {DragEvent} event
 * @returns {boolean}
 */
function isReorderDrag(event) {
    if (!draggedFieldId) {
        return false;
    }

    return event.dataTransfer?.types.includes(REORDER_MIME) ?? false;
}

/**
 * @param {HTMLElement} targetCard
 * @param {number} clientY
 * @returns {boolean}
 */
function shouldInsertAfter(targetCard, clientY) {
    const rect = targetCard.getBoundingClientRect();

    return clientY > rect.top + rect.height / 2;
}

/**
 * @param {HTMLElement} fieldsList
 */
function clearDropIndicators(fieldsList) {
    fieldsList.classList.remove('form-builder-canvas-fields--drop-end');
    fieldsList.querySelectorAll('.form-builder-field-card').forEach((card) => {
        card.classList.remove(
            'form-builder-field-card--drop-before',
            'form-builder-field-card--drop-after',
        );
    });
}

/**
 * @param {DragEvent} event
 * @returns {boolean}
 */
export function isActiveReorderDrag(event) {
    return event.dataTransfer?.types.includes(REORDER_MIME) ?? false;
}
