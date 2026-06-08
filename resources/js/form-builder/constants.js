/**
 * @typedef {Object} FieldTypeMeta
 * @property {string} type
 * @property {string} label
 * @property {string} icon
 */

/**
 * @typedef {Object} FormField
 * @property {string} id
 * @property {string} type
 * @property {string} label
 * @property {string} placeholder
 * @property {string} value
 * @property {number|null} minLength
 * @property {number|null} maxLength
 * @property {string} cssClass
 * @property {boolean} required
 * @property {string[]} options
 */

/** @type {readonly string[]} */
export const PREVIEW_FIELD_TYPES = [
    'text',
    'textarea',
    'number',
    'email',
    'phone',
    'select',
    'radio',
    'checkbox',
];

let fieldIdCounter = 0;

/**
 * Single source of truth for all form builder field types.
 * @type {FieldTypeMeta[]}
 */
export const FIELD_TYPES = [
    { type: 'text', label: 'Text Input', icon: 'T' },
    { type: 'textarea', label: 'Text Area', icon: '¶' },
    { type: 'number', label: 'Number Input', icon: '#' },
    { type: 'email', label: 'Email Input', icon: '@' },
    { type: 'phone', label: 'Phone Input', icon: '☎' },
    { type: 'select', label: 'Dropdown', icon: '▼' },
    { type: 'radio', label: 'Radio Buttons', icon: '◎' },
    { type: 'checkbox', label: 'Checkboxes', icon: '☑' },
    { type: 'date', label: 'Date Picker', icon: '📅' },
    { type: 'file', label: 'File Upload', icon: '📎' },
    { type: 'title', label: 'Title', icon: 'H' },
    { type: 'description', label: 'Description', icon: '≡' },
    { type: 'newline', label: 'New Line', icon: '↵' },
    { type: 'page_break', label: 'Page Break', icon: '—' },
    { type: 'hidden', label: 'Hidden Field', icon: '◌' },
    { type: 'state', label: 'State', icon: '🗺' },
    { type: 'city', label: 'City', icon: '🏙' },
    { type: 'state_city', label: 'State & City Combined', icon: '📍' },
];

/**
 * @param {string} type
 * @returns {FieldTypeMeta | undefined}
 */
export function getFieldTypeMeta(type) {
    return FIELD_TYPES.find((field) => field.type === type);
}

/**
 * @returns {string}
 */
export function generateFieldId() {
    fieldIdCounter += 1;
    return `field_${Date.now()}_${fieldIdCounter}`;
}

/**
 * @param {import('./constants').FormField[]} loadedFields
 */
export function syncFieldIdCounter(loadedFields) {
    let maxCounter = 0;

    loadedFields.forEach((field) => {
        const match = field.id.match(/_(\d+)$/);

        if (match) {
            maxCounter = Math.max(maxCounter, Number(match[1]));
        }
    });

    fieldIdCounter = maxCounter;
}

/**
 * @param {string} type
 * @returns {FormField}
 */
export function createDefaultField(type) {
    const meta = getFieldTypeMeta(type);

    /** @type {FormField} */
    const field = {
        id: generateFieldId(),
        type,
        label: meta?.label ?? 'Field',
        placeholder: '',
        value: '',
        minLength: null,
        maxLength: null,
        cssClass: '',
        required: false,
        options: [],
    };

    if (['select', 'radio', 'checkbox'].includes(type)) {
        field.options = ['Option 1', 'Option 2'];
    }

    return field;
}
