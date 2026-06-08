<aside
    id="form-builder-palette"
    class="w-full shrink-0 lg:w-96 lg:min-w-[22rem]"
    aria-label="Field palette"
>
    <div class="rounded-xl border border-gray-200 bg-white shadow-sm">
        <nav class="flex border-b border-gray-100" aria-label="Palette sections">
            <button
                type="button"
                class="form-builder-subtab form-builder-subtab--active flex-1"
                data-palette-tab="add-fields"
                aria-selected="true"
            >
                Add Fields
            </button>
            <button
                type="button"
                class="form-builder-subtab form-builder-subtab--inactive flex-1"
                data-palette-tab="field-options"
                aria-selected="false"
            >
                Field Options
            </button>
        </nav>

        <div
            class="p-4"
            data-palette-panel="add-fields"
        >
            <p class="mb-3 text-xs text-gray-500">Drag a field onto the canvas</p>
            <div
                id="form-builder-palette-grid"
                class="grid grid-cols-2 gap-2"
                role="list"
            ></div>
        </div>

        <div
            class="hidden p-4"
            data-palette-panel="field-options"
        >
            <div
                id="form-builder-field-options-empty"
                class="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 px-4 py-10 text-center"
            >
                <p class="text-sm font-medium text-gray-700">No field selected</p>
                <p class="mt-1 text-xs text-gray-500">
                    Select a field on the canvas to edit its options.
                </p>
            </div>

            <div id="form-builder-field-options-content" class="hidden">
                <div class="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Editing field</p>
                    <p id="form-builder-field-options-label" class="mt-1 text-sm font-semibold text-gray-900"></p>
                    <p id="form-builder-field-options-type" class="mt-0.5 text-xs text-gray-500"></p>
                </div>
                <p class="mt-3 text-xs text-gray-500">
                    Full field options editor will be available in the next step.
                </p>
            </div>
        </div>
    </div>
</aside>
