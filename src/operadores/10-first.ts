import {fromEvent } from 'rxjs';
import { first, map, tap } from "rxjs/operators"; 

/**
 * Operador: first()
 * Basicamente permite la emisión del primer valor que emite el observable
 * e inmediatamente llama al método complete de la subscripción
 * 
 * Se le puede poner una condición, es decir que seguira pendiente de las 
 * emisiones hasta que una emisión cumpla la condición y luego de ello 
 * complete de la subscripción
 */

const obs$ = fromEvent<MouseEvent>(document, 'click');

// --> obs$
// --> .pipe(
// -->     //take(1)
// -->     first()
// --> )
// --> .subscribe({
// -->     next: val => console.log('Next: ', val),
// -->     complete: () => console.log('Complete')
// --> });

obs$
.pipe(
    tap<MouseEvent>(console.log),
    //map(event => ({clientX: event.clientX, clientY: event.clientY})),     <-- Forma 1
    map(({clientX, clientY}) => ({ clientX, clientY })),             //     <-- Forma 2
    first(event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
});