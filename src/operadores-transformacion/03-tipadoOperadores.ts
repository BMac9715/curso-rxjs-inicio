import { debounceTime, fromEvent, map, mergeAll, Observable, pluck } from "rxjs";
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
    map<KeyboardEvent, string>(x => x?.target['value']),
    map<string, Observable<GithubUsers>>(text => ajax.getJSON(`${url}/search/users?q=${text}`)),
    mergeAll<Observable<GithubUsers>>(),
    map<GithubUsers, GithubUser[]>(({items}) => items)
).subscribe(
    users => {
        mostrarUsuarios(users);
    }
);