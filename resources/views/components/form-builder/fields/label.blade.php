@props([
    'label' => '',
    'required' => false,
])

<label {{ $attributes->merge(['class' => 'mb-1.5 block text-sm font-medium text-gray-700']) }}>
    <span data-fb-part="label-text">{{ $label }}</span>
    <span data-fb-part="required" @class(['text-red-500', 'hidden' => ! $required])> *</span>
</label>
