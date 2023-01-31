import { combineLatest, concat, fromEvent, interval, merge } from "rxjs";
import { pluck, take } from "rxjs/operators";

/**
 * Función: combineLatest()
 *
 * Recibe una lista de observables y combina las salidas de los observables
 * y emite los valores de manera simultánea
 * 
 * Regresa un nuevo observable el cual emitirá valores hasta que todos los observables
 * de la lista hayan emitido al menos un valor
 * 
 */

// -> const keyup$ = fromEvent(document, 'keyup');
// -> const click$ = fromEvent(document, 'click');
// -> 
// -> combineLatest([
// ->     keyup$.pipe(pluck('type')),
// ->     click$.pipe(pluck('type'))])
// -> .subscribe(console.log)

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

//Helper
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck('target', 'value')
    );
}

combineLatest([
    getInputStream(input1),
    getInputStream(input2)
])
.subscribe(console.log)