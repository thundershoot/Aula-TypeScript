"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var empresa = /** @class */ (function (_super) {
    __extends(empresa, _super);
    function empresa(name, cnpj) {
        var _this = _super.call(this, name) || this;
        _this.cnpj = cnpj;
        return _this;
    }
    empresa.prototype.digaSeuNome = function () {
        _super.prototype.digaSeuNome.call(this);
        console.log(this.cnpj);
    };
    empresa.prototype.toString = function () {
        return "Class Empresa, Name: " + this.getName() + ", CNPJ: " + this.cnpj;
    };
    return empresa;
}(cliente_1.cliente));
exports.empresa = empresa;
//# sourceMappingURL=empresa.js.map