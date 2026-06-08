/**
 * @param {string} [label]
 * @returns {boolean}
 */
export function confirmDeleteField(label) {
    const name = label?.trim() || 'this field';

    return window.confirm(`Delete "${name}"? This cannot be undone.`);
}
