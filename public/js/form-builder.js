/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/form-builder/canvas.js":
/*!*********************************************!*\
  !*** ./resources/js/form-builder/canvas.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCanvas": () => (/* binding */ initCanvas)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./resources/js/form-builder/state.js");
/* harmony import */ var _field_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-preview */ "./resources/js/form-builder/field-preview.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function initCanvas() {
  var root = document.getElementById('form-builder-canvas');
  var emptyState = document.getElementById('form-builder-canvas-empty');
  var fieldsList = document.getElementById('form-builder-canvas-fields');

  if (!root || !emptyState || !fieldsList) {
    return;
  }

  var renderFields = function renderFields(fields) {
    var hasFields = fields.length > 0;
    emptyState.classList.toggle('hidden', hasFields);
    fieldsList.classList.toggle('hidden', !hasFields);
    fieldsList.replaceChildren.apply(fieldsList, _toConsumableArray(fields.map(function (field) {
      return (0,_field_preview__WEBPACK_IMPORTED_MODULE_1__.renderFieldCardElement)(field);
    })));
    highlightSelectedField(fieldsList);
  };

  (0,_state__WEBPACK_IMPORTED_MODULE_0__.onFieldsChange)(renderFields);
  (0,_state__WEBPACK_IMPORTED_MODULE_0__.onSelectionChange)(function () {
    return highlightSelectedField(fieldsList);
  });
}
/**
 * @param {HTMLElement} fieldsList
 */

function highlightSelectedField(fieldsList) {
  var selectedId = (0,_state__WEBPACK_IMPORTED_MODULE_0__.getSelectedFieldId)();
  fieldsList.querySelectorAll('.form-builder-field-card').forEach(function (card) {
    if (!(card instanceof HTMLElement)) {
      return;
    }

    card.classList.toggle('form-builder-field-card--selected', card.dataset.fieldId === selectedId);
  });
}

/***/ }),

/***/ "./resources/js/form-builder/constants.js":
/*!************************************************!*\
  !*** ./resources/js/form-builder/constants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIELD_TYPES": () => (/* binding */ FIELD_TYPES),
/* harmony export */   "PREVIEW_FIELD_TYPES": () => (/* binding */ PREVIEW_FIELD_TYPES),
/* harmony export */   "createDefaultField": () => (/* binding */ createDefaultField),
/* harmony export */   "generateFieldId": () => (/* binding */ generateFieldId),
/* harmony export */   "getFieldTypeMeta": () => (/* binding */ getFieldTypeMeta)
/* harmony export */ });
/**
 * @typedef {Object} FieldTypeMeta
 * @property {string} type
 * @property {string} label
 * @property {string} icon
 */

/**
 * @typedef {Object} FormField
 * @property {string} id
 * @property {string} type
 * @property {string} label
 * @property {string} placeholder
 * @property {string} value
 * @property {number|null} minLength
 * @property {number|null} maxLength
 * @property {string} cssClass
 * @property {boolean} required
 * @property {string[]} options
 */

/** @type {readonly string[]} */
var PREVIEW_FIELD_TYPES = ['text', 'textarea', 'number', 'email', 'phone', 'select', 'radio', 'checkbox'];
var fieldIdCounter = 0;
/**
 * Single source of truth for all form builder field types.
 * @type {FieldTypeMeta[]}
 */

var FIELD_TYPES = [{
  type: 'text',
  label: 'Text Input',
  icon: 'T'
}, {
  type: 'textarea',
  label: 'Text Area',
  icon: '¶'
}, {
  type: 'number',
  label: 'Number Input',
  icon: '#'
}, {
  type: 'email',
  label: 'Email Input',
  icon: '@'
}, {
  type: 'phone',
  label: 'Phone Input',
  icon: '☎'
}, {
  type: 'select',
  label: 'Dropdown',
  icon: '▼'
}, {
  type: 'radio',
  label: 'Radio Buttons',
  icon: '◎'
}, {
  type: 'checkbox',
  label: 'Checkboxes',
  icon: '☑'
}, {
  type: 'date',
  label: 'Date Picker',
  icon: '📅'
}, {
  type: 'file',
  label: 'File Upload',
  icon: '📎'
}, {
  type: 'title',
  label: 'Title',
  icon: 'H'
}, {
  type: 'description',
  label: 'Description',
  icon: '≡'
}, {
  type: 'newline',
  label: 'New Line',
  icon: '↵'
}, {
  type: 'page_break',
  label: 'Page Break',
  icon: '—'
}, {
  type: 'hidden',
  label: 'Hidden Field',
  icon: '◌'
}, {
  type: 'state',
  label: 'State',
  icon: '🗺'
}, {
  type: 'city',
  label: 'City',
  icon: '🏙'
}, {
  type: 'state_city',
  label: 'State & City Combined',
  icon: '📍'
}];
/**
 * @param {string} type
 * @returns {FieldTypeMeta | undefined}
 */

