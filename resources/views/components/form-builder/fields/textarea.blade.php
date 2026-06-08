@props([
    'label' => '',
    'placeholder' => '',
    'required' => false,
    'value' => '',
    'inputClass' => 'form-builder-preview-input min-h-[80px] resize-none',
    'disabled' => true,
])

<div data-fb-field-preview="textarea">
    <x-form-builder.fields.label :label="$label" :required="$required" />
    <textarea
        data-fb-part="input"
        placeholder="{{ $placeholder }}"
        @if($disabled) disabled @endif
        class="{{ $inputClass }}"
    >{{ $value }}</textarea>
</div>
