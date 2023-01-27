import { fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

/**
 * Operador: pluck()
 * Deprecated
 * Extrae unicamente un valor (que especifiquemos nosotros) del objeto que se esta emitiendo en el Observable
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

keyupCode$.subscribe(code => console.log('map: ', code));
keyupPluck$.subscribe(code => console.log('pluck: ', code));
keyupPluck2$.subscribe(code => console.log('pluck: ', code));