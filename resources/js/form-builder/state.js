import { createDefaultField } from './constants';

/** @type {import('./constants').FormField[]} */
let fields = [];

/** @type {Set<(fields: import('./constants').FormField[]) => void>} */
const listeners = new Set();

/**
 * @returns {import('./constants').FormField[]}
 */
export function getFields() {
    return [...fields];
}

/**
 * @param {string} type
 * @returns {import('./constants').FormField}
 */
export function addField(type) {
    const field = createDefaultField(type);
    fields = [...fields, field];
    notify();
    return field;
}

/**
 * @param {(fields: import('./constants').FormField[]) => void} listener
 */
export function onFieldsChange(listener) {
    listeners.add(listener);

    return () => listeners.delete(listener);
}

function notify() {
    listeners.forEach((listener) => listener(getFields()));
}
