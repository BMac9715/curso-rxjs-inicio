import { fromEvent } from 'rxjs';
import { first, map, take, takeWhile, tap } from "rxjs/operators"; 

/**
 * Operador: takeWhile()
 * Permite recibir emisiones mientras la condición se cumpla
 * Una vez una emisión no cumpla la condición, se completa la subscripción
 */

const obs$ = fromEvent<MouseEvent>(document, 'click');


obs$
.pipe(
    map<MouseEvent, any>(({x,y})=>({x,y})),
    tap(console.log),
    takeWhile(({y}) => y <= 150, false) //El segundo parametro es inclusive, es decir que emite la emisión que ya no cumple la condición
)
.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
});