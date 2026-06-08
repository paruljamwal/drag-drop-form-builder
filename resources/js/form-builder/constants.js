/**
 * Single source of truth for all form builder field types.
 */
export const FIELD_TYPES = [
    { type: 'text', label: 'Text Input', icon: 'T' },
    { type: 'textarea', label: 'Text Area', icon: '¶' },
    { type: 'number', label: 'Number Input', icon: '#' },
    { type: 'email', label: 'Email Input', icon: '@' },
    { type: 'phone', label: 'Phone Input', icon: '☎' },
    { type: 'select', label: 'Dropdown', icon: '▼' },
    { type: 'radio', label: 'Radio Buttons', icon: '◎' },
    { type: 'checkbox', label: 'Checkboxes', icon: '☑' },
    { type: 'date', label: 'Date Picker', icon: '📅' },
    { type: 'file', label: 'File Upload', icon: '📎' },
    { type: 'title', label: 'Title', icon: 'H' },
    { type: 'description', label: 'Description', icon: '≡' },
    { type: 'newline', label: 'New Line', icon: '↵' },
    { type: 'page_break', label: 'Page Break', icon: '—' },
    { type: 'hidden', label: 'Hidden Field', icon: '◌' },
    { type: 'state', label: 'State', icon: '🗺' },
    { type: 'city', label: 'City', icon: '🏙' },
    { type: 'state_city', label: 'State & City Combined', icon: '📍' },
];
