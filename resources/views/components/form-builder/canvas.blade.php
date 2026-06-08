<section
    id="form-builder-canvas"
    class="form-builder-canvas"
    aria-label="Form canvas"
>
    <div class="form-builder-canvas__surface">
        <header class="form-builder-canvas__head">
            <h2 class="form-builder-canvas__head-title">Form Canvas</h2>
            <p class="form-builder-canvas__head-subtitle">Drag fields here to build your form</p>
        </header>

        <div
            id="form-builder-canvas-empty"
            class="form-builder-canvas__empty"
        >
            <div class="form-builder-canvas__dropzone" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="8" y="6" width="32" height="36" rx="4" />
                    <path stroke-linecap="round" d="M16 16h16M16 24h10M16 32h14" />
                    <circle cx="34" cy="34" r="8" fill="#F3F6FF" stroke="#5B6FBE" stroke-width="1.5" />
                    <path stroke-linecap="round" stroke="#5B6FBE" d="M34 31v6M31 34h6" />
                </svg>
            </div>
            <p class="form-builder-canvas__empty-hint">Drop a field from the panel on the right</p>
        </div>

        <div
            id="form-builder-canvas-fields"
            class="form-builder-canvas__fields hidden"
            role="list"
        ></div>
    </div>
</section>
