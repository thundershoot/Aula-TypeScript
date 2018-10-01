"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente = /** @class */ (function () {
    function cliente(name) {
        this.name = name;
    }
    cliente.prototype.digaSeuNome = function () {
        console.log(this.name);
    };
    cliente.prototype.getName = function () {
        return this.name;
    };
    return cliente;
}());
exports.cliente = cliente;
//# sourceMappingURL=cliente.js.map