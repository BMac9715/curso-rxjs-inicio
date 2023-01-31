import { debounceTime, fromEvent, interval, of } from "rxjs";
import { map, mergeMap, pluck, take, takeUntil } from "rxjs/operators";
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

//input$.pipe(
//    debounceTime(500),
//    map(x => x?.target['value']),
//    //map(text => ajax.getJSON(`${url}/search/users?q=${text}`)),
//    //mergeAll(),
//    mergeMap(text => ajax.getJSON(`${url}/search/users?q=${text}`)),
//    pluck('items')
//).subscribe(
//    resp => {
//        console.log(resp)
//    }
//);

const url2 = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    mergeMap(text => ajax.getJSON(url + text))
).subscribe(console.log);
