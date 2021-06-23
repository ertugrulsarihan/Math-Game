"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.getValue = void 0;
function getValue(element) {
    var inputElement = document.getElementById(element);
    return inputElement.value;
}
exports.getValue = getValue;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map