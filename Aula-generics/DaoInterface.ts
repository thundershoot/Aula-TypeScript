export interface DaoInterface<T>{
    tableName: string;

    insert(object:T):boolean;
    update(object:T):boolean;
    delete(object:T):boolean;
    find(id:number):T;
    findAll():[T];
}