function getFieldTypeMeta(type) {
  return FIELD_TYPES.find(function (field) {
    return field.type === type;
  });
}
/**
 * @returns {string}
 */

function generateFieldId() {
  fieldIdCounter += 1;
  return "field_".concat(Date.now(), "_").concat(fieldIdCounter);
}
/**
 * @param {string} type
 * @returns {FormField}
 */

function createDefaultField(type) {
  var _meta$label;

  var meta = getFieldTypeMeta(type);
  /** @type {FormField} */

  var field = {
    id: generateFieldId(),
    type: type,
    label: (_meta$label = meta === null || meta === void 0 ? void 0 : meta.label) !== null && _meta$label !== void 0 ? _meta$label : 'Field',
    placeholder: '',
    value: '',
    minLength: null,
    maxLength: null,
    cssClass: '',
    required: false,
    options: []
  };

  if (['select', 'radio', 'checkbox'].includes(type)) {
    field.options = ['Option 1', 'Option 2'];
  }

  return field;
}

/***/ }),

/***/ "./resources/js/form-builder/drag-drop.js":
/*!************************************************!*\
  !*** ./resources/js/form-builder/drag-drop.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initDragDrop": () => (/* binding */ initDragDrop)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./resources/js/form-builder/state.js");

var DRAG_MIME = 'application/x-form-builder-field';
function initDragDrop() {
  initPaletteDragSources();
  initCanvasDropTarget();
}

function initPaletteDragSources() {
  var grid = document.getElementById('form-builder-palette-grid');

  if (!grid) {
    return;
  }

  grid.addEventListener('dragstart', function (event) {
    var tile = event.target.closest('[data-field-type]');

    if (!tile || !event.dataTransfer) {
      return;
    }

    var fieldType = tile.getAttribute('data-field-type');
    event.dataTransfer.setData(DRAG_MIME, fieldType);
    event.dataTransfer.setData('text/plain', fieldType);
    event.dataTransfer.effectAllowed = 'copy';
    tile.classList.add('form-builder-palette-tile--dragging');
  });
  grid.addEventListener('dragend', function (event) {
    var tile = event.target.closest('[data-field-type]');
    tile === null || tile === void 0 ? void 0 : tile.classList.remove('form-builder-palette-tile--dragging');
  });
}

function initCanvasDropTarget() {
  var canvas = document.getElementById('form-builder-canvas');

  if (!canvas) {
    return;
  }

  canvas.addEventListener('dragover', function (event) {
    event.preventDefault();

    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'copy';
    }

    canvas.classList.add('form-builder-canvas--drag-over');
  });
  canvas.addEventListener('dragleave', function (event) {
    if (!canvas.contains(event.relatedTarget)) {
      canvas.classList.remove('form-builder-canvas--drag-over');
    }
  });
  canvas.addEventListener('drop', function (event) {
    var _event$dataTransfer, _event$dataTransfer2;

    event.preventDefault();
    canvas.classList.remove('form-builder-canvas--drag-over');
    var fieldType = ((_event$dataTransfer = event.dataTransfer) === null || _event$dataTransfer === void 0 ? void 0 : _event$dataTransfer.getData(DRAG_MIME)) || ((_event$dataTransfer2 = event.dataTransfer) === null || _event$dataTransfer2 === void 0 ? void 0 : _event$dataTransfer2.getData('text/plain'));

    if (!fieldType) {
      return;
    }

    (0,_state__WEBPACK_IMPORTED_MODULE_0__.addField)(fieldType);
  });
}

/***/ }),

/***/ "./resources/js/form-builder/field-actions.js":
/*!****************************************************!*\
  !*** ./resources/js/form-builder/field-actions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFieldActions": () => (/* binding */ initFieldActions)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./resources/js/form-builder/state.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "./resources/js/form-builder/palette.js");


function initFieldActions() {
  var fieldsList = document.getElementById('form-builder-canvas-fields');

  if (!fieldsList) {
    return;
  }

  fieldsList.addEventListener('click', function (event) {
    var actionButton = event.target.closest('[data-fb-action]');

    if (!actionButton) {
      return;
    }

    var card = actionButton.closest('[data-field-id]');

    if (!card) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    var fieldId = card.dataset.fieldId;
    var action = actionButton.getAttribute('data-fb-action');

    switch (action) {
      case 'delete':
        (0,_state__WEBPACK_IMPORTED_MODULE_0__.removeField)(fieldId);
        break;

      case 'duplicate':
        (0,_state__WEBPACK_IMPORTED_MODULE_0__.duplicateField)(fieldId);
        break;

      case 'edit':
        (0,_state__WEBPACK_IMPORTED_MODULE_0__.selectField)(fieldId);
        (0,_palette__WEBPACK_IMPORTED_MODULE_1__.switchPaletteTab)('field-options');
        break;

      case 'move':
      default:
        break;
    }
  });
}

