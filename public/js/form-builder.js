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
  renderFields((0,_state__WEBPACK_IMPORTED_MODULE_0__.getFields)());
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

/***/ "./resources/js/form-builder/confirm.js":
/*!**********************************************!*\
  !*** ./resources/js/form-builder/confirm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "confirmDeleteField": () => (/* binding */ confirmDeleteField)
/* harmony export */ });
/**
 * @param {string} [label]
 * @returns {boolean}
 */
function confirmDeleteField(label) {
  var name = (label === null || label === void 0 ? void 0 : label.trim()) || 'this field';
  return window.confirm("Delete \"".concat(name, "\"? This cannot be undone."));
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
/* harmony export */   "getFieldTypeMeta": () => (/* binding */ getFieldTypeMeta),
/* harmony export */   "syncFieldIdCounter": () => (/* binding */ syncFieldIdCounter)
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
 * @param {import('./constants').FormField[]} loadedFields
 */

function syncFieldIdCounter(loadedFields) {
  var maxCounter = 0;
  loadedFields.forEach(function (field) {
    var match = field.id.match(/_(\d+)$/);

    if (match) {
      maxCounter = Math.max(maxCounter, Number(match[1]));
    }
  });
  fieldIdCounter = maxCounter;
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
/* harmony import */ var _field_reorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-reorder */ "./resources/js/form-builder/field-reorder.js");


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
    if ((0,_field_reorder__WEBPACK_IMPORTED_MODULE_1__.isActiveReorderDrag)(event)) {
      return;
    }

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

    if ((_event$dataTransfer = event.dataTransfer) !== null && _event$dataTransfer !== void 0 && _event$dataTransfer.getData(_field_reorder__WEBPACK_IMPORTED_MODULE_1__.REORDER_MIME)) {
      return;
    }

    var fieldType = (_event$dataTransfer2 = event.dataTransfer) === null || _event$dataTransfer2 === void 0 ? void 0 : _event$dataTransfer2.getData(DRAG_MIME);

    if (!fieldType) {
      return;
    }

    event.preventDefault();
    canvas.classList.remove('form-builder-canvas--drag-over');
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
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm */ "./resources/js/form-builder/confirm.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./resources/js/form-builder/state.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette */ "./resources/js/form-builder/palette.js");



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
        {
          var field = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getFields)().find(function (item) {
            return item.id === fieldId;
          });

          if ((0,_confirm__WEBPACK_IMPORTED_MODULE_0__.confirmDeleteField)(field === null || field === void 0 ? void 0 : field.label)) {
            (0,_state__WEBPACK_IMPORTED_MODULE_1__.removeField)(fieldId);
          }

          break;
        }

      case 'duplicate':
        (0,_state__WEBPACK_IMPORTED_MODULE_1__.duplicateField)(fieldId);
        break;

      case 'edit':
        (0,_state__WEBPACK_IMPORTED_MODULE_1__.selectField)(fieldId);
        (0,_palette__WEBPACK_IMPORTED_MODULE_2__.switchPaletteTab)('field-options');
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
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm */ "./resources/js/form-builder/confirm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./resources/js/form-builder/constants.js");
/* harmony import */ var _field_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-config */ "./resources/js/form-builder/field-config.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./resources/js/form-builder/state.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette */ "./resources/js/form-builder/palette.js");
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
  (0,_state__WEBPACK_IMPORTED_MODULE_3__.onSelectionChange)(function () {
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

  var field = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getSelectedField)();

  if (!field) {
    emptyState.classList.remove('hidden');
    content.classList.add('hidden');
    return;
  }

  var meta = (0,_constants__WEBPACK_IMPORTED_MODULE_1__.getFieldTypeMeta)(field.type);
  var visibility = (0,_field_config__WEBPACK_IMPORTED_MODULE_2__.getVisibleConfig)(field.type);
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
  var field = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getSelectedField)();

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
  var field = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getSelectedField)();

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
  var field = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getSelectedField)();

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
  var field = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getSelectedField)();

  if (!field) {
    return;
  }

  if (!(0,_confirm__WEBPACK_IMPORTED_MODULE_0__.confirmDeleteField)(field.label)) {
    return;
  }

  (0,_state__WEBPACK_IMPORTED_MODULE_3__.removeField)(field.id);
  (0,_palette__WEBPACK_IMPORTED_MODULE_4__.switchPaletteTab)('add-fields');
}
/**
 * @param {Partial<import('./constants').FormField>} updates
 */


