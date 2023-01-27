import { from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

/**
 * Encadenamiento de Operadores
 */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
                .pipe(
                    map( event => event.code ),
                    filter(k => k === 'Enter')
                );

keyup$.subscribe(console.log)