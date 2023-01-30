import { debounceTime, fromEvent, map, pluck } from "rxjs";
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

const url = 'https://api.github.com/users';
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    //map(event => {
    //    const text = event.target['value'];
    //    return text;
    //})
    map(event => {
        const text = event.target['value'];
        return ajax.getJSON(`${url}/${text}`);
    })
).subscribe(
    resp => {
        resp.pipe(
            pluck('url')
        ).subscribe(console.log)
    }
)
