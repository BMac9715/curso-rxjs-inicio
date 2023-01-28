import { from, of } from 'rxjs';
import { distinct, distinctUntilChanged } from "rxjs/operators"; 

/**
 * Operador: distinctUntilChanged()
 * Este operador permite pasar solo los valores que no han sido emitidos por el Observable
 * Siempre y cuando la emisión anterior no sea la misma
 */

const numbers$ = of<any>(1,'1',1,3,3,2,2,3,1,4,4,4,5,1,2,5,6);

numbers$.
pipe(
    distinctUntilChanged()  // Utiliza el operador '===' de javascript para realizar la comparación
)
.subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('Complete')
});


//Ejemplo con Objetos

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {nombre: 'Megaman'},
    {nombre: 'Superman'},
    {nombre: 'Megaman'},
    {nombre: 'Megaman'},
    {nombre: 'Batman'},
    {nombre: 'Ironman'},
    {nombre: 'Ironman'},
    {nombre: 'Capitan America'},
    {nombre: 'Thanos'},
    {nombre: 'Shazam'},
    {nombre: 'Thanos'},
    {nombre: 'Hachi'},
    {nombre: 'Capitan America'},
    {nombre: 'Spiderman'}
]

from(personajes)
.pipe(
    //distinctUntilChanged()
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
)
.subscribe(console.log)