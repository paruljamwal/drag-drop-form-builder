@props([
    'label' => '',
    'required' => false,
    'name' => '',
    'options' => [],
    'disabled' => true,
])

<div data-fb-field-preview="radio">
    <x-form-builder.fields.label :label="$label" :required="$required" />
    <div data-fb-part="options" class="form-builder-choice-list">
        @foreach ($options as $index => $option)
            <label class="form-builder-choice-row">
                <input
                    type="radio"
                    class="form-builder-choice-input"
                    name="{{ $name }}"
                    value="{{ $option }}"
                    @if($disabled) disabled @endif
                    @checked($index === 0)
                >
                <span class="form-builder-choice-label">{{ $option }}</span>
            </label>
        @endforeach
    </div>
    <template data-fb-option-row>
        <label class="form-builder-choice-row">
            <input type="radio" class="form-builder-choice-input" data-fb-part="option-input" @if($disabled) disabled @endif>
            <span class="form-builder-choice-label" data-fb-part="option-label"></span>
        </label>
    </template>
</div>
