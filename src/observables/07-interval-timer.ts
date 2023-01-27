import { interval, timer } from "rxjs";

const observer = {
    next: (val) => console.log('next: ', val),
    complete: () => console.log('Completado')
}

/**
 * interval()
 * Nos permite crear Observables que retornan una secuencia de números en intervalos de tiempo que le definamos
 * Siempre inicia en 0
 * Por naturaleza son asincronos
 */

const interval$ = interval(1000);

console.log('Inicio');
interval$.subscribe(observer);
console.log('Fin');


/**
 * timer()
 * Nos permite crear Observables que retornan una secuencia de números despues de un tiempo especifico
 * Siempre inicia en 0
 * Por naturaleza son asincronos
 */

// --> const timer$ = timer(5000);
// --> 
// --> console.log('Inicio');
// --> timer$.subscribe(observer);
// --> console.log('Fin');

// Inicia una secuencia despues del tiempo determinado para dar inicio
// --> const timer$ = timer(2000, 1000);
// --> 
// --> console.log('Inicio');
// --> timer$.subscribe(observer);
// --> console.log('Fin');

// Podemos usar el Timer para ejecutar una acción en un tiempo especifico del calendario

const hoyenCinco = new Date(); //Ahora
hoyenCinco.setSeconds(hoyenCinco.getSeconds() + 10);

const timer$ = timer(hoyenCinco);

console.log('Inicio');
timer$.subscribe(observer);
console.log('Fin');