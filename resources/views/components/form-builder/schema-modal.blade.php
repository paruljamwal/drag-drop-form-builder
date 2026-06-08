<div
    id="form-builder-schema-modal"
    class="form-builder-schema-modal hidden"
    role="dialog"
    aria-modal="true"
    aria-labelledby="form-builder-schema-modal-title"
>
    <div class="form-builder-schema-modal__panel">
        <div class="flex items-start justify-between gap-4 border-b border-gray-200 px-5 py-4">
            <div>
                <h2 id="form-builder-schema-modal-title" class="text-lg font-semibold text-gray-900">
                    Form JSON Schema
                </h2>
                <p class="mt-1 text-sm text-gray-500">
                    Copy this JSON for your README or backend integration.
                </p>
            </div>
            <button
                type="button"
                class="form-builder-schema-modal__close"
                data-fb-close-schema-modal
                aria-label="Close"
            >
                &times;
            </button>
        </div>

        <div class="p-5">
            <textarea
                id="form-builder-schema-output"
                class="form-builder-schema-modal__output"
                readonly
                rows="18"
                aria-label="Form JSON schema"
            ></textarea>
        </div>

        <div class="flex flex-col-reverse gap-2 border-t border-gray-200 px-5 py-4 sm:flex-row sm:justify-end">
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
