import { fromEvent } from "rxjs";

/**
 * fromEvent
 * Es una función que nos permite crear Observales apartir de un Event Target (el Document)
 */

//Eventos del DOM
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer = {
    next: (val) => console.log('next: ', val)
}

// --> src1$.subscribe(event => {
// -->     console.log(event.x);
// -->     console.log(event.y);
// --> });

//Version en ECMAscript 6
src1$.subscribe(({x,y}) => {
    console.log(x, y);
});

src2$.subscribe(evento => {
    console.log(evento.key);
});