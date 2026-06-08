import { syncFieldIdCounter } from './constants';
import { loadFormDraft, saveFormDraft } from './storage';
import {
    getFields,
    getSelectedFieldId,
    hydrateState,
    onFieldsChange,
    onSelectionChange,
} from './state';

let saveTimer = null;

export function initPersistence() {
    restoreDraft();

    onFieldsChange(scheduleSave);
    onSelectionChange(scheduleSave);

    const titleInput = document.getElementById('form-builder-title');
    titleInput?.addEventListener('input', scheduleSave);
}

function restoreDraft() {
    const draft = loadFormDraft();

    if (!draft || !Array.isArray(draft.fields)) {
        return;
    }

    const fields = draft.fields.map(normalizeField);
    syncFieldIdCounter(fields);
    hydrateState(fields, draft.selectedFieldId ?? null);

    const titleInput = document.getElementById('form-builder-title');

    if (titleInput instanceof HTMLInputElement && typeof draft.title === 'string') {
        titleInput.value = draft.title;
        titleInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (draft.previewMode) {
        document.querySelector('.form-builder')?.classList.add('form-builder--preview');
    }
}

function scheduleSave() {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(persistDraft, 250);
}

function persistDraft() {
    const titleInput = document.getElementById('form-builder-title');
    const root = document.querySelector('.form-builder');

    saveFormDraft({
        title: titleInput instanceof HTMLInputElement ? titleInput.value : '',
        fields: getFields(),
        selectedFieldId: getSelectedFieldId(),
        previewMode: root?.classList.contains('form-builder--preview') ?? false,
    });
}

/**
 * @param {object} field
 * @returns {import('./constants').FormField}
 */
function normalizeField(field) {
    return {
        id: String(field.id ?? ''),
        type: String(field.type ?? 'text'),
        label: String(field.label ?? 'Field'),
        placeholder: String(field.placeholder ?? ''),
        value: String(field.value ?? ''),
        minLength: field.minLength ?? null,
        maxLength: field.maxLength ?? null,
        cssClass: String(field.cssClass ?? ''),
        required: Boolean(field.required),
        options: Array.isArray(field.options) ? field.options.map(String) : [],
    };
}

export { persistDraft };
