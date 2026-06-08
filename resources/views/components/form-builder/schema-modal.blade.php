<div
    id="form-builder-schema-modal"
    class="form-builder-schema-modal hidden"
    role="dialog"
    aria-modal="true"
    aria-labelledby="form-builder-schema-modal-title"
>
    <div class="form-builder-schema-modal__panel">
        <div class="form-builder-schema-modal__header">
            <button
                type="button"
                class="form-builder-schema-modal__close"
                data-fb-close-schema-modal
                aria-label="Close"
            >
                &times;
            </button>
            <h2 id="form-builder-schema-modal-title" class="form-builder-schema-modal__title">
                Form JSON Schema
            </h2>
            <p class="form-builder-schema-modal__subtitle">
                Copy this JSON for your README or backend integration.
            </p>
        </div>

        <div class="form-builder-schema-modal__body">
            <textarea
                id="form-builder-schema-output"
                class="form-builder-schema-modal__output"
                readonly
                rows="18"
                aria-label="Form JSON schema"
            ></textarea>
        </div>

        <div class="form-builder-schema-modal__footer">
            <button
                type="button"
                class="form-builder-schema-modal__btn form-builder-schema-modal__btn--secondary"
                data-fb-close-schema-modal
            >
                Close
            </button>
            <button
                type="button"
                id="form-builder-schema-copy"
                class="form-builder-schema-modal__btn form-builder-schema-modal__btn--primary"
            >
                Copy JSON
            </button>
        </div>
    </div>
</div>
