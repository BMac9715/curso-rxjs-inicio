import { catchError, map, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    if(!response.ok){
        throw new Error(response.statusText)
    }

    return response;
}

const fetchPromesa = fetch(url);

//fetchPromesa
//.then(resp => resp.json())
//.then(data => console.log(data))
//.catch(console.warn);

//fetchPromesa
//  .then(manejaErrores)
//  .then(resp => resp.json())
//  .then(data => console.log(data))
//  .catch(console.warn);

/**
 * catchError
 * Atrapa el error, no solo HTTP si no tambien de los Observables
 * Retorna un observable, regularmente un objeto vacio o un arreglo vacio
 */

const atrapaError = (err: AjaxError) => {
    console.warn('Error: ', err.message);
    return of([])
}

ajax(url)
.pipe(
    map(resp => resp.response),
    //catchError( err => {
    //    console.warn('Error: ', err);
    //    return of([])
    //})
    catchError(atrapaError)
)
.subscribe(users => console.log('Usuarios: ', users))
