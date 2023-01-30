import { catchError, map, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

// ajax.get(url, {
//     //Headers
// });

/**
 * Forma 1 de hacer POST, PUT, DELETE
 */
//ajax.post(url, {
//    id: 1,
//    nombre: 'Bryan'
//}, {
//    'MiToken': 'ABCD12312D'
//})
//.subscribe(console.log)

ajax({
    url: url,
    method: 'POST',
    headers: {
        'MiToken': 'ASDFASDL123ZAA'
    },
    body: {
        id: 1,
        nombre: 'Bryan'
    }
})
.subscribe(console.log)
