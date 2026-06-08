@props([
    'submissionUrl' => url('/forms/submit'),
    'defaultTitle' => 'Untitled Form',
])

<section class="form-builder-page-header">
    <div class="form-builder-container">
        <div class="form-builder-page-header__hero">
            <h1 class="form-builder-page-header__title">Create Form</h1>
            <p class="form-builder-page-header__subtitle">
                Design, configure, and preview your form fields.
            </p>
        </div>

        <div class="form-builder-meta-card">
            <div class="form-builder-meta-card__main">
                <label for="form-builder-title" class="form-builder-meta-card__label">Form name</label>
                <input
                    type="text"
                    id="form-builder-title"
                    name="form_title"
                    value="{{ $defaultTitle }}"
                    maxlength="200"
                    placeholder="Untitled form"
                    class="form-builder-meta-card__input"
                >
            </div>
            <p
                id="form-builder-char-count"
                class="form-builder-meta-card__count"
                aria-live="polite"
            >
                {{ strlen($defaultTitle) }} / 200
            </p>
            <div class="form-builder-meta-card__url-wrap">
                <span class="form-builder-meta-card__url-label">Submission URL</span>
                <code id="form-builder-submission-url" class="form-builder-meta-card__url-pill">{{ $submissionUrl }}</code>
            </div>
        </div>

        <div class="form-builder-toolbar">
            <nav class="form-builder-toolbar__tabs" aria-label="Form builder sections">
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
            </nav>
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
                <span data-fb-preview-label>Preview</span>
            </button>
        </div>
    </div>
</section>
