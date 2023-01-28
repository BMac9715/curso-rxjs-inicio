import { from, fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, tap } from "rxjs/operators";

/**
 * Operador debounceTime()
 * Detecta la ultima emisión del Observable e inicia un contador de tiempo (ms)
 * Si dicho contador llega al parametro de tiempo indicado, realiza la emisión del valor
 * 
 * El contador se reinicia cada vez que hay una emisión por parte del Observable
 */

const click$ = fromEvent(document, 'click');

click$
.pipe(
    debounceTime(3000)
)
.subscribe(console.log);


//Ejemplo 2

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log);
