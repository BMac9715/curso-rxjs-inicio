import { asyncScheduler, from, fromEvent, interval } from 'rxjs';
import { debounceTime, map, sample, sampleTime } from "rxjs/operators";

/**
 * Operador sample()
 * Emite el último valor emitido por el Observable hasta que el otro Observable
 * emita un valor
 */

const interval$ = interval(5000);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);