function commitFieldUpdate(updates) {
  var fieldId = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getSelectedFieldId)();

  if (!fieldId) {
    return;
  }

  (0,_state__WEBPACK_IMPORTED_MODULE_3__.updateField)(fieldId, updates);
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

/***/ "./resources/js/form-builder/field-reorder.js":
/*!****************************************************!*\
  !*** ./resources/js/form-builder/field-reorder.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REORDER_MIME": () => (/* binding */ REORDER_MIME),
/* harmony export */   "initFieldReorder": () => (/* binding */ initFieldReorder),
/* harmony export */   "isActiveReorderDrag": () => (/* binding */ isActiveReorderDrag)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./resources/js/form-builder/state.js");

var REORDER_MIME = 'application/x-form-builder-reorder';
/** @type {string|null} */

var draggedFieldId = null;
function initFieldReorder() {
  var fieldsList = document.getElementById('form-builder-canvas-fields');

  if (!fieldsList) {
    return;
  }

  fieldsList.addEventListener('dragstart', function (event) {
    var handle = event.target.closest('[data-fb-action="move"]');
    var card = handle === null || handle === void 0 ? void 0 : handle.closest('[data-field-id]');

    if (!handle || !card || !event.dataTransfer) {
      return;
    }

    draggedFieldId = card.dataset.fieldId;
    event.dataTransfer.setData(REORDER_MIME, draggedFieldId);
    event.dataTransfer.effectAllowed = 'move';
    card.classList.add('form-builder-field-card--dragging');
  });
  fieldsList.addEventListener('dragend', function (event) {
    var card = event.target.closest('[data-field-id]');
    card === null || card === void 0 ? void 0 : card.classList.remove('form-builder-field-card--dragging');
    clearDropIndicators(fieldsList);
    draggedFieldId = null;
  });
  fieldsList.addEventListener('dragover', function (event) {
    if (!isReorderDrag(event)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }

    clearDropIndicators(fieldsList);
    var targetCard = event.target.closest('[data-field-id]');

    if (!targetCard || targetCard.dataset.fieldId === draggedFieldId) {
      fieldsList.classList.add('form-builder-canvas-fields--drop-end');
      return;
    }

    var insertAfter = shouldInsertAfter(targetCard, event.clientY);
    targetCard.classList.add(insertAfter ? 'form-builder-field-card--drop-after' : 'form-builder-field-card--drop-before');
  });
  fieldsList.addEventListener('dragleave', function (event) {
    if (!fieldsList.contains(event.relatedTarget)) {
      clearDropIndicators(fieldsList);
    }
  });
  fieldsList.addEventListener('drop', function (event) {
    var _event$dataTransfer;

    var reorderId = (_event$dataTransfer = event.dataTransfer) === null || _event$dataTransfer === void 0 ? void 0 : _event$dataTransfer.getData(REORDER_MIME);

    if (!reorderId) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    var targetCard = event.target.closest('[data-field-id]');
    clearDropIndicators(fieldsList);

    if (!targetCard || targetCard.dataset.fieldId === reorderId) {
      (0,_state__WEBPACK_IMPORTED_MODULE_0__.moveFieldToEnd)(reorderId);
      draggedFieldId = null;
      return;
    }

    var insertAfter = shouldInsertAfter(targetCard, event.clientY);
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.reorderField)(reorderId, targetCard.dataset.fieldId, insertAfter);
    draggedFieldId = null;
  });
}
/**
 * @param {DragEvent} event
 * @returns {boolean}
 */

