import { serializeFormSchema, serializeFormSchemaJson } from './schema';

export function initSchemaOutput() {
    const nextButton = document.getElementById('form-builder-next');
    const modal = document.getElementById('form-builder-schema-modal');
    const output = document.getElementById('form-builder-schema-output');
    const copyButton = document.getElementById('form-builder-schema-copy');
    const copyFooterButton = document.getElementById('form-builder-schema-copy-footer');
    const closeButtons = modal?.querySelectorAll('[data-fb-close-schema-modal]');

    if (!nextButton || !modal || !output) {
        return;
    }

    nextButton.addEventListener('click', () => {
        const schema = serializeFormSchema();
        const json = serializeFormSchemaJson(true);

        console.log('Form Builder schema:', schema);
        console.log(json);

        output.value = json;
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    });

    const copyHandlers = [copyButton, copyFooterButton].filter(Boolean);

    copyHandlers.forEach((button) => {
        button.addEventListener('click', () => copySchemaJson(output, copyHandlers));
    });

    closeButtons?.forEach((button) => {
        button.addEventListener('click', () => closeSchemaModal(modal));
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeSchemaModal(modal);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeSchemaModal(modal);
        }
    });
}

/**
 * @param {HTMLElement} modal
 */
function closeSchemaModal(modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

/**
 * @param {HTMLTextAreaElement} output
 * @param {HTMLElement[]} copyButtons
 */
async function copySchemaJson(output, copyButtons) {
    const json = output.value;

    try {
        await navigator.clipboard.writeText(json);
    } catch {
        output.select();
        document.execCommand('copy');
    }

    copyButtons.forEach((button) => showCopyFeedback(button));
}

/**
 * @param {HTMLElement} button
 */
function showCopyFeedback(button) {
    const label = button.querySelector('[data-fb-copy-label]');

    if (label instanceof HTMLElement) {
        const originalText = label.textContent;
        label.textContent = 'Copied!';
        button.disabled = true;

        window.setTimeout(() => {
            label.textContent = originalText;
            button.disabled = false;
        }, 1500);

        return;
    }

    const originalLabel = button.getAttribute('aria-label') || 'Copy JSON';
    button.classList.add('form-builder-schema-modal__copy--copied');
    button.setAttribute('aria-label', 'Copied!');
    button.setAttribute('title', 'Copied!');
    button.disabled = true;

    window.setTimeout(() => {
        button.classList.remove('form-builder-schema-modal__copy--copied');
        button.setAttribute('aria-label', originalLabel);
        button.setAttribute('title', originalLabel);
        button.disabled = false;
    }, 1500);
}
