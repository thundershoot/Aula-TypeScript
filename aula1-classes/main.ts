import { EmpresaDao } from './empresa-dao';
import { empresa } from './empresa';
import { cliente } from './cliente';
import { DaoInterface } from './DaoInterface';
let c = new cliente('André');
c.digaSeuNome();

let emp = new empresa('AWSNET' , '00.000.000/0001-00');
emp.digaSeuNome();

let empresaDao: DaoInterface = new EmpresaDao();

empresaDao.insert(emp);