function isReorderDrag(event) {
  var _event$dataTransfer$t, _event$dataTransfer2;

  if (!draggedFieldId) {
    return false;
  }

  return (_event$dataTransfer$t = (_event$dataTransfer2 = event.dataTransfer) === null || _event$dataTransfer2 === void 0 ? void 0 : _event$dataTransfer2.types.includes(REORDER_MIME)) !== null && _event$dataTransfer$t !== void 0 ? _event$dataTransfer$t : false;
}
/**
 * @param {HTMLElement} targetCard
 * @param {number} clientY
 * @returns {boolean}
 */


function shouldInsertAfter(targetCard, clientY) {
  var rect = targetCard.getBoundingClientRect();
  return clientY > rect.top + rect.height / 2;
}
/**
 * @param {HTMLElement} fieldsList
 */


function clearDropIndicators(fieldsList) {
  fieldsList.classList.remove('form-builder-canvas-fields--drop-end');
  fieldsList.querySelectorAll('.form-builder-field-card').forEach(function (card) {
    card.classList.remove('form-builder-field-card--drop-before', 'form-builder-field-card--drop-after');
  });
}
/**
 * @param {DragEvent} event
 * @returns {boolean}
 */


function isActiveReorderDrag(event) {
  var _event$dataTransfer$t2, _event$dataTransfer3;

  return (_event$dataTransfer$t2 = (_event$dataTransfer3 = event.dataTransfer) === null || _event$dataTransfer3 === void 0 ? void 0 : _event$dataTransfer3.types.includes(REORDER_MIME)) !== null && _event$dataTransfer$t2 !== void 0 ? _event$dataTransfer$t2 : false;
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

/***/ "./resources/js/form-builder/persistence.js":
/*!**************************************************!*\
  !*** ./resources/js/form-builder/persistence.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPersistence": () => (/* binding */ initPersistence),
/* harmony export */   "persistDraft": () => (/* binding */ persistDraft)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/form-builder/constants.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./resources/js/form-builder/storage.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./resources/js/form-builder/state.js");



var saveTimer = null;
function initPersistence() {
  restoreDraft();
  (0,_state__WEBPACK_IMPORTED_MODULE_2__.onFieldsChange)(scheduleSave);
  (0,_state__WEBPACK_IMPORTED_MODULE_2__.onSelectionChange)(scheduleSave);
  var titleInput = document.getElementById('form-builder-title');
  titleInput === null || titleInput === void 0 ? void 0 : titleInput.addEventListener('input', scheduleSave);
}

function restoreDraft() {
  var _draft$selectedFieldI;

  var draft = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadFormDraft)();

  if (!draft || !Array.isArray(draft.fields)) {
    return;
  }

  var fields = draft.fields.map(normalizeField);
  (0,_constants__WEBPACK_IMPORTED_MODULE_0__.syncFieldIdCounter)(fields);
  (0,_state__WEBPACK_IMPORTED_MODULE_2__.hydrateState)(fields, (_draft$selectedFieldI = draft.selectedFieldId) !== null && _draft$selectedFieldI !== void 0 ? _draft$selectedFieldI : null);
  var titleInput = document.getElementById('form-builder-title');

  if (titleInput instanceof HTMLInputElement && typeof draft.title === 'string') {
    titleInput.value = draft.title;
    titleInput.dispatchEvent(new Event('input', {
      bubbles: true
    }));
  }

  if (draft.previewMode) {
    var _document$querySelect;

    (_document$querySelect = document.querySelector('.form-builder')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.classList.add('form-builder--preview');
  }
}

function scheduleSave() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(persistDraft, 250);
}

function persistDraft() {
  var _root$classList$conta;

  var titleInput = document.getElementById('form-builder-title');
  var root = document.querySelector('.form-builder');
  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFormDraft)({
    title: titleInput instanceof HTMLInputElement ? titleInput.value : '',
    fields: (0,_state__WEBPACK_IMPORTED_MODULE_2__.getFields)(),
    selectedFieldId: (0,_state__WEBPACK_IMPORTED_MODULE_2__.getSelectedFieldId)(),
    previewMode: (_root$classList$conta = root === null || root === void 0 ? void 0 : root.classList.contains('form-builder--preview')) !== null && _root$classList$conta !== void 0 ? _root$classList$conta : false
  });
}
/**
 * @param {object} field
 * @returns {import('./constants').FormField}
 */


