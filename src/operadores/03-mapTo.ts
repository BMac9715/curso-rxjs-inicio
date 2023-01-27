import { fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

/**
 * Operador: mapTo()
 * Deprecated
 * Transforma la emisión del observable en una salida especifica (siempre)
 */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('key')
);

const keyupPluck2$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

keyupCode$.subscribe(code => console.log('map: ', code));
keyupPluck$.subscribe(code => console.log('pluck: ', code));
keyupPluck2$.subscribe(code => console.log('pluck: ', code));
keyupMapTo$.subscribe(code => console.log('mapTo: ', code));