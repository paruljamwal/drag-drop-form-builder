import { FIELD_TYPES } from './constants';

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

    grid.innerHTML = FIELD_TYPES.map((field) => `
        <div
            class="form-builder-palette-tile"
            data-field-type="${field.type}"
            draggable="true"
            role="listitem"
            aria-label="Drag ${field.label} to canvas"
            tabindex="0"
        >
            <span class="form-builder-palette-tile__icon" aria-hidden="true">${field.icon}</span>
            <span class="form-builder-palette-tile__label">${field.label}</span>
        </div>
    `).join('');
}

function initSubTabs(root) {
    const tabs = root.querySelectorAll('[data-palette-tab]');
    const panels = root.querySelectorAll('[data-palette-panel]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-palette-tab');

            tabs.forEach((item) => {
                const isActive = item.getAttribute('data-palette-tab') === target;
                item.classList.toggle('form-builder-subtab--active', isActive);
                item.classList.toggle('form-builder-subtab--inactive', !isActive);
                item.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            panels.forEach((panel) => {
                const isVisible = panel.getAttribute('data-palette-panel') === target;
                panel.classList.toggle('hidden', !isVisible);
            });
        });
    });
}
