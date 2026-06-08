import { getSelectedFieldId, onFieldsChange, onSelectionChange } from './state';
import { renderFieldCardElement } from './field-preview';

export function initCanvas() {
    const root = document.getElementById('form-builder-canvas');
    const emptyState = document.getElementById('form-builder-canvas-empty');
    const fieldsList = document.getElementById('form-builder-canvas-fields');

    if (!root || !emptyState || !fieldsList) {
        return;
    }

    const renderFields = (fields) => {
        const hasFields = fields.length > 0;

        emptyState.classList.toggle('hidden', hasFields);
        fieldsList.classList.toggle('hidden', !hasFields);

        fieldsList.replaceChildren(...fields.map((field) => renderFieldCardElement(field)));
        highlightSelectedField(fieldsList);
    };

    onFieldsChange(renderFields);
    onSelectionChange(() => highlightSelectedField(fieldsList));
}

/**
 * @param {HTMLElement} fieldsList
 */
function highlightSelectedField(fieldsList) {
    const selectedId = getSelectedFieldId();

    fieldsList.querySelectorAll('.form-builder-field-card').forEach((card) => {
        if (!(card instanceof HTMLElement)) {
            return;
        }

        card.classList.toggle(
            'form-builder-field-card--selected',
            card.dataset.fieldId === selectedId,
        );
    });
}
