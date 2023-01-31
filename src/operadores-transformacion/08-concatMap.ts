import { debounceTime, fromEvent, interval, of } from "rxjs";
import { concatMap, map, mergeMap, pluck, switchMap, take, takeUntil } from "rxjs/operators";

/**
 * Operador: concatMap()
 * Flattening Operator - Operador de aplanamiento
 * Sirve para concatenar los observables resultantes que pueden fluir atraves de ese operador
 * Basicamente va encolando cada observable que genera la emisión del principal y al completar
 * una subscripción inmediatamente inicia el siguiente en la cola
 */

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

//click$.pipe(
//    switchMap(() => interval$)
//)
//.subscribe(console.log);

click$.pipe(
    concatMap(() => interval$)
)
.subscribe(console.log);