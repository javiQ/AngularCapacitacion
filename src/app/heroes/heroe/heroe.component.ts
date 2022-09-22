import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.Component.html'

})
export class HeroeComponent{

    nombre : string = 'Iroman';
    edad   : number = 50;

    get nombreCapitalizado() : string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}