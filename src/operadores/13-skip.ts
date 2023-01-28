import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from "rxjs/operators"; 

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

/**
 * Operador: skip()
 * Omite "n" cantidad de emisiones que nosotros le indiquemos
 */

const counter$ = interval(1000);

//const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click')
                .pipe(
                    tap(()=> console.log('Tap antes del skip')),
                    skip(2),
                    tap(()=> console.log('Tap despues del skip'))
                );

counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
});
