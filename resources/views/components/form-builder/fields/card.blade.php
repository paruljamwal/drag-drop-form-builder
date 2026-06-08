@props([
    'typeLabel' => '',
    'fieldId' => '',
])

<article
    {{ $attributes->merge(['class' => 'form-builder-field-card']) }}
    data-field-id="{{ $fieldId }}"
    role="listitem"
>
    <div class="form-builder-field-card__drag-handle">
        <button
            type="button"
            class="form-builder-field-action form-builder-field-action--move"
            data-fb-action="move"
            draggable="true"
            title="Drag to reorder"
            aria-label="Drag to reorder"
        >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="9" cy="6" r="1.5" />
                <circle cx="15" cy="6" r="1.5" />
                <circle cx="9" cy="12" r="1.5" />
                <circle cx="15" cy="12" r="1.5" />
                <circle cx="9" cy="18" r="1.5" />
                <circle cx="15" cy="18" r="1.5" />
            </svg>
        </button>
    </div>

    <div class="form-builder-field-card__content">
        <header class="form-builder-field-card__header">
            <span class="form-builder-field-card__type" data-fb-part="type-label">{{ $typeLabel }}</span>
            <x-form-builder.fields.card-actions />
        </header>
        <div class="form-builder-field-card__body" data-fb-slot="body">
            {{ $slot }}
        </div>
    </div>
</article>
