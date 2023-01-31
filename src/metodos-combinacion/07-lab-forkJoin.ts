import { combineLatest, concat, forkJoin, fromEvent, interval, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, delay, pluck, take } from "rxjs/operators";

/**
 * Función: forkJoin()
 *
 * Los observables pasados como parametros deben ser finitos
 * 
 * Recibe una lista de observables y combina las salidas de los observables
 * en un arreglo en una sola salida
 * 
 * Si uno de los observables no retorna valores no se tendra emisión por parte
 * del forkJoin
 * 
 */

//Uso mas común realizar peticiones HTTP de manera simulatanea

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'BMac9715';

forkJoin({
    usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`).pipe(catchError(err => of([]))),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
})
//.pipe(
//    catchError(err => of(err.message))
//)
.subscribe(console.log);