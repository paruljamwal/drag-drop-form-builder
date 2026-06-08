import { getFieldTypeMeta } from './constants';
import { getSelectedField, onSelectionChange } from './state';

export function initFieldOptionsPanel() {
    const emptyState = document.getElementById('form-builder-field-options-empty');
    const content = document.getElementById('form-builder-field-options-content');
    const labelEl = document.getElementById('form-builder-field-options-label');
    const typeEl = document.getElementById('form-builder-field-options-type');

    if (!emptyState || !content || !labelEl || !typeEl) {
        return;
    }

    const render = () => {
        const field = getSelectedField();

        if (!field) {
            emptyState.classList.remove('hidden');
            content.classList.add('hidden');
            return;
        }

        const meta = getFieldTypeMeta(field.type);

        emptyState.classList.add('hidden');
        content.classList.remove('hidden');
        labelEl.textContent = field.label;
        typeEl.textContent = meta?.label ?? field.type;
    };

    onSelectionChange(render);
    render();
}