/***/ }),

/***/ "./resources/js/form-builder/field-config.js":
/*!***************************************************!*\
  !*** ./resources/js/form-builder/field-config.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_CSS_CLASS": () => (/* binding */ CONFIG_CSS_CLASS),
/* harmony export */   "CONFIG_DEFAULT_VALUE": () => (/* binding */ CONFIG_DEFAULT_VALUE),
/* harmony export */   "CONFIG_LABEL": () => (/* binding */ CONFIG_LABEL),
/* harmony export */   "CONFIG_MIN_MAX_LENGTH": () => (/* binding */ CONFIG_MIN_MAX_LENGTH),
/* harmony export */   "CONFIG_OPTIONS": () => (/* binding */ CONFIG_OPTIONS),
/* harmony export */   "CONFIG_PLACEHOLDER": () => (/* binding */ CONFIG_PLACEHOLDER),
/* harmony export */   "CONFIG_REQUIRED": () => (/* binding */ CONFIG_REQUIRED),
/* harmony export */   "getVisibleConfig": () => (/* binding */ getVisibleConfig),
/* harmony export */   "isConfigAllowed": () => (/* binding */ isConfigAllowed)
/* harmony export */ });
/** @type {readonly string[]} */
var CONFIG_LABEL = ['*'];
/** @type {readonly string[]} */

var CONFIG_PLACEHOLDER = ['text', 'textarea', 'number', 'email', 'phone'];
/** @type {readonly string[]} */

var CONFIG_MIN_MAX_LENGTH = ['text', 'textarea'];
/** @type {readonly string[]} */

var CONFIG_OPTIONS = ['select', 'radio', 'checkbox'];
/** @type {readonly string[]} */

var CONFIG_REQUIRED = ['*'];
/** @type {readonly string[]} */

var CONFIG_CSS_CLASS = ['*'];
/** @type {readonly string[]} */

var CONFIG_DEFAULT_VALUE = ['text', 'number', 'email', 'hidden'];
/**
 * @param {readonly string[]} allowedTypes
 * @param {string} fieldType
 * @returns {boolean}
 */

function isConfigAllowed(allowedTypes, fieldType) {
  return allowedTypes.includes('*') || allowedTypes.includes(fieldType);
}
/**
 * @param {string} fieldType
 * @returns {Record<string, boolean>}
 */

function getVisibleConfig(fieldType) {
  return {
    label: isConfigAllowed(CONFIG_LABEL, fieldType),
    placeholder: isConfigAllowed(CONFIG_PLACEHOLDER, fieldType),
    minMaxLength: isConfigAllowed(CONFIG_MIN_MAX_LENGTH, fieldType),
    options: isConfigAllowed(CONFIG_OPTIONS, fieldType),
    required: isConfigAllowed(CONFIG_REQUIRED, fieldType),
    cssClass: isConfigAllowed(CONFIG_CSS_CLASS, fieldType),
    defaultValue: isConfigAllowed(CONFIG_DEFAULT_VALUE, fieldType),
    removeElement: true
  };
}

/***/ }),

/***/ "./resources/js/form-builder/field-options.js":
/*!****************************************************!*\
  !*** ./resources/js/form-builder/field-options.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFieldOptionsPanel": () => (/* binding */ initFieldOptionsPanel)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/form-builder/constants.js");
/* harmony import */ var _field_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-config */ "./resources/js/form-builder/field-config.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./resources/js/form-builder/state.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./palette */ "./resources/js/form-builder/palette.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/** @type {boolean} */

var isBindingForm = false;
function initFieldOptionsPanel() {
  var emptyState = document.getElementById('form-builder-field-options-empty');
  var content = document.getElementById('form-builder-field-options-content');
  var form = document.getElementById('form-builder-field-options-form');

  if (!emptyState || !content || !form) {
    return;
  }

  bindFormEvents(form);
  (0,_state__WEBPACK_IMPORTED_MODULE_2__.onSelectionChange)(function () {
    renderPanel(emptyState, content, form);
  });
  renderPanel(emptyState, content, form);
}
/**
 * @param {HTMLElement} emptyState
 * @param {HTMLElement} content
 * @param {HTMLFormElement} form
 */

