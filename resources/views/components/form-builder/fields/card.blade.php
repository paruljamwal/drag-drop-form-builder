@props([
    'typeLabel' => '',
    'fieldId' => '',
])

<article
    {{ $attributes->merge(['class' => 'form-builder-field-card']) }}
    data-field-id="{{ $fieldId }}"
    role="listitem"
>
    <header class="form-builder-field-card__header">
        <span class="form-builder-field-card__type" data-fb-part="type-label">{{ $typeLabel }}</span>
    </header>
    <div class="form-builder-field-card__body" data-fb-slot="body">
        {{ $slot }}
    </div>
</article>
