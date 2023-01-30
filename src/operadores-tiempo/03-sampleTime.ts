import { asyncScheduler, from, fromEvent } from 'rxjs';
import { debounceTime, map, sampleTime } from "rxjs/operators";

/**
 * Operador sampleTime()
 * Permite obtener el último valor emitido en un intervalo de tiempo
 * Si no se ha emitido un valor, no emite nada
 */

const click$ = fromEvent(document, 'click');

click$
.pipe(
    sampleTime(2000), //Es mas eficiente colocarlo al inicio, así no procesa data demás
    map((x,y) => ({x,y}))
)
.subscribe(console.log);
