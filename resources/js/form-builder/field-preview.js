import { getFieldTypeMeta, PREVIEW_FIELD_TYPES } from './constants';

/**
 * @param {string} templateId
 * @returns {DocumentFragment|null}
 */
function cloneTemplate(templateId) {
    const template = document.getElementById(templateId);

    return template ? template.content.cloneNode(true) : null;
}

/**
 * @param {import('./constants').FormField} field
 * @returns {HTMLElement}
 */
export function renderFieldPreviewElement(field) {
    const previewType = PREVIEW_FIELD_TYPES.includes(field.type) ? field.type : 'unsupported';
    const fragment = cloneTemplate(`fb-preview-${previewType}`);
    const preview = fragment?.firstElementChild;

    if (!(preview instanceof HTMLElement)) {
        throw new Error(`Missing preview template for field type: ${previewType}`);
    }

    hydratePreview(preview, field);

    return preview;
}

/**
 * @param {import('./constants').FormField} field
 * @returns {HTMLElement}
 */
export function renderFieldCardElement(field) {
    const fragment = cloneTemplate('fb-template-card');
    const card = fragment?.querySelector('.form-builder-field-card');

    if (!(card instanceof HTMLElement)) {
        throw new Error('Missing field card template');
    }

    const meta = getFieldTypeMeta(field.type);
    card.dataset.fieldId = field.id;

    const typeLabel = card.querySelector('[data-fb-part="type-label"]');
    if (typeLabel) {
        typeLabel.textContent = meta?.label ?? field.type;
    }

    const body = card.querySelector('[data-fb-slot="body"]');
    if (body) {
        body.replaceChildren(renderFieldPreviewElement(field));
    }

    return card;
}

/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */
function hydratePreview(root, field) {
    const previewType = root.getAttribute('data-fb-field-preview');

    switch (previewType) {
        case 'select':
            hydrateLabel(root, field);
            hydrateSelectOptions(root, field);
            break;
        case 'radio':
            hydrateOptionGroup(root, field, 'radio');
            break;
        case 'checkbox':
            hydrateOptionGroup(root, field, 'checkbox');
            break;
        case 'unsupported':
            hydrateUnsupported(root, field);
            break;
        default:
            hydrateLabel(root, field);
            hydrateInput(root, field);
            break;
    }
}

/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */
function hydrateLabel(root, field) {
    const labelText = root.querySelector('[data-fb-part="label-text"]');

    if (labelText) {
        labelText.textContent = field.label;
    }

    const required = root.querySelector('[data-fb-part="required"]');

    if (required) {
        required.classList.toggle('hidden', !field.required);
    }
}

/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */
function hydrateInput(root, field) {
    const input = root.querySelector('[data-fb-part="input"]');

    if (!(input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement)) {
        return;
    }

    applyInputClasses(input, field.cssClass);

    if ('placeholder' in input) {
        input.placeholder = field.placeholder || '';
    }

    input.value = field.value || '';

    if (field.minLength != null) {
        input.minLength = field.minLength;
    } else {
        input.removeAttribute('minlength');
    }

    if (field.maxLength != null) {
        input.maxLength = field.maxLength;
    } else {
        input.removeAttribute('maxlength');
    }
}

/**
 * @param {HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement} input
 * @param {string} cssClass
 */
function applyInputClasses(input, cssClass) {
    const baseClass = input.classList.contains('min-h-[80px]')
        ? 'form-builder-preview-input min-h-[80px] resize-none'
        : 'form-builder-preview-input';

    input.className = cssClass ? `${baseClass} ${cssClass}`.trim() : baseClass;
}

/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */
function hydrateSelectOptions(root, field) {
    const select = root.querySelector('[data-fb-part="input"]');

    if (!(select instanceof HTMLSelectElement)) {
        return;
    }

    applyInputClasses(select, field.cssClass);
    select.querySelectorAll('option:not([value=""])').forEach((option) => option.remove());

    field.options.forEach((optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        option.textContent = optionValue;
        select.appendChild(option);
    });
}

/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 * @param {'radio' | 'checkbox'} inputType
 */
function hydrateOptionGroup(root, field, inputType) {
    hydrateLabel(root, field);

    const container = root.querySelector('[data-fb-part="options"]');
    const rowTemplate = root.querySelector('template[data-fb-option-row]');

    if (!(container instanceof HTMLElement) || !(rowTemplate instanceof HTMLTemplateElement)) {
        return;
    }

    container.replaceChildren();

    field.options.forEach((optionValue, index) => {
        const row = rowTemplate.content.cloneNode(true);
        const input = row.querySelector('[data-fb-part="option-input"]');
        const label = row.querySelector('[data-fb-part="option-label"]');

        if (input instanceof HTMLInputElement) {
            input.type = inputType;
            input.name = field.id;
            input.value = optionValue;

            if (inputType === 'radio' && index === 0) {
                input.checked = true;
            }
        }

        if (label) {
            label.textContent = optionValue;
        }

        container.appendChild(row);
    });
}

/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */
function hydrateUnsupported(root, field) {
    const labelText = root.querySelector('[data-fb-part="label-text"]');

    if (labelText) {
        labelText.textContent = field.label;
    }
}
