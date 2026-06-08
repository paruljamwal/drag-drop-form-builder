@props([
    'submissionUrl' => url('/forms/submit'),
    'defaultTitle' => 'Untitled Form',
])

<header class="form-builder-header">
    <div class="form-builder-header__top">
        <div class="form-builder-header__title-block">
            <label for="form-builder-title" class="form-builder-header__eyebrow">Form name</label>
            <input
                type="text"
                id="form-builder-title"
                name="form_title"
                value="{{ $defaultTitle }}"
                maxlength="200"
                placeholder="Untitled form"
                class="form-builder-header__title-input"
            >
            <div class="form-builder-header__url-row">
                <span class="form-builder-header__url-label">Submission URL</span>
                <code id="form-builder-submission-url" class="form-builder-header__url-value">{{ $submissionUrl }}</code>
            </div>
        </div>
        <p
            id="form-builder-char-count"
            class="form-builder-header__char-count"
            aria-live="polite"
        >
            {{ strlen($defaultTitle) }} / 200
        </p>
    </div>

    <nav class="form-builder-header__nav" aria-label="Form builder sections">
        <div class="form-builder-header__tabs">
            <button
                type="button"
                class="form-builder-tab form-builder-tab--active"
                aria-current="page"
            >
                Form Editor
            </button>
            <button
                type="button"
                class="form-builder-tab form-builder-tab--inactive"
                disabled
            >
                Settings
            </button>
        </div>
        <button
            type="button"
            id="form-builder-preview-toggle"
            class="form-builder-preview-toggle"
            aria-pressed="false"
        >
            <svg class="form-builder-preview-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
            Preview
        </button>
    </nav>
</header>