function renderPanel(emptyState, content, form) {
  var _meta$label;

  var field = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getSelectedField)();

  if (!field) {
    emptyState.classList.remove('hidden');
    content.classList.add('hidden');
    return;
  }

  var meta = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.getFieldTypeMeta)(field.type);
  var visibility = (0,_field_config__WEBPACK_IMPORTED_MODULE_1__.getVisibleConfig)(field.type);
  emptyState.classList.add('hidden');
  content.classList.remove('hidden');
  isBindingForm = true;
  bindFormValues(form, field, (_meta$label = meta === null || meta === void 0 ? void 0 : meta.label) !== null && _meta$label !== void 0 ? _meta$label : field.type);
  applyConfigVisibility(form, visibility);
  renderOptionsList(form, field);
  isBindingForm = false;
}
/**
 * @param {HTMLFormElement} form
 * @param {import('./constants').FormField} field
 * @param {string} typeLabel
 */


function bindFormValues(form, field, typeLabel) {
  var typeEl = form.querySelector('#form-builder-field-options-type');
  var labelInput = form.querySelector('#fb-config-label');
  var placeholderInput = form.querySelector('#fb-config-placeholder');
  var minLengthInput = form.querySelector('#fb-config-min-length');
  var maxLengthInput = form.querySelector('#fb-config-max-length');
  var requiredInput = form.querySelector('#fb-config-required');
  var cssClassInput = form.querySelector('#fb-config-css-class');
  var defaultValueInput = form.querySelector('#fb-config-default-value');

  if (typeEl) {
    typeEl.textContent = typeLabel;
  }

  if (labelInput instanceof HTMLInputElement) {
    labelInput.value = field.label;
  }

  if (placeholderInput instanceof HTMLInputElement) {
    placeholderInput.value = field.placeholder;
  }

  if (minLengthInput instanceof HTMLInputElement) {
    var _field$minLength;

    minLengthInput.value = (_field$minLength = field.minLength) !== null && _field$minLength !== void 0 ? _field$minLength : '';
  }

  if (maxLengthInput instanceof HTMLInputElement) {
    var _field$maxLength;

    maxLengthInput.value = (_field$maxLength = field.maxLength) !== null && _field$maxLength !== void 0 ? _field$maxLength : '';
  }

  if (requiredInput instanceof HTMLInputElement) {
    requiredInput.checked = field.required;
  }

  if (cssClassInput instanceof HTMLInputElement) {
    cssClassInput.value = field.cssClass;
  }

  if (defaultValueInput instanceof HTMLInputElement) {
    defaultValueInput.value = field.value;
  }
}
/**
 * @param {HTMLFormElement} form
 * @param {Record<string, boolean>} visibility
 */


function applyConfigVisibility(form, visibility) {
  form.querySelectorAll('[data-fb-config-group]').forEach(function (group) {
    if (!(group instanceof HTMLElement)) {
      return;
    }

    var key = group.getAttribute('data-fb-config-group');
    var isVisible = key ? visibility[key] : false;
    group.classList.toggle('hidden', !isVisible);
  });
}
/**
 * @param {HTMLFormElement} form
 * @param {import('./constants').FormField} field
 */


function renderOptionsList(form, field) {
  var list = form.querySelector('#fb-config-options-list');

  if (!(list instanceof HTMLElement)) {
    return;
  }

  list.replaceChildren();
  field.options.forEach(function (option, index) {
    list.appendChild(createOptionRow(option, index, field.options.length));
  });
}
/**
 * @param {string} value
 * @param {number} index
 * @param {number} total
 * @returns {HTMLElement}
 */


