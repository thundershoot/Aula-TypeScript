"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empresa_1 = require("./empresa");
var EmpresaDao = /** @class */ (function () {
    function EmpresaDao() {
    }
    EmpresaDao.prototype.insert = function (empresa) {
        console.log('Inserting...', empresa.toString());
        return true;
    };
    EmpresaDao.prototype.update = function (empresa) {
        return true;
    };
    EmpresaDao.prototype.delete = function (empresa) {
        return true;
    };
    EmpresaDao.prototype.find = function (id) {
        return null;
    };
    EmpresaDao.prototype.findAll = function () {
        return [new empresa_1.empresa('', '')];
    };
    return EmpresaDao;
}());
exports.EmpresaDao = EmpresaDao;
//# sourceMappingURL=empresa-dao.js.map