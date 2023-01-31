import { debounceTime, fromEvent, interval, of } from "rxjs";
import { concatMap,  exhaustMap,  take, takeUntil } from "rxjs/operators";

/**
 * Operador: exhaustMap()
 * Flattening Operator - Operador de aplanamiento
 * Solo mantiene una subscripción activa
 * Si el source genera una nueva emisión mientras que exista una subscripción activa
 * simplemente la ignora y no la procesa
 */

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap(() => interval$)
)
.subscribe(console.log);