function createOptionRow(value, index, total) {
  var row = document.createElement('div');
  row.className = 'flex items-center gap-2';
  row.dataset.fbOptionIndex = String(index);
  row.innerHTML = "\n        <input\n            type=\"text\"\n            class=\"form-builder-option-input flex-1\"\n            data-fb-option-input\n            value=\"".concat(escapeAttribute(value), "\"\n            placeholder=\"Option ").concat(index + 1, "\"\n            autocomplete=\"off\"\n        >\n        <button\n            type=\"button\"\n            class=\"form-builder-option-icon-btn\"\n            data-fb-remove-option\n            title=\"Remove option\"\n            aria-label=\"Remove option\"\n            ").concat(total <= 1 ? 'disabled' : '', "\n        >\n            <svg class=\"h-4 w-4\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" />\n            </svg>\n        </button>\n    ");
  return row;
}
/**
 * @param {HTMLFormElement} form
 */


function bindFormEvents(form) {
  form.addEventListener('input', function (event) {
    if (isBindingForm) {
      return;
    }

    var target = event.target;

    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    if (target.hasAttribute('data-fb-option-input')) {
      handleOptionInput(target);
      return;
    }

    handleFieldInput(target);
  });
  form.addEventListener('change', function (event) {
    if (isBindingForm) {
      return;
    }

    var target = event.target;

    if (target instanceof HTMLInputElement && target.id === 'fb-config-required') {
      commitFieldUpdate({
        required: target.checked
      });
    }
  });
  form.addEventListener('click', function (event) {
    var addButton = event.target.closest('#fb-config-add-option');
    var removeButton = event.target.closest('[data-fb-remove-option]');
    var removeElementButton = event.target.closest('#fb-config-remove-element');

    if (addButton) {
      event.preventDefault();
      handleAddOption(form);
      return;
    }

    if (removeButton) {
      event.preventDefault();
      var row = removeButton.closest('[data-fb-option-index]');

      if (row instanceof HTMLElement) {
        handleRemoveOption(form, Number(row.dataset.fbOptionIndex));
      }

      return;
    }

    if (removeElementButton) {
      event.preventDefault();
      handleRemoveElement();
    }
  });
}
/**
 * @param {HTMLInputElement} input
 */


function handleFieldInput(input) {
  switch (input.id) {
    case 'fb-config-label':
      commitFieldUpdate({
        label: input.value
      });
      break;

    case 'fb-config-placeholder':
      commitFieldUpdate({
        placeholder: input.value
      });
      break;

    case 'fb-config-min-length':
      commitFieldUpdate({
        minLength: parseOptionalNumber(input.value)
      });
      break;

    case 'fb-config-max-length':
      commitFieldUpdate({
        maxLength: parseOptionalNumber(input.value)
      });
      break;

    case 'fb-config-css-class':
      commitFieldUpdate({
        cssClass: input.value.trim()
      });
      break;

    case 'fb-config-default-value':
      commitFieldUpdate({
        value: input.value
      });
      break;

    default:
      break;
  }
}
/**
 * @param {HTMLInputElement} input
 */


function handleOptionInput(input) {
  var row = input.closest('[data-fb-option-index]');
  var field = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getSelectedField)();

  if (!field || !(row instanceof HTMLElement)) {
    return;
  }

  var index = Number(row.dataset.fbOptionIndex);

  var options = _toConsumableArray(field.options);

  options[index] = input.value;
  commitFieldUpdate({
    options: options
  });
}
/**
 * @param {HTMLFormElement} form
 */


function handleAddOption(form) {
  var field = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getSelectedField)();

  if (!field) {
    return;
  }

  var options = [].concat(_toConsumableArray(field.options), ["Option ".concat(field.options.length + 1)]);
  commitFieldUpdate({
    options: options
  });
  renderOptionsList(form, _objectSpread(_objectSpread({}, field), {}, {
    options: options
  }));
}
/**
 * @param {HTMLFormElement} form
 * @param {number} index
 */


function handleRemoveOption(form, index) {
  var field = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getSelectedField)();

  if (!field || field.options.length <= 1) {
    return;
  }

  var options = field.options.filter(function (_, optionIndex) {
    return optionIndex !== index;
  });
  commitFieldUpdate({
    options: options
  });
  renderOptionsList(form, _objectSpread(_objectSpread({}, field), {}, {
    options: options
  }));
}

function handleRemoveElement() {
  var fieldId = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getSelectedFieldId)();

  if (!fieldId) {
    return;
  }

  (0,_state__WEBPACK_IMPORTED_MODULE_2__.removeField)(fieldId);
  (0,_palette__WEBPACK_IMPORTED_MODULE_3__.switchPaletteTab)('add-fields');
}
/**
 * @param {Partial<import('./constants').FormField>} updates
 */


function commitFieldUpdate(updates) {
  var fieldId = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getSelectedFieldId)();

  if (!fieldId) {
    return;
  }

  (0,_state__WEBPACK_IMPORTED_MODULE_2__.updateField)(fieldId, updates);
}
/**
 * @param {string} value
 * @returns {number|null}
 */


function parseOptionalNumber(value) {
  if (value === '' || value === null) {
    return null;
  }

  var parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}
/**
 * @param {string} value
 * @returns {string}
 */


function escapeAttribute(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/***/ }),

/***/ "./resources/js/form-builder/field-preview.js":
/*!****************************************************!*\
  !*** ./resources/js/form-builder/field-preview.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFieldCardElement": () => (/* binding */ renderFieldCardElement),
/* harmony export */   "renderFieldPreviewElement": () => (/* binding */ renderFieldPreviewElement)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/form-builder/constants.js");

