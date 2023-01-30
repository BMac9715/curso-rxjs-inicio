import { catchError, map, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://httpbaain.org/delay/1';

const manejaError = (err: AjaxError) => {
    console.warn('Error: ', err.message);
    return of({ ok: false, usuarios: [] })
}

//const obs$ = ajax.getJSON(url, {
//    'Content-Type': 'application/json',
//    'mi-token': 'ABSCADFASDF1ALSKDF'
//}).pipe(
//    catchError(manejaError)
//)
//;
//
//const obs2$ = ajax(url).pipe(
//    catchError(manejaError)
//);

//obs$.subscribe(data => console.log('getJSON: ', data));
//obs2$.subscribe(data => console.log('ajax: ', data));

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABSCADFASDF1ALSKDF'
});

const obs2$ = ajax(url);

//obs2$.subscribe(data => console.log('ajax: ', data));
obs$
.pipe(
    catchError(manejaError) //Se completan ambas 
)
.subscribe({
    next: data => console.log('getJSON: ', data),
    error: err => console.warn('Error subs: ', err),
    complete: () => console.log('Complete')
});
