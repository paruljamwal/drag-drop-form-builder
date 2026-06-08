@php
    $fieldTypes = [
        ['type' => 'text', 'label' => 'Text Input', 'icon' => 'T'],
        ['type' => 'textarea', 'label' => 'Textarea', 'icon' => '¶'],
        ['type' => 'number', 'label' => 'Number', 'icon' => '#'],
        ['type' => 'select', 'label' => 'Dropdown', 'icon' => '▼'],
        ['type' => 'checkbox', 'label' => 'Checkbox', 'icon' => '☑'],
        ['type' => 'radio', 'label' => 'Radio', 'icon' => '◎'],
    ];
@endphp

<aside class="w-full shrink-0 lg:w-80 lg:min-w-palette" aria-label="Field palette">
    <div class="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div class="border-b border-gray-100 px-4 py-3">
            <h2 class="text-sm font-semibold text-gray-900">Field Palette</h2>
            <p class="mt-0.5 text-xs text-gray-500">Drag a field onto the canvas</p>
        </div>

        <ul class="space-y-2 p-4" role="list">
            @foreach ($fieldTypes as $field)
                <li>
                    <div
                        class="form-builder-palette-item"
                        data-field-type="{{ $field['type'] }}"
                    >
                        <span
                            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-xs font-bold text-indigo-600"
                            aria-hidden="true"
                        >
                            {{ $field['icon'] }}
                        </span>
                        <span>{{ $field['label'] }}</span>
                    </div>
                </li>
            @endforeach
        </ul>
    </div>
</aside>