/**
 * @param {string} templateId
 * @returns {DocumentFragment|null}
 */

function cloneTemplate(templateId) {
  var template = document.getElementById(templateId);
  return template ? template.content.cloneNode(true) : null;
}
/**
 * @param {import('./constants').FormField} field
 * @returns {HTMLElement}
 */


function renderFieldPreviewElement(field) {
  var previewType = _constants__WEBPACK_IMPORTED_MODULE_0__.PREVIEW_FIELD_TYPES.includes(field.type) ? field.type : 'unsupported';
  var fragment = cloneTemplate("fb-preview-".concat(previewType));
  var preview = fragment === null || fragment === void 0 ? void 0 : fragment.firstElementChild;

  if (!(preview instanceof HTMLElement)) {
    throw new Error("Missing preview template for field type: ".concat(previewType));
  }

  hydratePreview(preview, field);
  return preview;
}
/**
 * @param {import('./constants').FormField} field
 * @returns {HTMLElement}
 */

function renderFieldCardElement(field) {
  var fragment = cloneTemplate('fb-template-card');
  var card = fragment === null || fragment === void 0 ? void 0 : fragment.querySelector('.form-builder-field-card');

  if (!(card instanceof HTMLElement)) {
    throw new Error('Missing field card template');
  }

  var meta = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.getFieldTypeMeta)(field.type);
  card.dataset.fieldId = field.id;
  var typeLabel = card.querySelector('[data-fb-part="type-label"]');

  if (typeLabel) {
    var _meta$label;

    typeLabel.textContent = (_meta$label = meta === null || meta === void 0 ? void 0 : meta.label) !== null && _meta$label !== void 0 ? _meta$label : field.type;
  }

  var body = card.querySelector('[data-fb-slot="body"]');

  if (body) {
    body.replaceChildren(renderFieldPreviewElement(field));
  }

  return card;
}
/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */

function hydratePreview(root, field) {
  var previewType = root.getAttribute('data-fb-field-preview');

  switch (previewType) {
    case 'select':
      hydrateLabel(root, field);
      hydrateSelectOptions(root, field);
      break;

    case 'radio':
      hydrateOptionGroup(root, field, 'radio');
      break;

    case 'checkbox':
      hydrateOptionGroup(root, field, 'checkbox');
      break;

    case 'unsupported':
      hydrateUnsupported(root, field);
      break;

    default:
      hydrateLabel(root, field);
      hydrateInput(root, field);
      break;
  }
}
/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */


function hydrateLabel(root, field) {
  var labelText = root.querySelector('[data-fb-part="label-text"]');

  if (labelText) {
    labelText.textContent = field.label;
  }

  var required = root.querySelector('[data-fb-part="required"]');

  if (required) {
    required.classList.toggle('hidden', !field.required);
  }
}
/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */


function hydrateInput(root, field) {
  var input = root.querySelector('[data-fb-part="input"]');

  if (!(input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement)) {
    return;
  }

  applyInputClasses(input, field.cssClass);

  if ('placeholder' in input) {
    input.placeholder = field.placeholder || '';
  }

  input.value = field.value || '';

  if (field.minLength != null) {
    input.minLength = field.minLength;
  } else {
    input.removeAttribute('minlength');
  }

  if (field.maxLength != null) {
    input.maxLength = field.maxLength;
  } else {
    input.removeAttribute('maxlength');
  }
}
/**
 * @param {HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement} input
 * @param {string} cssClass
 */


function applyInputClasses(input, cssClass) {
  var baseClass = input.classList.contains('min-h-[80px]') ? 'form-builder-preview-input min-h-[80px] resize-none' : 'form-builder-preview-input';
  input.className = cssClass ? "".concat(baseClass, " ").concat(cssClass).trim() : baseClass;
}
/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */


function hydrateSelectOptions(root, field) {
  var select = root.querySelector('[data-fb-part="input"]');

  if (!(select instanceof HTMLSelectElement)) {
    return;
  }

  applyInputClasses(select, field.cssClass);
  select.querySelectorAll('option:not([value=""])').forEach(function (option) {
    return option.remove();
  });
  field.options.forEach(function (optionValue) {
    var option = document.createElement('option');
    option.value = optionValue;
    option.textContent = optionValue;
    select.appendChild(option);
  });
}
/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 * @param {'radio' | 'checkbox'} inputType
 */


