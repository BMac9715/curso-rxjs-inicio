import { combineLatest, concat, forkJoin, fromEvent, interval, of } from "rxjs";
import { delay, pluck, take } from "rxjs/operators";

/**
 * Función: forkJoin()
 *
 * Los observables pasados como parametros deben ser finitos
 * 
 * Recibe una lista de observables y combina las salidas de los observables
 * en un arreglo en una sola salida
 * 
 * Si uno de los observables no retorna valores no se tendra emisión por parte
 * del forkJoin
 * 
 */

const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(5));
const letras$ = of('a', 'b', 'c').pipe(delay(6000));

//forkJoin([
//    numeros$,
//    intervalo$,
//    letras$
//])
//.subscribe(console.log);

forkJoin({
    numeros$,
    intervalo$,
    letras$
})
.subscribe(console.log);