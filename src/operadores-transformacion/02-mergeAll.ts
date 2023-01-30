import { debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

/**
 * Referencias en HTML
 */
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

/**
 * Streams
 */

const url = 'https://api.github.com';
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

//input$.pipe(
//    debounceTime(500),
//    //map(event => {
//    //    const text = event.target['value'];
//    //    return text;
//    //})
//    map(event => {
//        const text = event.target['value'];
//        return ajax.getJSON(`${url}/${text}`);
//    })
//).subscribe(
//    resp => {
//        resp.pipe(
//            pluck('url')
//        ).subscribe(console.log)
//    }
//);

/**
 * Operador: mergeAll()
 * Flattening Operator - Operador de aplanamiento
 * Convierte un Observable de orden superior en un Observable de primer orden
 * que entrega simultáneamente todos los valores que se emiten en los 
 * Observables internos.
 */

input$.pipe(
    debounceTime(500),
    map(x => x?.target['value']),
    map(text => ajax.getJSON(`${url}/search/users?q=${text}`)),
    mergeAll(),
    pluck('items')
).subscribe(
    resp => {
        console.log(resp)
    }
);