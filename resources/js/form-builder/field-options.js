import { confirmDeleteField } from './confirm';
import { getFieldTypeMeta } from './constants';
import { getVisibleConfig } from './field-config';
import {
    getSelectedField,
    getSelectedFieldId,
    onSelectionChange,
    removeField,
    updateField,
} from './state';
import { switchPaletteTab } from './palette';

/** @type {boolean} */
let isBindingForm = false;

export function initFieldOptionsPanel() {
    const emptyState = document.getElementById('form-builder-field-options-empty');
    const content = document.getElementById('form-builder-field-options-content');
    const form = document.getElementById('form-builder-field-options-form');

    if (!emptyState || !content || !form) {
        return;
    }

    bindFormEvents(form);

    onSelectionChange(() => {
        renderPanel(emptyState, content, form);
    });

    renderPanel(emptyState, content, form);
}

/**
 * @param {HTMLElement} emptyState
 * @param {HTMLElement} content
 * @param {HTMLFormElement} form
 */
function renderPanel(emptyState, content, form) {
    const field = getSelectedField();

    if (!field) {
        emptyState.classList.remove('hidden');
        content.classList.add('hidden');
        return;
    }

    const meta = getFieldTypeMeta(field.type);
    const visibility = getVisibleConfig(field.type);

    emptyState.classList.add('hidden');
    content.classList.remove('hidden');

    isBindingForm = true;
    bindFormValues(form, field, meta?.label ?? field.type);
    applyConfigVisibility(form, visibility);
    renderOptionsList(form, field);
    isBindingForm = false;
}

/**
 * @param {HTMLFormElement} form
 * @param {import('./constants').FormField} field
 * @param {string} typeLabel
 */
function bindFormValues(form, field, typeLabel) {
    const typeEl = form.querySelector('#form-builder-field-options-type');
    const labelInput = form.querySelector('#fb-config-label');
    const placeholderInput = form.querySelector('#fb-config-placeholder');
    const minLengthInput = form.querySelector('#fb-config-min-length');
    const maxLengthInput = form.querySelector('#fb-config-max-length');
    const requiredInput = form.querySelector('#fb-config-required');
    const cssClassInput = form.querySelector('#fb-config-css-class');
    const defaultValueInput = form.querySelector('#fb-config-default-value');

    if (typeEl) {
        typeEl.textContent = typeLabel;
    }

    if (labelInput instanceof HTMLInputElement) {
        labelInput.value = field.label;
    }

    if (placeholderInput instanceof HTMLInputElement) {
        placeholderInput.value = field.placeholder;
    }

    if (minLengthInput instanceof HTMLInputElement) {
        minLengthInput.value = field.minLength ?? '';
    }

    if (maxLengthInput instanceof HTMLInputElement) {
        maxLengthInput.value = field.maxLength ?? '';
    }

    if (requiredInput instanceof HTMLInputElement) {
        requiredInput.checked = field.required;
    }

    if (cssClassInput instanceof HTMLInputElement) {
        cssClassInput.value = field.cssClass;
    }

    if (defaultValueInput instanceof HTMLInputElement) {
        defaultValueInput.value = field.value;
    }
}

/**
 * @param {HTMLFormElement} form
 * @param {Record<string, boolean>} visibility
 */
function applyConfigVisibility(form, visibility) {
    form.querySelectorAll('[data-fb-config-group]').forEach((group) => {
        if (!(group instanceof HTMLElement)) {
            return;
        }

        const key = group.getAttribute('data-fb-config-group');
        const isVisible = key ? visibility[key] : false;
        group.classList.toggle('hidden', !isVisible);
    });
}

/**
 * @param {HTMLFormElement} form
 * @param {import('./constants').FormField} field
 */
function renderOptionsList(form, field) {
    const list = form.querySelector('#fb-config-options-list');

    if (!(list instanceof HTMLElement)) {
        return;
    }

    list.replaceChildren();

    field.options.forEach((option, index) => {
        list.appendChild(createOptionRow(option, index, field.options.length));
    });
}

/**
 * @param {string} value
 * @param {number} index
 * @param {number} total
 * @returns {HTMLElement}
 */
