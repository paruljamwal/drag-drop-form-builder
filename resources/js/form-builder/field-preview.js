import { getFieldTypeMeta, PREVIEW_FIELD_TYPES } from './constants';

/**
 * @param {import('./constants').FormField} field
 * @returns {string}
 */
export function renderFieldPreview(field) {
    if (!PREVIEW_FIELD_TYPES.includes(field.type)) {
        return `
            <p class="text-sm text-gray-500">
                Preview for <span class="font-medium text-gray-700">${escapeHtml(field.label)}</span> coming soon.
            </p>
        `;
    }

    const label = `
        <label class="mb-1.5 block text-sm font-medium text-gray-700">
            ${escapeHtml(field.label)}${field.required ? '<span class="text-red-500"> *</span>' : ''}
        </label>
    `;

    switch (field.type) {
        case 'textarea':
            return `
                ${label}
                <textarea
                    class="form-builder-preview-input min-h-[80px] resize-none"
                    placeholder="${escapeHtml(field.placeholder)}"
                    disabled
                ></textarea>
            `;

        case 'select':
            return `
                ${label}
                <select class="form-builder-preview-input" disabled>
                    <option value="">Select an option</option>
                    ${field.options.map((option) => `<option>${escapeHtml(option)}</option>`).join('')}
                </select>
            `;

        case 'radio':
            return `
                ${label}
                <div class="space-y-2">
                    ${field.options.map((option, index) => `
                        <label class="flex items-center gap-2 text-sm text-gray-700">
                            <input type="radio" name="${escapeHtml(field.id)}" disabled ${index === 0 ? 'checked' : ''}>
                            <span>${escapeHtml(option)}</span>
                        </label>
                    `).join('')}
                </div>
            `;

        case 'checkbox':
            return `
                ${label}
                <div class="space-y-2">
                    ${field.options.map((option) => `
                        <label class="flex items-center gap-2 text-sm text-gray-700">
                            <input type="checkbox" disabled>
                            <span>${escapeHtml(option)}</span>
                        </label>
                    `).join('')}
                </div>
            `;

        default: {
            const inputType = field.type === 'phone' ? 'tel' : field.type;
            return `
                ${label}
                <input
                    type="${escapeHtml(inputType)}"
                    class="form-builder-preview-input"
                    placeholder="${escapeHtml(field.placeholder)}"
                    disabled
                >
            `;
        }
    }
}

/**
 * @param {import('./constants').FormField} field
 * @returns {string}
 */
export function renderFieldCard(field) {
    const meta = getFieldTypeMeta(field.type);

    return `
        <article class="form-builder-field-card" data-field-id="${escapeHtml(field.id)}" role="listitem">
            <header class="form-builder-field-card__header">
                <span class="form-builder-field-card__type">${escapeHtml(meta?.label ?? field.type)}</span>
            </header>
            <div class="form-builder-field-card__body">
                ${renderFieldPreview(field)}
            </div>
        </article>
    `;
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
