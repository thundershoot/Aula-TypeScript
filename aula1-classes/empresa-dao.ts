import { empresa } from './empresa';
import { DaoInterface } from "./DaoInterface";

export class EmpresaDao implements DaoInterface{

    tableName: string;

    insert(empresa: empresa) :boolean{
        console.log('Inserting...',empresa.toString());
        return true;
    }

    update(empresa: empresa) :boolean{
        return true;
    }

    delete(empresa: empresa) :boolean{
        return true;
    }

    find(id: number) : empresa{
        return null;
    }

    findAll():[empresa]{
        return [new empresa('','')];
    }
}