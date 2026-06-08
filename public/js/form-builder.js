/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./resources/js/form-builder/index.js ***!
  \********************************************/
document.addEventListener('DOMContentLoaded', function () {
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
});
/******/ })()
;