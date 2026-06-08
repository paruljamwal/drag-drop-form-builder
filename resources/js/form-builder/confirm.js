import { getFieldTypeMeta } from './constants';

/** @type {((value: boolean) => void) | null} */
let pendingResolve = null;

/** @type {(() => void) | null} */
let releaseFocusTrap = null;

/** @type {HTMLElement | null} */
let previouslyFocused = null;

let initialized = false;

const LOADING_MS = 160;

/**
 * @typedef {Object} DeleteFieldContext
 * @property {string} [label]
 * @property {string} [type]
 */

export function initDeleteModal() {
    if (initialized) {
        return;
    }

    const modal = document.getElementById('form-builder-delete-modal');

    if (!modal) {
        return;
    }

    initialized = true;

    const cancelButtons = modal.querySelectorAll('[data-fb-delete-cancel]');
    const confirmButton = modal.querySelector('[data-fb-delete-confirm]');

    cancelButtons.forEach((button) => {
        button.addEventListener('click', () => closeDeleteModal(false));
    });

    confirmButton?.addEventListener('click', () => {
        void handleConfirmClick(confirmButton);
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeDeleteModal(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('form-builder-delete-modal--open')) {
            event.preventDefault();
            closeDeleteModal(false);
        }
    });
}

/**
 * @param {string | DeleteFieldContext} [fieldOrLabel]
 * @returns {Promise<boolean>}
 */
export function confirmDeleteField(fieldOrLabel) {
    const modal = document.getElementById('form-builder-delete-modal');
    const context = normalizeDeleteContext(fieldOrLabel);

    if (!modal) {
        const name = context.label?.trim() || 'this field';

        return Promise.resolve(window.confirm(`Delete "${name}"? This cannot be undone.`));
    }

    if (pendingResolve) {
        closeDeleteModal(false);
    }

    initDeleteModal();
    populateDeleteModal(context);

    return new Promise((resolve) => {
        pendingResolve = resolve;
        previouslyFocused = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;

        modal.classList.remove('hidden');
        modal.classList.add('form-builder-delete-modal--open');
        document.body.classList.add('overflow-hidden');

        releaseFocusTrap = trapFocus(modal);

        const keepButton = document.getElementById('form-builder-delete-keep');

        window.requestAnimationFrame(() => {
            keepButton?.focus();
        });
    });
}

/**
 * @param {string | DeleteFieldContext | undefined} fieldOrLabel
 * @returns {DeleteFieldContext}
 */
function normalizeDeleteContext(fieldOrLabel) {
    if (typeof fieldOrLabel === 'string') {
        return { label: fieldOrLabel };
    }

    return fieldOrLabel ?? {};
}

/**
 * @param {DeleteFieldContext} context
 */
function populateDeleteModal(context) {
    const iconEl = document.getElementById('form-builder-delete-field-icon');
    const typeEl = document.getElementById('form-builder-delete-field-type');
    const nameEl = document.getElementById('form-builder-delete-field-name');
    const meta = context.type ? getFieldTypeMeta(context.type) : undefined;
    const label = context.label?.trim() || 'Untitled field';
    const typeLabel = meta?.label ?? 'Form field';
    const icon = meta?.icon ?? '◆';

    if (iconEl) {
        iconEl.textContent = icon;
    }

    if (typeEl) {
        typeEl.textContent = typeLabel;
    }

    if (nameEl) {
        nameEl.textContent = label;
    }
}

/**
 * @param {Element} confirmButton
 */
async function handleConfirmClick(confirmButton) {
    if (!(confirmButton instanceof HTMLButtonElement) || confirmButton.disabled) {
        return;
    }

    setDeleteLoading(confirmButton, true);

    await new Promise((resolve) => {
        window.setTimeout(resolve, LOADING_MS);
    });

    closeDeleteModal(true);
}

/**
 * @param {HTMLButtonElement} button
 * @param {boolean} loading
 */
function setDeleteLoading(button, loading) {
    button.disabled = loading;
    button.classList.toggle('form-builder-delete-modal__btn--loading', loading);
    button.setAttribute('aria-busy', loading ? 'true' : 'false');
}

/**
 * @param {boolean} confirmed
 */
function closeDeleteModal(confirmed) {
    const modal = document.getElementById('form-builder-delete-modal');
    const confirmButton = document.getElementById('form-builder-delete-confirm');

    if (confirmButton instanceof HTMLButtonElement) {
        setDeleteLoading(confirmButton, false);
    }

    modal?.classList.add('hidden');
    modal?.classList.remove('form-builder-delete-modal--open');
    document.body.classList.remove('overflow-hidden');

    releaseFocusTrap?.();
    releaseFocusTrap = null;

    if (previouslyFocused && document.contains(previouslyFocused)) {
        previouslyFocused.focus();
    }

    previouslyFocused = null;

    if (pendingResolve) {
        pendingResolve(confirmed);
        pendingResolve = null;
    }
}

/**
 * @param {HTMLElement} modal
 * @returns {() => void}
 */
function trapFocus(modal) {
    const panel = modal.querySelector('.form-builder-delete-modal__panel');

    if (!(panel instanceof HTMLElement)) {
        return () => {};
    }

    const selector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (event) => {
        if (event.key !== 'Tab') {
            return;
        }

        const focusable = [...panel.querySelectorAll(selector)].filter(
            (el) => el instanceof HTMLElement && el.offsetParent !== null,
        );

        if (focusable.length === 0) {
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (event.shiftKey && active === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
        }
    };

    modal.addEventListener('keydown', handleKeyDown);

    return () => {
        modal.removeEventListener('keydown', handleKeyDown);
    };
}
