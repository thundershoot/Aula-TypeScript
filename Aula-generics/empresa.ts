import { cliente } from './cliente';
export class empresa extends cliente{
    private cnpj: string;
    constructor(name: string, cnpj: string){
        super(name);

        this.cnpj = cnpj;

    }
    public digaSeuNome()  : void{
        super.digaSeuNome();
        console.log(this.cnpj);
    }

    public toString():string{
        return `Class Empresa, Name: ${this.getName()}, CNPJ: ${this.cnpj}`;
    }
}