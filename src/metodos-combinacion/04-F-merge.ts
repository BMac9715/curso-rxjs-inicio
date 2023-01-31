import { concat, fromEvent, interval, merge } from "rxjs";
import { pluck, take } from "rxjs/operators";

/**
 * Función: merge()
 *
 * Recibe una lista de observables y combina las salidas de estos observables en una sola salida
 * La diferencia con el concat es que no espera a que un Observable termine,
 * en este caso lo que realiza es una mezcla de las emisiones de los observables en la lista
 * 
 * Se completa hasta que todos los Observables esten completos
 */

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type')))
.subscribe(console.log)