function normalizeField(field) {
  var _field$id, _field$type, _field$label, _field$placeholder, _field$value, _field$minLength, _field$maxLength, _field$cssClass;

  return {
    id: String((_field$id = field.id) !== null && _field$id !== void 0 ? _field$id : ''),
    type: String((_field$type = field.type) !== null && _field$type !== void 0 ? _field$type : 'text'),
    label: String((_field$label = field.label) !== null && _field$label !== void 0 ? _field$label : 'Field'),
    placeholder: String((_field$placeholder = field.placeholder) !== null && _field$placeholder !== void 0 ? _field$placeholder : ''),
    value: String((_field$value = field.value) !== null && _field$value !== void 0 ? _field$value : ''),
    minLength: (_field$minLength = field.minLength) !== null && _field$minLength !== void 0 ? _field$minLength : null,
    maxLength: (_field$maxLength = field.maxLength) !== null && _field$maxLength !== void 0 ? _field$maxLength : null,
    cssClass: String((_field$cssClass = field.cssClass) !== null && _field$cssClass !== void 0 ? _field$cssClass : ''),
    required: Boolean(field.required),
    options: Array.isArray(field.options) ? field.options.map(String) : []
  };
}



/***/ }),

/***/ "./resources/js/form-builder/preview-mode.js":
/*!***************************************************!*\
  !*** ./resources/js/form-builder/preview-mode.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPreviewMode": () => (/* binding */ initPreviewMode)
/* harmony export */ });
/* harmony import */ var _persistence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistence */ "./resources/js/form-builder/persistence.js");

function initPreviewMode() {
  var root = document.querySelector('.form-builder');
  var toggle = document.getElementById('form-builder-preview-toggle');

  if (!root || !toggle) {
    return;
  }

  if (root.classList.contains('form-builder--preview')) {
    toggle.textContent = 'Exit Preview';
    toggle.setAttribute('aria-pressed', 'true');
  }

  toggle.addEventListener('click', function () {
    var isPreview = root.classList.toggle('form-builder--preview');
    toggle.textContent = isPreview ? 'Exit Preview' : 'Preview';
    toggle.setAttribute('aria-pressed', isPreview ? 'true' : 'false');
    (0,_persistence__WEBPACK_IMPORTED_MODULE_0__.persistDraft)();
  });
}

/***/ }),

/***/ "./resources/js/form-builder/schema-output.js":
/*!****************************************************!*\
  !*** ./resources/js/form-builder/schema-output.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSchemaOutput": () => (/* binding */ initSchemaOutput)
/* harmony export */ });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./resources/js/form-builder/schema.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function initSchemaOutput() {
  var nextButton = document.getElementById('form-builder-next');
  var modal = document.getElementById('form-builder-schema-modal');
  var output = document.getElementById('form-builder-schema-output');
  var copyButton = document.getElementById('form-builder-schema-copy');
  var closeButtons = modal === null || modal === void 0 ? void 0 : modal.querySelectorAll('[data-fb-close-schema-modal]');

  if (!nextButton || !modal || !output) {
    return;
  }

  nextButton.addEventListener('click', function () {
    var schema = (0,_schema__WEBPACK_IMPORTED_MODULE_0__.serializeFormSchema)();
    var json = (0,_schema__WEBPACK_IMPORTED_MODULE_0__.serializeFormSchemaJson)(true);
    console.log('Form Builder schema:', schema);
    console.log(json);
    output.value = json;
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  });
  copyButton === null || copyButton === void 0 ? void 0 : copyButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var json;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            json = output.value;
            _context.prev = 1;
            _context.next = 4;
            return navigator.clipboard.writeText(json);

          case 4:
            showCopyFeedback(copyButton, 'Copied!');
            _context.next = 12;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            output.select();
            document.execCommand('copy');
            showCopyFeedback(copyButton, 'Copied!');

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  })));
  closeButtons === null || closeButtons === void 0 ? void 0 : closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      return closeSchemaModal(modal);
    });
  });
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeSchemaModal(modal);
    }
  });
  document.addEventListener('keydown', function (event) {
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
  var originalText = button.textContent;
  button.textContent = message;
  button.disabled = true;
  window.setTimeout(function () {
    button.textContent = originalText;
    button.disabled = false;
  }, 1500);
}

/***/ }),

