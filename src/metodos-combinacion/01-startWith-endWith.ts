import { endWith, of, startWith } from "rxjs";

/**
 * Operador: startWith()
 * Al momento de realizar la subcripción, inmediatamente el observable inicia emitiendo el
 * parametro indicado, luego sigue su flujo de emisiones normal
 * 
 * El parametro puede ser sincrono o asincrono
 */

const numeros$ = of(1,2,3).pipe(
    startWith(0)
);

numeros$.subscribe(console.log);

/**
 * Operador: endWith()
 * Antes que se complete el observable, va a emitir el parametro indicado, luego completa su flujo
 * de emisiones
 * 
 * El parametro puede ser sincrono o asincrono
 */

const numerosE$ = of(1,2,3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);

numerosE$.subscribe(console.log);

