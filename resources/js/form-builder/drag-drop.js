import { addField } from './state';

const DRAG_MIME = 'application/x-form-builder-field';

export function initDragDrop() {
    initPaletteDragSources();
    initCanvasDropTarget();
}

function initPaletteDragSources() {
    const grid = document.getElementById('form-builder-palette-grid');

    if (!grid) {
        return;
    }

    grid.addEventListener('dragstart', (event) => {
        const tile = event.target.closest('[data-field-type]');

        if (!tile || !event.dataTransfer) {
            return;
        }

        const fieldType = tile.getAttribute('data-field-type');

        event.dataTransfer.setData(DRAG_MIME, fieldType);
        event.dataTransfer.setData('text/plain', fieldType);
        event.dataTransfer.effectAllowed = 'copy';
        tile.classList.add('form-builder-palette-tile--dragging');
    });

    grid.addEventListener('dragend', (event) => {
        const tile = event.target.closest('[data-field-type]');
        tile?.classList.remove('form-builder-palette-tile--dragging');
    });
}

function initCanvasDropTarget() {
    const canvas = document.getElementById('form-builder-canvas');

    if (!canvas) {
        return;
    }

    canvas.addEventListener('dragover', (event) => {
        event.preventDefault();

        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'copy';
        }

        canvas.classList.add('form-builder-canvas--drag-over');
    });

    canvas.addEventListener('dragleave', (event) => {
        if (!canvas.contains(event.relatedTarget)) {
            canvas.classList.remove('form-builder-canvas--drag-over');
        }
    });

    canvas.addEventListener('drop', (event) => {
        event.preventDefault();
        canvas.classList.remove('form-builder-canvas--drag-over');

        const fieldType = event.dataTransfer?.getData(DRAG_MIME)
            || event.dataTransfer?.getData('text/plain');

        if (!fieldType) {
            return;
        }

        addField(fieldType);
    });
}
