@props([
    'submissionUrl' => url('/forms/submit'),
    'defaultTitle' => 'Untitled Form',
])

<header class="border-b border-gray-200 bg-white">
    <div class="px-6 py-5">
        <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0 flex-1">
                <label for="form-builder-title" class="sr-only">Form title</label>
                <input
                    type="text"
                    id="form-builder-title"
                    name="form_title"
                    value="{{ $defaultTitle }}"
                    maxlength="200"
                    placeholder="Enter form title"
                    class="w-full border-0 bg-transparent p-0 text-2xl font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                >
                <p class="mt-2 text-sm text-gray-500">
                    <span class="font-medium text-gray-600">Form submission URL:</span>
                    <span id="form-builder-submission-url" class="break-all">{{ $submissionUrl }}</span>
                </p>
            </div>
            <p
                id="form-builder-char-count"
                class="mt-2 shrink-0 text-sm text-gray-500 sm:mt-1"
                aria-live="polite"
            >
                {{ strlen($defaultTitle) }} / 200
            </p>
        </div>
    </div>

    <nav class="flex items-center justify-between border-t border-gray-100 px-6" aria-label="Form builder sections">
        <div class="flex">
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
            Preview
        </button>
    </nav>
</header>