function hydrateOptionGroup(root, field, inputType) {
  hydrateLabel(root, field);
  var container = root.querySelector('[data-fb-part="options"]');
  var rowTemplate = root.querySelector('template[data-fb-option-row]');

  if (!(container instanceof HTMLElement) || !(rowTemplate instanceof HTMLTemplateElement)) {
    return;
  }

  container.replaceChildren();
  field.options.forEach(function (optionValue, index) {
    var row = rowTemplate.content.cloneNode(true);
    var input = row.querySelector('[data-fb-part="option-input"]');
    var label = row.querySelector('[data-fb-part="option-label"]');

    if (input instanceof HTMLInputElement) {
      input.type = inputType;
      input.name = field.id;
      input.value = optionValue;

      if (inputType === 'radio' && index === 0) {
        input.checked = true;
      }
    }

    if (label) {
      label.textContent = optionValue;
    }

    container.appendChild(row);
  });
}
/**
 * @param {HTMLElement} root
 * @param {import('./constants').FormField} field
 */


function hydrateUnsupported(root, field) {
  var labelText = root.querySelector('[data-fb-part="label-text"]');

  if (labelText) {
    labelText.textContent = field.label;
  }
}

/***/ }),

/***/ "./resources/js/form-builder/palette.js":
/*!**********************************************!*\
  !*** ./resources/js/form-builder/palette.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPalette": () => (/* binding */ initPalette),
/* harmony export */   "switchPaletteTab": () => (/* binding */ switchPaletteTab)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/form-builder/constants.js");

function initPalette() {
  var root = document.getElementById('form-builder-palette');

  if (!root) {
    return;
  }

  renderFieldTiles(root);
  initSubTabs(root);
}

function renderFieldTiles(root) {
  var grid = root.querySelector('#form-builder-palette-grid');

  if (!grid) {
    return;
  }

  grid.innerHTML = _constants__WEBPACK_IMPORTED_MODULE_0__.FIELD_TYPES.map(function (field) {
    return "\n        <div\n            class=\"form-builder-palette-tile\"\n            data-field-type=\"".concat(field.type, "\"\n            draggable=\"true\"\n            role=\"listitem\"\n            aria-label=\"Drag ").concat(field.label, " to canvas\"\n            tabindex=\"0\"\n        >\n            <span class=\"form-builder-palette-tile__icon\" aria-hidden=\"true\">").concat(field.icon, "</span>\n            <span class=\"form-builder-palette-tile__label\">").concat(field.label, "</span>\n        </div>\n    ");
  }).join('');
}

function initSubTabs(root) {
  var tabs = root.querySelectorAll('[data-palette-tab]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-palette-tab');

      if (target) {
        switchPaletteTab(target);
      }
    });
  });
}
/**
 * @param {string} tabId
 */


function switchPaletteTab(tabId) {
  var root = document.getElementById('form-builder-palette');

  if (!root) {
    return;
  }

  var tabs = root.querySelectorAll('[data-palette-tab]');
  var panels = root.querySelectorAll('[data-palette-panel]');
  tabs.forEach(function (item) {
    var isActive = item.getAttribute('data-palette-tab') === tabId;
    item.classList.toggle('form-builder-subtab--active', isActive);
    item.classList.toggle('form-builder-subtab--inactive', !isActive);
    item.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
  panels.forEach(function (panel) {
    var isVisible = panel.getAttribute('data-palette-panel') === tabId;
    panel.classList.toggle('hidden', !isVisible);
  });
}

/***/ }),

/***/ "./resources/js/form-builder/state.js":
/*!********************************************!*\
  !*** ./resources/js/form-builder/state.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addField": () => (/* binding */ addField),
/* harmony export */   "duplicateField": () => (/* binding */ duplicateField),
/* harmony export */   "getFields": () => (/* binding */ getFields),
/* harmony export */   "getSelectedField": () => (/* binding */ getSelectedField),
/* harmony export */   "getSelectedFieldId": () => (/* binding */ getSelectedFieldId),
/* harmony export */   "onFieldsChange": () => (/* binding */ onFieldsChange),
/* harmony export */   "onSelectionChange": () => (/* binding */ onSelectionChange),
/* harmony export */   "removeField": () => (/* binding */ removeField),
/* harmony export */   "selectField": () => (/* binding */ selectField),
/* harmony export */   "updateField": () => (/* binding */ updateField)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/form-builder/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/** @type {import('./constants').FormField[]} */

var fields = [];
/** @type {string|null} */

var selectedFieldId = null;
/** @type {Set<(fields: import('./constants').FormField[]) => void>} */

var fieldListeners = new Set();
/** @type {Set<(selectedId: string|null) => void>} */

var selectionListeners = new Set();
/**
 * @returns {import('./constants').FormField[]}
 */

function getFields() {
  return _toConsumableArray(fields);
}
/**
 * @returns {string|null}
 */

function getSelectedFieldId() {
  return selectedFieldId;
}
/**
 * @returns {import('./constants').FormField|null}
 */

