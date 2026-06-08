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

  (0,_state__WEBPACK_IMPORTED_MODULE_0__.onFieldsChange)(function (fields) {
    var hasFields = fields.length > 0;
    emptyState.classList.toggle('hidden', hasFields);
    fieldsList.classList.toggle('hidden', !hasFields);
    fieldsList.replaceChildren.apply(fieldsList, _toConsumableArray(fields.map(function (field) {
      return (0,_field_preview__WEBPACK_IMPORTED_MODULE_1__.renderFieldCardElement)(field);
    })));
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

  if ('placeholder' in input) {
    input.placeholder = field.placeholder || '';
  }

  input.value = field.value || '';
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
/* harmony export */   "initPalette": () => (/* binding */ initPalette)
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
  var panels = root.querySelectorAll('[data-palette-panel]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-palette-tab');
      tabs.forEach(function (item) {
        var isActive = item.getAttribute('data-palette-tab') === target;
        item.classList.toggle('form-builder-subtab--active', isActive);
        item.classList.toggle('form-builder-subtab--inactive', !isActive);
        item.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      panels.forEach(function (panel) {
        var isVisible = panel.getAttribute('data-palette-panel') === target;
        panel.classList.toggle('hidden', !isVisible);
      });
    });
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
/* harmony export */   "getFields": () => (/* binding */ getFields),
/* harmony export */   "onFieldsChange": () => (/* binding */ onFieldsChange)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/form-builder/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/** @type {import('./constants').FormField[]} */

var fields = [];
/** @type {Set<(fields: import('./constants').FormField[]) => void>} */

var listeners = new Set();
/**
 * @returns {import('./constants').FormField[]}
 */

function getFields() {
  return _toConsumableArray(fields);
}
/**
 * @param {string} type
 * @returns {import('./constants').FormField}
 */

function addField(type) {
  var field = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.createDefaultField)(type);
  fields = [].concat(_toConsumableArray(fields), [field]);
  notify();
  return field;
}
/**
 * @param {(fields: import('./constants').FormField[]) => void} listener
 */

function onFieldsChange(listener) {
  listeners.add(listener);
  return function () {
    return listeners["delete"](listener);
  };
}

function notify() {
  listeners.forEach(function (listener) {
    return listener(getFields());
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



document.addEventListener('DOMContentLoaded', function () {
  initTitleCounter();
  (0,_palette__WEBPACK_IMPORTED_MODULE_0__.initPalette)();
  (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.initCanvas)();
  (0,_drag_drop__WEBPACK_IMPORTED_MODULE_2__.initDragDrop)();
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