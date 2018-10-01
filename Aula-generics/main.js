"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empresa_1 = require("./empresa");
var Dao_1 = require("./Dao");
var emp = new empresa_1.empresa('AWSNET', '00.000.000/0001-00');
emp.digaSeuNome();
var empresaDao = new Dao_1.Dao();
empresaDao.insert(emp);
//# sourceMappingURL=main.js.map