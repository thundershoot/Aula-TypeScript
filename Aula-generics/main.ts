import { empresa } from './empresa';
import { Dao } from './Dao';
import { DaoInterface } from './DaoInterface';

let emp = new empresa('AWSNET' , '00.000.000/0001-00');
emp.digaSeuNome();

let empresaDao: DaoInterface<empresa> = new Dao<empresa>();

empresaDao.insert(emp);