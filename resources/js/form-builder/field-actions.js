import { confirmDeleteField } from './confirm';
import { duplicateField, getFields, removeField, selectField } from './state';
import { switchPaletteTab } from './palette';

export function initFieldActions() {
    const fieldsList = document.getElementById('form-builder-canvas-fields');

    if (!fieldsList) {
        return;
    }

    fieldsList.addEventListener('click', (event) => {
        const actionButton = event.target.closest('[data-fb-action]');

        if (!actionButton) {
            return;
        }

        const card = actionButton.closest('[data-field-id]');

        if (!card) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        const fieldId = card.dataset.fieldId;
        const action = actionButton.getAttribute('data-fb-action');

        switch (action) {
            case 'delete': {
                const field = getFields().find((item) => item.id === fieldId);

                if (confirmDeleteField(field?.label)) {
                    removeField(fieldId);
                }
                break;
            }
            case 'duplicate':
                duplicateField(fieldId);
                break;
            case 'edit':
                selectField(fieldId);
                switchPaletteTab('field-options');
                break;
            case 'move':
            default:
                break;
        }
    });
}
