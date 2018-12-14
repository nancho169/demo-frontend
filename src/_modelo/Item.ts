export class Item{

	name: string;
	modificado: boolean;
	fecha: string;
	constructor(name: string, modificado:boolean,fecha: string){
		this.name = name;
		this.modificado= modificado;
		this.fecha= fecha;
	}
}