/***/ "./resources/js/form-builder/schema.js":
/*!*********************************************!*\
  !*** ./resources/js/form-builder/schema.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeFormSchema": () => (/* binding */ serializeFormSchema),
/* harmony export */   "serializeFormSchemaJson": () => (/* binding */ serializeFormSchemaJson)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./resources/js/form-builder/state.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * @typedef {Object} FormSchemaField
 * @property {string} id
 * @property {string} type
 * @property {string} label
 * @property {string} placeholder
 * @property {boolean} required
 * @property {string} cssClass
 * @property {string} defaultValue
 * @property {number|null} minLength
 * @property {number|null} maxLength
 * @property {string[]} options
 * @property {number} order
 */

/**
 * @typedef {Object} FormSchema
 * @property {string} title
 * @property {string} submissionUrl
 * @property {FormSchemaField[]} fields
 */

/**
 * @returns {FormSchema}
 */

function serializeFormSchema() {
  var _submissionUrlEl$text, _submissionUrlEl$text2;

  var titleInput = document.getElementById('form-builder-title');
  var submissionUrlEl = document.getElementById('form-builder-submission-url');
  return {
    title: titleInput instanceof HTMLInputElement ? titleInput.value.trim() : 'Untitled Form',
    submissionUrl: (_submissionUrlEl$text = submissionUrlEl === null || submissionUrlEl === void 0 ? void 0 : (_submissionUrlEl$text2 = submissionUrlEl.textContent) === null || _submissionUrlEl$text2 === void 0 ? void 0 : _submissionUrlEl$text2.trim()) !== null && _submissionUrlEl$text !== void 0 ? _submissionUrlEl$text : '',
    fields: (0,_state__WEBPACK_IMPORTED_MODULE_0__.getFields)().map(function (field, index) {
      return serializeField(field, index);
    })
  };
}
/**
 * @param {import('./constants').FormField} field
 * @param {number} index
 * @returns {FormSchemaField}
 */

function serializeField(field, index) {
  return {
    id: field.id,
    type: field.type,
    label: field.label,
    placeholder: field.placeholder,
    required: field.required,
    cssClass: field.cssClass,
    defaultValue: field.value,
    minLength: field.minLength,
    maxLength: field.maxLength,
    options: _toConsumableArray(field.options),
    order: index
  };
}
/**
 * @param {boolean} [pretty=true]
 * @returns {string}
 */


