@props([
    'label' => '',
    'required' => false,
    'name' => '',
    'options' => [],
    'disabled' => true,
])

<div data-fb-field-preview="radio">
    <x-form-builder.fields.label :label="$label" :required="$required" />
    <div data-fb-part="options" class="space-y-2">
        @foreach ($options as $index => $option)
            <label class="flex items-center gap-2 text-sm text-gray-700">
                <input
                    type="radio"
                    name="{{ $name }}"
                    value="{{ $option }}"
                    @if($disabled) disabled @endif
                    @checked($index === 0)
                >
                <span>{{ $option }}</span>
            </label>
        @endforeach
    </div>
    <template data-fb-option-row>
        <label class="flex items-center gap-2 text-sm text-gray-700">
            <input type="radio" data-fb-part="option-input" @if($disabled) disabled @endif>
            <span data-fb-part="option-label"></span>
        </label>
    </template>
</div>
