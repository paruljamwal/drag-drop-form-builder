@props([
    'label' => '',
    'required' => false,
])

<label {{ $attributes->merge(['class' => 'form-builder-preview-label']) }}>
    <span data-fb-part="label-text">{{ $label }}</span>
    <span data-fb-part="required" @class(['text-red-500', 'hidden' => ! $required])> *</span>
</label>