function getSelectedField() {
  var _fields$find;

  return (_fields$find = fields.find(function (field) {
    return field.id === selectedFieldId;
  })) !== null && _fields$find !== void 0 ? _fields$find : null;
}
/**
 * @param {string} type
 * @returns {import('./constants').FormField}
 */

function addField(type) {
  var field = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.createDefaultField)(type);
  fields = [].concat(_toConsumableArray(fields), [field]);
  notifyFields();
  return field;
}
/**
 * @param {string} id
 */

function removeField(id) {
  fields = fields.filter(function (field) {
    return field.id !== id;
  });

  if (selectedFieldId === id) {
    selectedFieldId = null;
    notifySelection();
  }

  notifyFields();
}
/**
 * @param {string} id
 * @returns {import('./constants').FormField|null}
 */

function duplicateField(id) {
  var index = fields.findIndex(function (field) {
    return field.id === id;
  });

  if (index === -1) {
    return null;
  }

  var source = fields[index];

  var copy = _objectSpread(_objectSpread({}, source), {}, {
    id: (0,_constants__WEBPACK_IMPORTED_MODULE_0__.generateFieldId)(),
    options: _toConsumableArray(source.options)
  });

  fields = [].concat(_toConsumableArray(fields.slice(0, index + 1)), [copy], _toConsumableArray(fields.slice(index + 1)));
  selectedFieldId = copy.id;
  notifyFields();
  notifySelection();
  return copy;
}
/**
 * @param {string} id
 * @param {Partial<import('./constants').FormField>} updates
 * @returns {import('./constants').FormField|null}
 */

function updateField(id, updates) {
  var index = fields.findIndex(function (field) {
    return field.id === id;
  });

  if (index === -1) {
    return null;
  }

  var updated = _objectSpread(_objectSpread({}, fields[index]), updates);

  if (updates.options) {
    updated.options = _toConsumableArray(updates.options);
  }

  fields = fields.map(function (field) {
    return field.id === id ? updated : field;
  });
  notifyFields();
  return updated;
}
/**
 * @param {string} id
 */

function selectField(id) {
  if (!fields.some(function (field) {
    return field.id === id;
  })) {
    return;
  }

  selectedFieldId = id;
  notifySelection();
}
/**
 * @param {(fields: import('./constants').FormField[]) => void} listener
 */

function onFieldsChange(listener) {
  fieldListeners.add(listener);
  return function () {
    return fieldListeners["delete"](listener);
  };
}
/**
 * @param {(selectedId: string|null) => void} listener
 */

function onSelectionChange(listener) {
  selectionListeners.add(listener);
  return function () {
    return selectionListeners["delete"](listener);
  };
}

function notifyFields() {
  fieldListeners.forEach(function (listener) {
    return listener(getFields());
  });
}

function notifySelection() {
  selectionListeners.forEach(function (listener) {
    return listener(selectedFieldId);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./resources/js/form-builder/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "./resources/js/form-builder/palette.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./resources/js/form-builder/canvas.js");
/* harmony import */ var _drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop */ "./resources/js/form-builder/drag-drop.js");
/* harmony import */ var _field_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-actions */ "./resources/js/form-builder/field-actions.js");
/* harmony import */ var _field_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-options */ "./resources/js/form-builder/field-options.js");





document.addEventListener('DOMContentLoaded', function () {
  initTitleCounter();
  (0,_palette__WEBPACK_IMPORTED_MODULE_0__.initPalette)();
  (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.initCanvas)();
  (0,_drag_drop__WEBPACK_IMPORTED_MODULE_2__.initDragDrop)();
  (0,_field_actions__WEBPACK_IMPORTED_MODULE_3__.initFieldActions)();
  (0,_field_options__WEBPACK_IMPORTED_MODULE_4__.initFieldOptionsPanel)();
});

function initTitleCounter() {
  var titleInput = document.getElementById('form-builder-title');
  var charCount = document.getElementById('form-builder-char-count');

  if (!titleInput || !charCount) {
    return;
  }

  var maxLength = parseInt(titleInput.getAttribute('maxlength'), 10) || 200;

  var updateCharCount = function updateCharCount() {
    var length = titleInput.value.length;
    charCount.textContent = "".concat(length, " / ").concat(maxLength);

    if (length >= maxLength) {
      charCount.classList.add('text-red-600');
      charCount.classList.remove('text-gray-500');
    } else {
      charCount.classList.remove('text-red-600');
      charCount.classList.add('text-gray-500');
    }
  };

  titleInput.addEventListener('input', updateCharCount);
  updateCharCount();
}
})();

/******/ })()
;