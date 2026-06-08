<form id="form-builder-field-options-form" class="space-y-4" novalidate>
    <div class="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Editing field</p>
        <p id="form-builder-field-options-type" class="mt-1 text-sm font-semibold text-gray-900"></p>
    </div>

    <div data-fb-config-group="label">
        <label for="fb-config-label" class="form-builder-option-label">Label</label>
        <input type="text" id="fb-config-label" name="label" class="form-builder-option-input" autocomplete="off">
    </div>

    <div data-fb-config-group="placeholder" class="hidden">
        <label for="fb-config-placeholder" class="form-builder-option-label">Placeholder</label>
        <input type="text" id="fb-config-placeholder" name="placeholder" class="form-builder-option-input" autocomplete="off">
    </div>

    <div data-fb-config-group="minMaxLength" class="hidden">
        <p class="form-builder-option-label">Character limits</p>
        <div class="grid grid-cols-2 gap-2">
            <div>
                <label for="fb-config-min-length" class="mb-1 block text-xs text-gray-500">Min characters</label>
                <input type="number" id="fb-config-min-length" name="minLength" min="0" class="form-builder-option-input" placeholder="Min">
            </div>
            <div>
                <label for="fb-config-max-length" class="mb-1 block text-xs text-gray-500">Max characters</label>
                <input type="number" id="fb-config-max-length" name="maxLength" min="0" class="form-builder-option-input" placeholder="Max">
            </div>
        </div>
    </div>

    <div data-fb-config-group="options" class="hidden">
        <div class="mb-2 flex items-center justify-between">
            <p class="form-builder-option-label mb-0">Options</p>
            <button type="button" id="fb-config-add-option" class="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                + Add option
            </button>
        </div>
        <div id="fb-config-options-list" class="space-y-2"></div>
    </div>

    <div data-fb-config-group="required">
        <label class="flex cursor-pointer items-center gap-2">
            <input type="checkbox" id="fb-config-required" name="required" class="h-4 w-4 rounded border-gray-300 text-indigo-600">
            <span class="text-sm font-medium text-gray-700">Required field</span>
        </label>
    </div>

    <div data-fb-config-group="cssClass">
        <label for="fb-config-css-class" class="form-builder-option-label">CSS Class</label>
        <input type="text" id="fb-config-css-class" name="cssClass" class="form-builder-option-input" placeholder="custom-class" autocomplete="off">
    </div>

    <div data-fb-config-group="defaultValue" class="hidden">
        <label for="fb-config-default-value" class="form-builder-option-label">Default value</label>
        <input type="text" id="fb-config-default-value" name="value" class="form-builder-option-input" autocomplete="off">
    </div>

    <div data-fb-config-group="removeElement" class="border-t border-gray-200 pt-4">
        <button
            type="button"
            id="fb-config-remove-element"
            class="form-builder-option-danger w-full"
        >
            Remove Element
        </button>
    </div>
</form>
