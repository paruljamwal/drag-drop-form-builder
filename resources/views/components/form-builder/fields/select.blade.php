@props([
    'label' => '',
    'required' => false,
    'options' => [],
    'inputClass' => 'form-builder-preview-input',
    'disabled' => true,
])

<div data-fb-field-preview="select">
    <x-form-builder.fields.label :label="$label" :required="$required" />
    <select
        data-fb-part="input"
        @if($disabled) disabled @endif
        class="{{ $inputClass }}"
    >
        <option value="">Select an option</option>
        @foreach ($options as $option)
            <option value="{{ $option }}">{{ $option }}</option>
        @endforeach
    </select>
</div>
