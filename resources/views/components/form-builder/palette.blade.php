<aside
    id="form-builder-palette"
    class="form-builder-palette"
    aria-label="Field palette"
>
    <div class="form-builder-palette__panel">
        <nav class="form-builder-palette__tabs" aria-label="Palette sections">
            <button
                type="button"
                class="form-builder-subtab form-builder-subtab--active"
                data-palette-tab="add-fields"
                aria-selected="true"
            >
                Add Fields
            </button>
            <button
                type="button"
                class="form-builder-subtab form-builder-subtab--inactive"
                data-palette-tab="field-options"
                aria-selected="false"
            >
                Field Options
            </button>
        </nav>

        <div class="form-builder-palette__body" data-palette-panel="add-fields">
            <p class="form-builder-palette__hint">Drag fields onto the canvas</p>
            <div
                id="form-builder-palette-grid"
                class="form-builder-palette__grid"
                role="list"
            ></div>
        </div>

        <div
            class="form-builder-palette__body hidden"
            data-palette-panel="field-options"
        >
            <div
                id="form-builder-field-options-empty"
                class="form-builder-options-empty"
            >
                <div class="form-builder-options-empty__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 10v2m0-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4" />
                    </svg>
                </div>
                <p class="form-builder-options-empty__title">No field selected</p>
                <p class="form-builder-options-empty__text">
                    Click a field on the canvas or use the edit icon to configure it.
                </p>
            </div>

            <div id="form-builder-field-options-content" class="hidden">
                <x-form-builder.field-options-form />
            </div>
        </div>
    </div>
</aside>
