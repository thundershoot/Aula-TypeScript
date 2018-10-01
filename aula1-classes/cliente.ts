export class cliente{
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    public digaSeuNome()  : void{
        console.log(this.name);
    }

    public getName(): string{
        return this.name;
    }
}