function serializeFormSchemaJson() {
  var pretty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return JSON.stringify(serializeFormSchema(), null, pretty ? 2 : 0);
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
/* harmony export */   "hydrateState": () => (/* binding */ hydrateState),
/* harmony export */   "moveFieldToEnd": () => (/* binding */ moveFieldToEnd),
/* harmony export */   "onFieldsChange": () => (/* binding */ onFieldsChange),
/* harmony export */   "onSelectionChange": () => (/* binding */ onSelectionChange),
/* harmony export */   "removeField": () => (/* binding */ removeField),
/* harmony export */   "reorderField": () => (/* binding */ reorderField),
/* harmony export */   "selectField": () => (/* binding */ selectField),
/* harmony export */   "updateField": () => (/* binding */ updateField)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/form-builder/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
 * @param {string} fieldId
 * @param {string} targetFieldId
 * @param {boolean} insertAfter
 */

function reorderField(fieldId, targetFieldId, insertAfter) {
  var fromIndex = fields.findIndex(function (field) {
    return field.id === fieldId;
  });
  var toIndex = fields.findIndex(function (field) {
    return field.id === targetFieldId;
  });

  if (fromIndex === -1 || toIndex === -1 || fieldId === targetFieldId) {
    return;
  }

  if (insertAfter) {
    toIndex += 1;
  }

  var nextFields = _toConsumableArray(fields);

  var _nextFields$splice = nextFields.splice(fromIndex, 1),
      _nextFields$splice2 = _slicedToArray(_nextFields$splice, 1),
      movedField = _nextFields$splice2[0];

  if (fromIndex < toIndex) {
    toIndex -= 1;
  }

  nextFields.splice(toIndex, 0, movedField);
  fields = nextFields;
  notifyFields();
}
/**
 * @param {string} fieldId
 */

function moveFieldToEnd(fieldId) {
  var fromIndex = fields.findIndex(function (field) {
    return field.id === fieldId;
  });

  if (fromIndex === -1 || fromIndex === fields.length - 1) {
    return;
  }

  var nextFields = _toConsumableArray(fields);

  var _nextFields$splice3 = nextFields.splice(fromIndex, 1),
      _nextFields$splice4 = _slicedToArray(_nextFields$splice3, 1),
      movedField = _nextFields$splice4[0];

  nextFields.push(movedField);
  fields = nextFields;
  notifyFields();
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
 * @param {import('./constants').FormField[]} nextFields
 * @param {string|null} [nextSelectedId]
 */

function hydrateState(nextFields) {
  var nextSelectedId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  fields = nextFields.map(function (field) {
    return _objectSpread(_objectSpread({}, field), {}, {
      options: _toConsumableArray(field.options)
    });
  });
  selectedFieldId = nextSelectedId && fields.some(function (field) {
    return field.id === nextSelectedId;
  }) ? nextSelectedId : null;
  notifyFields();
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

/***/ }),

/***/ "./resources/js/form-builder/storage.js":
/*!**********************************************!*\
  !*** ./resources/js/form-builder/storage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearFormDraft": () => (/* binding */ clearFormDraft),
/* harmony export */   "loadFormDraft": () => (/* binding */ loadFormDraft),
/* harmony export */   "saveFormDraft": () => (/* binding */ saveFormDraft)
/* harmony export */ });
var STORAGE_KEY = 'form-builder-draft';
/**
 * @param {unknown} snapshot
 */

function saveFormDraft(snapshot) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch (error) {
    console.warn('Unable to save form builder draft:', error);
  }
}
/**
 * @returns {object|null}
 */

function loadFormDraft() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return null;
    }

    return JSON.parse(raw);
  } catch (error) {
    console.warn('Unable to load form builder draft:', error);
    return null;
  }
}
function clearFormDraft() {
  localStorage.removeItem(STORAGE_KEY);
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
/* harmony import */ var _field_reorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field-reorder */ "./resources/js/form-builder/field-reorder.js");
/* harmony import */ var _schema_output__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schema-output */ "./resources/js/form-builder/schema-output.js");
/* harmony import */ var _persistence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./persistence */ "./resources/js/form-builder/persistence.js");
/* harmony import */ var _preview_mode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview-mode */ "./resources/js/form-builder/preview-mode.js");









document.addEventListener('DOMContentLoaded', function () {
  (0,_persistence__WEBPACK_IMPORTED_MODULE_7__.initPersistence)();
  initTitleCounter();
  (0,_palette__WEBPACK_IMPORTED_MODULE_0__.initPalette)();
  (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.initCanvas)();
  (0,_drag_drop__WEBPACK_IMPORTED_MODULE_2__.initDragDrop)();
  (0,_field_actions__WEBPACK_IMPORTED_MODULE_3__.initFieldActions)();
  (0,_field_options__WEBPACK_IMPORTED_MODULE_4__.initFieldOptionsPanel)();
  (0,_field_reorder__WEBPACK_IMPORTED_MODULE_5__.initFieldReorder)();
  (0,_schema_output__WEBPACK_IMPORTED_MODULE_6__.initSchemaOutput)();
  (0,_preview_mode__WEBPACK_IMPORTED_MODULE_8__.initPreviewMode)();
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