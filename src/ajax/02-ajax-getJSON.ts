import { catchError, map, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABSCADFASDF1ALSKDF'
});

obs$.subscribe(data => console.log('Data: ', data));