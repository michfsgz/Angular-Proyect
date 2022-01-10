import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>Hola mundo</h1>
    <p>{{title}}</p>

    <button (click)="suman()">+ 1</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-1)">- 1</button>


    <p>La base es: <strong>{{base}}</strong></p>


    <button (click)="acumular(base)">+ {{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">- {{base}}</button>
`
})
export class ContadorComponent {
    title: string = 'Contador app';
    numero: number = 10;
    base: number = 5;


    suman() {
        this.numero += 1;
    }

    restar() {
        this.numero -= 1;
    }

    acumular(numero: number) {
        this.numero += numero;
    }
}