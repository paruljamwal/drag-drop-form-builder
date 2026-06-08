import { getFields } from './state';

/**
 * @typedef {Object} FormSchemaField
 * @property {string} id
 * @property {string} type
 * @property {string} label
 * @property {string} placeholder
 * @property {boolean} required
 * @property {string} cssClass
 * @property {string} defaultValue
 * @property {number|null} minLength
 * @property {number|null} maxLength
 * @property {string[]} options
 * @property {number} order
 */

/**
 * @typedef {Object} FormSchema
 * @property {string} title
 * @property {string} submissionUrl
 * @property {FormSchemaField[]} fields
 */

/**
 * @returns {FormSchema}
 */
export function serializeFormSchema() {
    const titleInput = document.getElementById('form-builder-title');
    const submissionUrlEl = document.getElementById('form-builder-submission-url');

    return {
        title: titleInput instanceof HTMLInputElement ? titleInput.value.trim() : 'Untitled Form',
        submissionUrl: submissionUrlEl?.textContent?.trim() ?? '',
        fields: getFields().map((field, index) => serializeField(field, index)),
    };
}

/**
 * @param {import('./constants').FormField} field
 * @param {number} index
 * @returns {FormSchemaField}
 */
function serializeField(field, index) {
    return {
        id: field.id,
        type: field.type,
        label: field.label,
        placeholder: field.placeholder,
        required: field.required,
        cssClass: field.cssClass,
        defaultValue: field.value,
        minLength: field.minLength,
        maxLength: field.maxLength,
        options: [...field.options],
        order: index,
    };
}

/**
 * @param {boolean} [pretty=true]
 * @returns {string}
 */
export function serializeFormSchemaJson(pretty = true) {
    return JSON.stringify(serializeFormSchema(), null, pretty ? 2 : 0);
}
