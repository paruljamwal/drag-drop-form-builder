<div
    id="form-builder-delete-modal"
    class="form-builder-delete-modal hidden"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="form-builder-delete-modal-title"
    aria-describedby="form-builder-delete-modal-desc"
>
    <div class="form-builder-delete-modal__panel" role="document">
        <button
            type="button"
            class="form-builder-delete-modal__close"
            data-fb-delete-cancel
            aria-label="Close dialog"
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 6L6 18M6 6l12 12" />
            </svg>
        </button>

        <header class="form-builder-delete-modal__header">
            <div class="form-builder-delete-modal__icon-wrap" aria-hidden="true">
                <svg class="form-builder-delete-modal__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
            </div>
            <h2 id="form-builder-delete-modal-title" class="form-builder-delete-modal__title">
                Delete field?
            </h2>
            <p class="form-builder-delete-modal__subtitle">
                This action cannot be undone.
            </p>
        </header>

        <div class="form-builder-delete-modal__preview" aria-label="Field to delete">
            <div class="form-builder-delete-modal__preview-icon" id="form-builder-delete-field-icon" aria-hidden="true"></div>
            <div class="form-builder-delete-modal__preview-text">
                <span id="form-builder-delete-field-type" class="form-builder-delete-modal__preview-type"></span>
                <span id="form-builder-delete-field-name" class="form-builder-delete-modal__preview-label"></span>
            </div>
        </div>

        <p id="form-builder-delete-modal-desc" class="form-builder-delete-modal__warning">
            Deleting this field will remove all of its settings and validation rules.
        </p>

        <footer class="form-builder-delete-modal__footer">
            <button
                type="button"
                id="form-builder-delete-keep"
                class="form-builder-delete-modal__btn form-builder-delete-modal__btn--secondary"
                data-fb-delete-cancel
            >
                Keep field
            </button>
            <button
                type="button"
                id="form-builder-delete-confirm"
                class="form-builder-delete-modal__btn form-builder-delete-modal__btn--danger"
                data-fb-delete-confirm
            >
                <span class="form-builder-delete-modal__btn-label">Delete field</span>
                <span class="form-builder-delete-modal__btn-spinner" aria-hidden="true"></span>
            </button>
        </footer>
    </div>
</div>
