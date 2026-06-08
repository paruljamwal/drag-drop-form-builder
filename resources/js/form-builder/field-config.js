/** @type {readonly string[]} */
export const CONFIG_LABEL = ['*'];

/** @type {readonly string[]} */
export const CONFIG_PLACEHOLDER = ['text', 'textarea', 'number', 'email', 'phone'];

/** @type {readonly string[]} */
export const CONFIG_MIN_MAX_LENGTH = ['text', 'textarea'];

/** @type {readonly string[]} */
export const CONFIG_OPTIONS = ['select', 'radio', 'checkbox'];

/** @type {readonly string[]} */
export const CONFIG_REQUIRED = ['*'];

/** @type {readonly string[]} */
export const CONFIG_CSS_CLASS = ['*'];

/** @type {readonly string[]} */
export const CONFIG_DEFAULT_VALUE = ['text', 'number', 'email', 'hidden'];

/**
 * @param {readonly string[]} allowedTypes
 * @param {string} fieldType
 * @returns {boolean}
 */
export function isConfigAllowed(allowedTypes, fieldType) {
    return allowedTypes.includes('*') || allowedTypes.includes(fieldType);
}

/**
 * @param {string} fieldType
 * @returns {Record<string, boolean>}
 */
export function getVisibleConfig(fieldType) {
    return {
        label: isConfigAllowed(CONFIG_LABEL, fieldType),
        placeholder: isConfigAllowed(CONFIG_PLACEHOLDER, fieldType),
        minMaxLength: isConfigAllowed(CONFIG_MIN_MAX_LENGTH, fieldType),
        options: isConfigAllowed(CONFIG_OPTIONS, fieldType),
        required: isConfigAllowed(CONFIG_REQUIRED, fieldType),
        cssClass: isConfigAllowed(CONFIG_CSS_CLASS, fieldType),
        defaultValue: isConfigAllowed(CONFIG_DEFAULT_VALUE, fieldType),
        removeElement: true,
    };
}
