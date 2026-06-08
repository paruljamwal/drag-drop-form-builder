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
            <div class="form-builder-schema-modal__output-wrap">
                <button
                    type="button"
                    id="form-builder-schema-copy"
                    class="form-builder-schema-modal__copy"
                    aria-label="Copy JSON"
                    title="Copy JSON"
                >
                    <svg class="form-builder-schema-modal__copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <svg class="form-builder-schema-modal__copied-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5" />
                    </svg>
                </button>
                <textarea
                    id="form-builder-schema-output"
                    class="form-builder-schema-modal__output"
                    readonly
                    rows="18"
                    aria-label="Form JSON schema"
                ></textarea>
            </div>
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
                id="form-builder-schema-copy-footer"
                class="form-builder-schema-modal__btn form-builder-schema-modal__btn--primary"
            >
                <svg class="form-builder-schema-modal__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span data-fb-copy-label>Copy JSON</span>
            </button>
        </div>
    </div>
</div>
