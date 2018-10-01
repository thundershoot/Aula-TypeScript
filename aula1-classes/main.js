"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empresa_dao_1 = require("./empresa-dao");
var empresa_1 = require("./empresa");
var cliente_1 = require("./cliente");
var c = new cliente_1.cliente('André');
c.digaSeuNome();
var emp = new empresa_1.empresa('AWSNET', '00.000.000/0001-00');
emp.digaSeuNome();
var empresaDao = new empresa_dao_1.EmpresaDao();
empresaDao.insert(emp);
//# sourceMappingURL=main.js.map