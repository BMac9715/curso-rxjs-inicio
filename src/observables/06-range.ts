import { asyncScheduler, of, range } from "rxjs";

/**
 * range()
 * Permite crear un Observable que emite una secuencia de números en base a un rango
 * Por defecto son sincronos, pero se pueden tranformar a que sean asincronos usando "asyncScheduler"
 */

//Limitaciones del of
const src$ = of(1,2,3,4,5);

src$.subscribe(console.log);

//Implementación del range

// --> const src2$ = range(1, 100);
const src2$ = range(-5, 10); //son emisiones consecutivas apartir de un inicio, no desde un inicio a fin

console.log('Inicio');
src2$.subscribe(console.log);
console.log('Fin');

/**
 * Transformandolo a manera Asincrona
 */

const src3$ = range(1, 5, asyncScheduler);
console.log('Inicio');
src3$.subscribe(console.log);
console.log('Fin');