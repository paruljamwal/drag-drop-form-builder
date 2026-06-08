@props([
    'label' => '',
    'placeholder' => '',
    'required' => false,
    'value' => '',
    'inputClass' => 'form-builder-preview-input',
    'disabled' => true,
])

<div data-fb-field-preview="text">
    <x-form-builder.fields.label :label="$label" :required="$required" />
    <input
        type="text"
        data-fb-part="input"
        value="{{ $value }}"
        placeholder="{{ $placeholder }}"
        @if($disabled) disabled @endif
        class="{{ $inputClass }}"
    >
</div>
