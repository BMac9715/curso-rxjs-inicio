import { debounceTime, fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser, GithubUsers } from "../interfaces/github-users";

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

/**
 * Helpers
 */

const mostrarUsuarios = (usuarios: GithubUser[]) => {
    orderList.innerHTML = '';
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.text = 'Ver página';
        anchor.href = usuario.html_url;
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

/**
 * Operador: mergeMap()
 * Flattening Operator - Operador de aplanamiento
 * Convierte un Observable de orden superior en un Observable de primer orden
 * No tiene limite de susbscripciones internas
 */

const letras$ = of('a', 'b', 'c');

letras$
.pipe(
    mergeMap((letra)=> interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)
.subscribe({
    next: val => console.log('next ', val),
    complete: () => console.log('Complete')
});

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log)