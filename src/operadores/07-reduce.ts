import { from, interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

/**
 * Operador: reduce()
 * Aplica una función acumuladora a las emisiones producidas por el Observable
 * Cuando se aplica reduce(), no hay una respuesta hasta que se completen las emisiones del observable
 */

//Como funciona en javascript
const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer,0);
console.log('total arr: ', total);

interval(1000)
.pipe(
    take(6), //Este operador toma los primeros "n" valores emitidos, en este caso: 3
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
})