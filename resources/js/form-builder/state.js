import { createDefaultField, generateFieldId } from './constants';

/** @type {import('./constants').FormField[]} */
let fields = [];

/** @type {string|null} */
let selectedFieldId = null;

/** @type {Set<(fields: import('./constants').FormField[]) => void>} */
const fieldListeners = new Set();

/** @type {Set<(selectedId: string|null) => void>} */
const selectionListeners = new Set();

/**
 * @returns {import('./constants').FormField[]}
 */
export function getFields() {
    return [...fields];
}

/**
 * @returns {string|null}
 */
export function getSelectedFieldId() {
    return selectedFieldId;
}

/**
 * @returns {import('./constants').FormField|null}
 */
export function getSelectedField() {
    return fields.find((field) => field.id === selectedFieldId) ?? null;
}

/**
 * @param {string} type
 * @returns {import('./constants').FormField}
 */
export function addField(type) {
    const field = createDefaultField(type);
    fields = [...fields, field];
    notifyFields();
    return field;
}

/**
 * @param {string} id
 */
export function removeField(id) {
    fields = fields.filter((field) => field.id !== id);

    if (selectedFieldId === id) {
        selectedFieldId = null;
        notifySelection();
    }

    notifyFields();
}

/**
 * @param {string} id
 * @returns {import('./constants').FormField|null}
 */
export function duplicateField(id) {
    const index = fields.findIndex((field) => field.id === id);

    if (index === -1) {
        return null;
    }

    const source = fields[index];
    const copy = {
        ...source,
        id: generateFieldId(),
        options: [...source.options],
    };

    fields = [
        ...fields.slice(0, index + 1),
        copy,
        ...fields.slice(index + 1),
    ];

    selectedFieldId = copy.id;
    notifyFields();
    notifySelection();

    return copy;
}

/**
 * @param {string} id
 * @param {Partial<import('./constants').FormField>} updates
 * @returns {import('./constants').FormField|null}
 */
export function updateField(id, updates) {
    const index = fields.findIndex((field) => field.id === id);

    if (index === -1) {
        return null;
    }

    const updated = {
        ...fields[index],
        ...updates,
    };

    if (updates.options) {
        updated.options = [...updates.options];
    }

    fields = fields.map((field) => (field.id === id ? updated : field));
    notifyFields();

    return updated;
}

/**
 * @param {string} id
 */
export function selectField(id) {
    if (!fields.some((field) => field.id === id)) {
        return;
    }

    selectedFieldId = id;
    notifySelection();
}

/**
 * @param {(fields: import('./constants').FormField[]) => void} listener
 */
export function onFieldsChange(listener) {
    fieldListeners.add(listener);

    return () => fieldListeners.delete(listener);
}

/**
 * @param {(selectedId: string|null) => void} listener
 */
export function onSelectionChange(listener) {
    selectionListeners.add(listener);

    return () => selectionListeners.delete(listener);
}

function notifyFields() {
    fieldListeners.forEach((listener) => listener(getFields()));
}

function notifySelection() {
    selectionListeners.forEach((listener) => listener(selectedFieldId));
}
