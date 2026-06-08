const STORAGE_KEY = 'form-builder-draft';

/**
 * @param {unknown} snapshot
 */
export function saveFormDraft(snapshot) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    } catch (error) {
        console.warn('Unable to save form builder draft:', error);
    }
}

/**
 * @returns {object|null}
 */
export function loadFormDraft() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);

        if (!raw) {
            return null;
        }

        return JSON.parse(raw);
    } catch (error) {
        console.warn('Unable to load form builder draft:', error);
        return null;
    }
}

export function clearFormDraft() {
    localStorage.removeItem(STORAGE_KEY);
}
