import { fromEvent, interval } from 'rxjs';
import { first, map, takeUntil, tap } from "rxjs/operators"; 

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

/**
 * Operador: takeUntil()
 * Su caracteristica es que recibe otro Observable como parametro
 * Basicamente detiene la emisión y completa la subscripción cuando 
 * el Observable pasado como parametro emite su primer valor
 */

const counter$ = interval(1500);

const clickBtn$ = fromEvent(boton, 'click');

counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
});
