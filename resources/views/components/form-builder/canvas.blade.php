<section
    id="form-builder-canvas"
    class="form-builder-canvas"
    aria-label="Form canvas"
>
    <div class="form-builder-canvas__surface">
        <div
            id="form-builder-canvas-empty"
            class="form-builder-canvas__empty"
        >
            <div class="form-builder-canvas__empty-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="8" y="6" width="32" height="36" rx="4" />
                    <path stroke-linecap="round" d="M16 16h16M16 24h10M16 32h14" />
                    <circle cx="34" cy="34" r="8" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5" />
                    <path stroke-linecap="round" stroke="#4F46E5" d="M34 31v6M31 34h6" />
                </svg>
            </div>
            <h2 class="form-builder-canvas__empty-title">Build your form here</h2>
            <p class="form-builder-canvas__empty-text">
                Drag a field from the panel on the right and drop it into this canvas.
            </p>
        </div>

        <div
            id="form-builder-canvas-fields"
            class="form-builder-canvas__fields hidden"
            role="list"
        ></div>
    </div>
</section>