function createOptionRow(value, index, total) {
    const row = document.createElement('div');
    row.className = 'flex items-center gap-2';
    row.dataset.fbOptionIndex = String(index);

    row.innerHTML = `
        <input
            type="text"
            class="form-builder-option-input flex-1"
            data-fb-option-input
            value="${escapeAttribute(value)}"
            placeholder="Option ${index + 1}"
            autocomplete="off"
        >
        <button
            type="button"
            class="form-builder-option-icon-btn"
            data-fb-remove-option
            title="Remove option"
            aria-label="Remove option"
            ${total <= 1 ? 'disabled' : ''}
        >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    `;

    return row;
}

/**
 * @param {HTMLFormElement} form
 */
function bindFormEvents(form) {
    form.addEventListener('input', (event) => {
        if (isBindingForm) {
            return;
        }

        const target = event.target;

        if (!(target instanceof HTMLInputElement)) {
            return;
        }

        if (target.hasAttribute('data-fb-option-input')) {
            handleOptionInput(target);
            return;
        }

        handleFieldInput(target);
    });

    form.addEventListener('change', (event) => {
        if (isBindingForm) {
            return;
        }

        const target = event.target;

        if (target instanceof HTMLInputElement && target.id === 'fb-config-required') {
            commitFieldUpdate({ required: target.checked });
        }
    });

    form.addEventListener('click', (event) => {
        const addButton = event.target.closest('#fb-config-add-option');
        const removeButton = event.target.closest('[data-fb-remove-option]');
        const removeElementButton = event.target.closest('#fb-config-remove-element');

        if (addButton) {
            event.preventDefault();
            handleAddOption(form);
            return;
        }

        if (removeButton) {
            event.preventDefault();
            const row = removeButton.closest('[data-fb-option-index]');

            if (row instanceof HTMLElement) {
                handleRemoveOption(form, Number(row.dataset.fbOptionIndex));
            }
            return;
        }

        if (removeElementButton) {
            event.preventDefault();
            void handleRemoveElement();
        }
    });
}

/**
 * @param {HTMLInputElement} input
 */
function handleFieldInput(input) {
    switch (input.id) {
        case 'fb-config-label':
            commitFieldUpdate({ label: input.value });
            break;
        case 'fb-config-placeholder':
            commitFieldUpdate({ placeholder: input.value });
            break;
        case 'fb-config-min-length':
            commitFieldUpdate({ minLength: parseOptionalNumber(input.value) });
            break;
        case 'fb-config-max-length':
            commitFieldUpdate({ maxLength: parseOptionalNumber(input.value) });
            break;
        case 'fb-config-css-class':
            commitFieldUpdate({ cssClass: input.value.trim() });
            break;
        case 'fb-config-default-value':
            commitFieldUpdate({ value: input.value });
            break;
        default:
            break;
    }
}

/**
 * @param {HTMLInputElement} input
 */
function handleOptionInput(input) {
    const row = input.closest('[data-fb-option-index]');
    const field = getSelectedField();

    if (!field || !(row instanceof HTMLElement)) {
        return;
    }

    const index = Number(row.dataset.fbOptionIndex);
    const options = [...field.options];
    options[index] = input.value;
    commitFieldUpdate({ options });
}

/**
 * @param {HTMLFormElement} form
 */
function handleAddOption(form) {
    const field = getSelectedField();

    if (!field) {
        return;
    }

    const options = [...field.options, `Option ${field.options.length + 1}`];
    commitFieldUpdate({ options });
    renderOptionsList(form, { ...field, options });
}

/**
 * @param {HTMLFormElement} form
 * @param {number} index
 */
function handleRemoveOption(form, index) {
    const field = getSelectedField();

    if (!field || field.options.length <= 1) {
        return;
    }

    const options = field.options.filter((_, optionIndex) => optionIndex !== index);
    commitFieldUpdate({ options });
    renderOptionsList(form, { ...field, options });
}

async function handleRemoveElement() {
    const field = getSelectedField();

    if (!field) {
        return;
    }

    if (!(await confirmDeleteField({ label: field.label, type: field.type }))) {
        return;
    }

    removeField(field.id);
    switchPaletteTab('add-fields');
}

/**
 * @param {Partial<import('./constants').FormField>} updates
 */
function commitFieldUpdate(updates) {
    const fieldId = getSelectedFieldId();

    if (!fieldId) {
        return;
    }

    updateField(fieldId, updates);
}

/**
 * @param {string} value
 * @returns {number|null}
 */
function parseOptionalNumber(value) {
    if (value === '' || value === null) {
        return null;
    }

    const parsed = Number(value);

    return Number.isFinite(parsed) ? parsed : null;
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeAttribute(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;');
}
