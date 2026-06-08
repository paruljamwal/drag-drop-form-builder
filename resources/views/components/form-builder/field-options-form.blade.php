<form id="form-builder-field-options-form" class="form-builder-options-form" novalidate>
    <div class="form-builder-options__section">
        <p class="form-builder-options__section-title">Field</p>
        <div class="form-builder-options__type-badge">
            <span class="form-builder-options__type-label">Type</span>
            <span id="form-builder-field-options-type" class="form-builder-options__type-value"></span>
        </div>

        <div data-fb-config-group="label">
            <label for="fb-config-label" class="form-builder-option-label">Label</label>
            <input type="text" id="fb-config-label" name="label" class="form-builder-option-input" autocomplete="off">
        </div>

        <div data-fb-config-group="placeholder" class="hidden">
            <label for="fb-config-placeholder" class="form-builder-option-label">Placeholder</label>
            <input type="text" id="fb-config-placeholder" name="placeholder" class="form-builder-option-input" autocomplete="off">
        </div>

        <div data-fb-config-group="defaultValue" class="hidden">
            <label for="fb-config-default-value" class="form-builder-option-label">Default value</label>
            <input type="text" id="fb-config-default-value" name="value" class="form-builder-option-input" autocomplete="off">
        </div>
    </div>

    <div data-fb-config-group="options" class="form-builder-options__section hidden">
        <div class="form-builder-options__section-header">
            <p class="form-builder-options__section-title">Options</p>
            <button type="button" id="fb-config-add-option" class="form-builder-options__link-btn">
                + Add option
            </button>
        </div>
        <div id="fb-config-options-list" class="form-builder-options__options-list"></div>
    </div>

    <div class="form-builder-options__section">
        <p class="form-builder-options__section-title">Validation</p>

        <div data-fb-config-group="minMaxLength" class="hidden">
            <p class="form-builder-option-label">Character limits</p>
            <div class="form-builder-options__row">
                <div>
                    <label for="fb-config-min-length" class="form-builder-option-sublabel">Min</label>
                    <input type="number" id="fb-config-min-length" name="minLength" min="0" class="form-builder-option-input" placeholder="0">
                </div>
                <div>
                    <label for="fb-config-max-length" class="form-builder-option-sublabel">Max</label>
                    <input type="number" id="fb-config-max-length" name="maxLength" min="0" class="form-builder-option-input" placeholder="∞">
                </div>
            </div>
        </div>

        <div data-fb-config-group="required">
            <label class="form-builder-options__checkbox">
                <input type="checkbox" id="fb-config-required" name="required">
                <span>Required field</span>
            </label>
        </div>
    </div>

    <div class="form-builder-options__section">
        <p class="form-builder-options__section-title">Appearance</p>

        <div data-fb-config-group="cssClass">
            <label for="fb-config-css-class" class="form-builder-option-label">CSS class</label>
            <input type="text" id="fb-config-css-class" name="cssClass" class="form-builder-option-input" placeholder="custom-class" autocomplete="off">
        </div>
    </div>

    <div data-fb-config-group="removeElement" class="form-builder-options__section form-builder-options__section--danger">
        <button
            type="button"
            id="fb-config-remove-element"
            class="form-builder-option-danger"
        >
            Remove field
        </button>
    </div>
</form>
