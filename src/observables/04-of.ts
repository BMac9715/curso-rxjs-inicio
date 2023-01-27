import { of } from "rxjs";

/**
 * of()
 * Es una función que nos permite crear Observables a partir de una lista de elementos
*/

// --> const obs$ = of(1,2,3,4,5,6,7,8);

/**
 * Enviar solo un arreglo se interpreta como un solo argumento
 * Para utilizar el arreglo tendriamos que utilizar el comando spreat (...) para enviar cada elemento del arreglo
 */

// const obs$ = of([1,2,3,4,5,6,7,8]); <-- Advertencia solo se enviare un argumento como arreglo
// --> const obs$ = of(...[1,2,3,4,5,6,7,8]);

/**
 * Puede recibir diferente tipos de items
 */
// --> const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

const obs$ = of<number[]>(...[1,2,3,4,5,6,7,8]);

console.log('Inicio del Obs$');
obs$.subscribe({
    next: (val) => console.log('next: ', val),
    error: null,
    complete: () => console.info('Terminamos la secuencia')
});
console.log('Fin del Obs$');