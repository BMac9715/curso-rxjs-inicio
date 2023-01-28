import { from, of } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators"; 

/**
 * Operador: distinctUntilKeyChanged()
 * Este operador permite pasar solo los valores que no han sido emitidos por el Observable
 * Siempre y cuando la emisión anterior no sea la misma
 * Revisa o compara el "key" que le indiquemos
 */

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
    //distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)