# Drag & Drop Form Builder

A Laravel 8 form builder assignment that lets users compose forms visually using drag-and-drop, configure field options, reorder fields, and export a JSON schema for backend integration.

**Live entry point:** `/` (Form Builder)

---

## Project Setup

### Prerequisites

- PHP **7.3+** or **8.x**
- Composer
- Node.js **16+** and npm
- MySQL is optional for this assignment (the builder runs without database persistence)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/paruljamwal/drag-drop-form-builder.git
cd drag-drop-form-builder

# 2. Install PHP dependencies
composer install

# 3. Environment file
cp .env.example .env
php artisan key:generate

# 4. Install frontend dependencies
npm install

# 5. Build assets
npm run dev
```

For production assets:

```bash
npm run prod
```

During development, you can watch for changes:

```bash
npm run watch
```

---

## How to Run

Start the Laravel development server:

```bash
php artisan serve
```

Open the form builder in your browser:

```
http://127.0.0.1:8000
```

If you change Blade, CSS, or JavaScript source files, rebuild assets with `npm run dev` (or use `npm run watch`).

---

## Drag-and-Drop Approach

**Library choice:** Native **HTML5 Drag and Drop API** (no SortableJS, react-dnd, or similar).

**Rationale:**

- The assignment scope is a focused builder UI; native DnD is sufficient for palette → canvas drops and in-canvas reordering.
- Avoids an extra dependency and keeps the bundle small.
- Works well with server-rendered Blade templates and vanilla JavaScript modules.
- Custom MIME types separate concerns:
  - `application/x-form-builder-field` — adding fields from the palette
  - `application/x-form-builder-reorder` — reordering existing canvas fields

Palette tiles are drag sources; the canvas is a drop target with visual drag-over feedback. Field reordering uses the move handle on each card with before/after drop indicators.

---

## Assumptions

- The builder is a **frontend-only** workflow for this assignment; form submission URL is displayed and included in JSON but not posted to a backend endpoint.
- **18 field types** appear in the palette; **8 core types** have live canvas previews (text, textarea, number, email, phone, select, radio, checkbox). Remaining types show a placeholder preview but can still be added and configured.
- Form state is stored in **browser `localStorage`** (`form-builder-draft`), not in the database.
- The existing LMS admin layout (sidebar, fixed header) is reused; form builder styles account for the fixed header offset.
- **Settings** tab and **Cancel** button are present in the UI as placeholders without full workflow implementation.
- Tailwind CSS is scoped to `.form-builder` to avoid conflicts with the existing Bootstrap-based admin theme.

---

## Features Completed

| Step | Feature |
|------|---------|
| 1 | Form builder layout — header, canvas, palette, footer |
| 2 | Field palette with 18 field types in a 2-column grid |
| 3 | Drag-and-drop from palette to canvas with unique field IDs |
| 4 | Blade field preview components cloned from `<template>` markup |
| 5 | Field card actions — move, edit, duplicate, delete |
| 6 | Field options panel — label, placeholder, validation, options, CSS class, required, remove |
| 7 | Canvas field reordering via move handle |
| 8 | JSON schema output via **Next** button (modal + `console.log`) |
| 9 | Polish — localStorage persistence, delete confirmation, preview mode, drag-over styling |

### Field options supported

- Label, placeholder, default value, required flag, CSS class
- Min/max length (text-based fields)
- Options list (select, radio, checkbox)
- Remove element

### JSON schema shape

- **Form level:** `title`, `submissionUrl`
- **Field level:** `id`, `type`, `label`, `placeholder`, `required`, `cssClass`, `defaultValue`, `minLength`, `maxLength`, `options`, `order`

---

## Bonus Features Completed

- **localStorage persistence** — draft restored on page reload
- **Delete confirmation** — confirm dialog before removing a field
- **Preview mode** — toggle hides palette and field toolbars for a clean form view
- **Drag-over feedback** — blue border on canvas while dragging from palette
- **Copy JSON** — clipboard icon on schema modal with footer copy action

---

## Sample JSON Output

Click **Next** in the footer to open the schema modal. Example output:

```json
{
  "title": "Contact Form",
  "submissionUrl": "http://127.0.0.1:8000/forms/submit",
  "fields": [
    {
      "id": "field_1717843200000_1",
      "type": "text",
      "label": "Full Name",
      "placeholder": "Enter your name",
      "required": true,
      "cssClass": "",
      "defaultValue": "",
      "minLength": 2,
      "maxLength": 100,
      "options": [],
      "order": 0
    },
    {
      "id": "field_1717843200000_2",
      "type": "email",
      "label": "Email Address",
      "placeholder": "you@example.com",
      "required": true,
      "cssClass": "",
      "defaultValue": "",
      "minLength": null,
      "maxLength": null,
      "options": [],
      "order": 1
    },
    {
      "id": "field_1717843200000_3",
      "type": "select",
      "label": "Department",
      "placeholder": "Choose one",
      "required": false,
      "cssClass": "",
      "defaultValue": "",
      "minLength": null,
      "maxLength": null,
      "options": [
        "Sales",
        "Support",
        "Engineering"
      ],
      "order": 2
    }
  ]
}
```

---

## Project Structure

```
├── app/Http/Controllers/GuestController.php   # Serves the form builder page
├── routes/web.php                             # GET / → form builder
├── resources/
│   ├── views/
│   │   ├── form.blade.php                     # Main form builder page
│   │   ├── layouts/admin.blade.php            # LMS admin shell
│   │   └── components/form-builder/           # Blade UI components
│   │       ├── header.blade.php               # Title, tabs, preview toggle
│   │       ├── canvas.blade.php                 # Drop zone + field list
│   │       ├── palette.blade.php                # Field type palette
│   │       ├── footer.blade.php                 # Cancel / Next actions
│   │       ├── schema-modal.blade.php           # JSON output modal
│   │       ├── field-options-form.blade.php     # Field configuration panel
│   │       ├── field-templates.blade.php        # <template> previews for JS
│   │       └── fields/                          # Per-type preview fragments
│   ├── js/form-builder/                       # Vanilla JS modules
│   │   ├── index.js                           # Bootstrap all modules
│   │   ├── constants.js                       # Field types + defaults
│   │   ├── state.js                           # Fields array + CRUD/reorder
│   │   ├── drag-drop.js                       # Palette → canvas DnD
│   │   ├── field-reorder.js                   # In-canvas reorder DnD
│   │   ├── canvas.js                          # Render field cards
│   │   ├── field-preview.js                   # Clone Blade templates
│   │   ├── field-actions.js                   # Edit, duplicate, delete
│   │   ├── field-options.js                   # Options panel binding
│   │   ├── field-config.js                    # Type-aware option visibility
│   │   ├── schema.js / schema-output.js       # JSON serialization + modal
│   │   ├── storage.js / persistence.js        # localStorage draft
│   │   ├── preview-mode.js                    # Preview toggle
│   │   └── confirm.js                         # Delete confirmation
│   └── css/form-builder.css                   # Tailwind entry (scoped)
├── public/css/form-builder.css                # Compiled CSS
├── public/js/form-builder.js                  # Compiled JS bundle
├── tailwind.config.js                         # Tailwind (important: .form-builder)
└── webpack.mix.js                             # Laravel Mix build config
```

### Architecture overview

```
Blade (server templates)  →  <template> HTML fragments
        ↓
Vanilla JS modules        →  state, DnD, render, serialize
        ↓
Tailwind CSS              →  scoped under .form-builder
```

State lives in a single in-memory `fields` array (`state.js`). UI modules subscribe to changes and re-render the canvas or options panel. On **Next**, the current state is serialized to JSON and shown in a modal.

---

## Tech Stack

- **Backend:** Laravel 8, Blade
- **Frontend:** Vanilla JavaScript (ES modules via Laravel Mix), Tailwind CSS 3
- **Build:** Laravel Mix, PostCSS, Autoprefixer
- **DnD:** HTML5 Drag and Drop API

---

## License

This project extends a Laravel application scaffold and is provided for assignment/evaluation purposes.
