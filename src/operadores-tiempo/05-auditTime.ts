import { asyncScheduler, from, fromEvent, interval } from 'rxjs';
import { auditTime, map, sample, tap } from "rxjs/operators";

/**
 * Operador auditTime()
 * Emite el último valor que ha sido emitido por el Observable en un periodo
 * de tiempo determinado
 */

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x}) => x),
    tap(x => console.log('Tap: ', x)),
    auditTime(2000)
).subscribe(console.log);
