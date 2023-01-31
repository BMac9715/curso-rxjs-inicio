
import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, exhaustMap, map, mergeMap, pluck, switchMap, tap } from "rxjs/operators";

/**
 * HMTL
 */

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

//Helper
const peticionHTTPLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
                                        .pipe(
                                            pluck('response', 'token'),
                                            catchError(err => of(''))
                                        );


//Streams
const submitForm$ = fromEvent(form, 'submit').pipe(
                        tap((ev)=>ev.preventDefault()),
                        map(ev => ({email: ev.target[0].value, password:  ev.target[1].value})),
                        //mergeMap(peticionHTTPLogin)   //Ejecuta todas las peticiones enviadas y las procesa cada una
                        //switchMap(peticionHTTPLogin)  //Cancela el resto de peticiones y solo mantiene la última emisión
                        exhaustMap(peticionHTTPLogin)   //Solo toma una emisión y el resto las ignora hasta que termine la emisión actual
                    );

submitForm$.subscribe(token => {
    console.log(token)
});

