import { FIELD_TYPES } from './constants';

/** Short descriptions for palette tiles (display only). */
const FIELD_DESCRIPTIONS = {
    text: 'Single-line answer',
    textarea: 'Multi-line text',
    number: 'Numeric input',
    email: 'Email address',
    phone: 'Phone number',
    select: 'Pick one option',
    radio: 'Single choice list',
    checkbox: 'Multiple choices',
    date: 'Calendar date',
    file: 'Upload a file',
    title: 'Section heading',
    description: 'Helper text block',
    newline: 'Vertical spacing',
    page_break: 'Split into pages',
    hidden: 'Hidden value field',
    state: 'US state selector',
    city: 'City selector',
    state_city: 'State and city pair',
};

export function initPalette() {
    const root = document.getElementById('form-builder-palette');

    if (!root) {
        return;
    }

    renderFieldTiles(root);
    initSubTabs(root);
}

function renderFieldTiles(root) {
    const grid = root.querySelector('#form-builder-palette-grid');

    if (!grid) {
        return;
    }

    grid.innerHTML = FIELD_TYPES.map((field) => {
        const description = FIELD_DESCRIPTIONS[field.type] ?? 'Form field';

        return `
        <div
            class="form-builder-palette-tile"
            data-field-type="${field.type}"
            draggable="true"
            role="listitem"
            aria-label="Drag ${field.label} to canvas"
            tabindex="0"
        >
            <span class="form-builder-palette-tile__icon" aria-hidden="true">${field.icon}</span>
            <div class="form-builder-palette-tile__text">
                <span class="form-builder-palette-tile__label">${field.label}</span>
                <span class="form-builder-palette-tile__description">${description}</span>
            </div>
        </div>
    `;
    }).join('');
}

function initSubTabs(root) {
    const tabs = root.querySelectorAll('[data-palette-tab]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-palette-tab');

            if (target) {
                switchPaletteTab(target);
            }
        });
    });
}

/**
 * @param {string} tabId
 */
export function switchPaletteTab(tabId) {
    const root = document.getElementById('form-builder-palette');

    if (!root) {
        return;
    }

    const tabs = root.querySelectorAll('[data-palette-tab]');
    const panels = root.querySelectorAll('[data-palette-panel]');

    tabs.forEach((item) => {
        const isActive = item.getAttribute('data-palette-tab') === tabId;
        item.classList.toggle('form-builder-subtab--active', isActive);
        item.classList.toggle('form-builder-subtab--inactive', !isActive);
        item.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    panels.forEach((panel) => {
        const isVisible = panel.getAttribute('data-palette-panel') === tabId;
        panel.classList.toggle('hidden', !isVisible);
    });
}
