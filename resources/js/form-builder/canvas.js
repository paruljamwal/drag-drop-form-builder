import { onFieldsChange } from './state';
import { renderFieldCardElement } from './field-preview';

export function initCanvas() {
    const root = document.getElementById('form-builder-canvas');
    const emptyState = document.getElementById('form-builder-canvas-empty');
    const fieldsList = document.getElementById('form-builder-canvas-fields');

    if (!root || !emptyState || !fieldsList) {
        return;
    }

    onFieldsChange((fields) => {
        const hasFields = fields.length > 0;

        emptyState.classList.toggle('hidden', hasFields);
        fieldsList.classList.toggle('hidden', !hasFields);

        fieldsList.replaceChildren(...fields.map((field) => renderFieldCardElement(field)));
    });
}
