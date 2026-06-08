import { serializeFormSchema, serializeFormSchemaJson } from './schema';

export function initSchemaOutput() {
    const nextButton = document.getElementById('form-builder-next');
    const modal = document.getElementById('form-builder-schema-modal');
    const output = document.getElementById('form-builder-schema-output');
    const copyButton = document.getElementById('form-builder-schema-copy');
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

    copyButton?.addEventListener('click', async () => {
        const json = output.value;

        try {
            await navigator.clipboard.writeText(json);
            showCopyFeedback(copyButton, 'Copied!');
        } catch {
            output.select();
            document.execCommand('copy');
            showCopyFeedback(copyButton, 'Copied!');
        }
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
 * @param {HTMLElement} button
 * @param {string} message
 */
function showCopyFeedback(button, message) {
    const originalText = button.textContent;
    button.textContent = message;
    button.disabled = true;

    window.setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
}
