import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{

    tableName: string;

    insert(object: T) :boolean{
        console.log('Inserting...');
        return true;
    }

    update(object: T) :boolean{
        return true;
    }

    delete(object: T) :boolean{
        return true;
    }

    find(id: number) : T{
        return null;
    }

    findAll():[T]{
        return [null];
    }
}