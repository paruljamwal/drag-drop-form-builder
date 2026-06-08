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
    fieldsList.innerHTML = fields.map(function (field) {
      return (0,_field_preview__WEBPACK_IMPORTED_MODULE_1__.renderFieldCard)(field);
    }).join('');
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
/* harmony export */   "renderFieldCard": () => (/* binding */ renderFieldCard),
/* harmony export */   "renderFieldPreview": () => (/* binding */ renderFieldPreview)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./resources/js/form-builder/constants.js");

/**
 * @param {import('./constants').FormField} field
 * @returns {string}
 */

function renderFieldPreview(field) {
  if (!_constants__WEBPACK_IMPORTED_MODULE_0__.PREVIEW_FIELD_TYPES.includes(field.type)) {
    return "\n            <p class=\"text-sm text-gray-500\">\n                Preview for <span class=\"font-medium text-gray-700\">".concat(escapeHtml(field.label), "</span> coming soon.\n            </p>\n        ");
  }

  var label = "\n        <label class=\"mb-1.5 block text-sm font-medium text-gray-700\">\n            ".concat(escapeHtml(field.label)).concat(field.required ? '<span class="text-red-500"> *</span>' : '', "\n        </label>\n    ");

  switch (field.type) {
    case 'textarea':
      return "\n                ".concat(label, "\n                <textarea\n                    class=\"form-builder-preview-input min-h-[80px] resize-none\"\n                    placeholder=\"").concat(escapeHtml(field.placeholder), "\"\n                    disabled\n                ></textarea>\n            ");

    case 'select':
      return "\n                ".concat(label, "\n                <select class=\"form-builder-preview-input\" disabled>\n                    <option value=\"\">Select an option</option>\n                    ").concat(field.options.map(function (option) {
        return "<option>".concat(escapeHtml(option), "</option>");
      }).join(''), "\n                </select>\n            ");

    case 'radio':
      return "\n                ".concat(label, "\n                <div class=\"space-y-2\">\n                    ").concat(field.options.map(function (option, index) {
        return "\n                        <label class=\"flex items-center gap-2 text-sm text-gray-700\">\n                            <input type=\"radio\" name=\"".concat(escapeHtml(field.id), "\" disabled ").concat(index === 0 ? 'checked' : '', ">\n                            <span>").concat(escapeHtml(option), "</span>\n                        </label>\n                    ");
      }).join(''), "\n                </div>\n            ");

    case 'checkbox':
      return "\n                ".concat(label, "\n                <div class=\"space-y-2\">\n                    ").concat(field.options.map(function (option) {
        return "\n                        <label class=\"flex items-center gap-2 text-sm text-gray-700\">\n                            <input type=\"checkbox\" disabled>\n                            <span>".concat(escapeHtml(option), "</span>\n                        </label>\n                    ");
      }).join(''), "\n                </div>\n            ");

    default:
      {
        var inputType = field.type === 'phone' ? 'tel' : field.type;
        return "\n                ".concat(label, "\n                <input\n                    type=\"").concat(escapeHtml(inputType), "\"\n                    class=\"form-builder-preview-input\"\n                    placeholder=\"").concat(escapeHtml(field.placeholder), "\"\n                    disabled\n                >\n            ");
      }
  }
}
/**
 * @param {import('./constants').FormField} field
 * @returns {string}
 */

function renderFieldCard(field) {
  var _meta$label;

  var meta = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.getFieldTypeMeta)(field.type);
  return "\n        <article class=\"form-builder-field-card\" data-field-id=\"".concat(escapeHtml(field.id), "\" role=\"listitem\">\n            <header class=\"form-builder-field-card__header\">\n                <span class=\"form-builder-field-card__type\">").concat(escapeHtml((_meta$label = meta === null || meta === void 0 ? void 0 : meta.label) !== null && _meta$label !== void 0 ? _meta$label : field.type), "</span>\n            </header>\n            <div class=\"form-builder-field-card__body\">\n                ").concat(renderFieldPreview(field), "\n            </div>\n        </article>\n    ");
}
/**
 * @param {string} value
 * @returns {string}
 */

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
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