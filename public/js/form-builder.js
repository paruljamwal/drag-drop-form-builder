/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/form-builder/constants.js":
/*!************************************************!*\
  !*** ./resources/js/form-builder/constants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIELD_TYPES": () => (/* binding */ FIELD_TYPES)
/* harmony export */ });
/**
 * Single source of truth for all form builder field types.
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
    return "\n        <button\n            type=\"button\"\n            class=\"form-builder-palette-tile\"\n            data-field-type=\"".concat(field.type, "\"\n            aria-label=\"Add ").concat(field.label, "\"\n        >\n            <span class=\"form-builder-palette-tile__icon\" aria-hidden=\"true\">").concat(field.icon, "</span>\n            <span class=\"form-builder-palette-tile__label\">").concat(field.label, "</span>\n        </button>\n    ");
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

document.addEventListener('DOMContentLoaded', function () {
  initTitleCounter();
  (0,_palette__WEBPACK_IMPORTED_MODULE_0__.initPalette)();
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