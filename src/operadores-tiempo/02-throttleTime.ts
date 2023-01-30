import { asyncScheduler, from, fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, tap, throttleTime } from "rxjs/operators";

/**
 * Operador throtleTime()
 * Parecido al debounceTime()
 * Detecta una emisión y apartir de esa emisión inicia el contador de tiempo (por ejemplo 2000ms = 2 seg)
 * No emite valores hasta que haya pasado el tiempo indicado, es decir que durante esos 2 segundos va a 
 * omitir todos las emisiones producidas por el Observable hasta que hayan pasado esos 2 segundos
 */

const click$ = fromEvent(document, 'click');

click$
.pipe(
    throttleTime(3000)
)
.subscribe(console.log);


//Ejemplo 2

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
.pipe(
    //throttleTime(5000),
    throttleTime(3000, asyncScheduler, { leading: true, trailing: true}),
    pluck('target', 'value'),
    //map<KeyboardEvent, any>(x => x?.target?.value),
    distinctUntilChanged()
)
.subscribe(console.log);
