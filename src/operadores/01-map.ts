import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";

/**
 * Operador: map
 * Transforma lo que emite el observable en lo que nosotros necesitemos
 */

const obs1$ = range(1,5).pipe(
    map<number, number>(val => val * 10)
);


//obs1$.subscribe(console.log);

//Ahora necesito que la secuencia sea de 10 en 10
//Solución arcaica y válida
// --> obs1$.subscribe( val => console.log(val*10));

obs1$.subscribe(console.log)


/**
 * Ejemplo con fromEvent
 */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

/*
Hacer solo eso no funciona, ya que crea otra instancia del Observable
keyup$.pipe(
    map(event => event.code)
)*/

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

//keyup$.subscribe(val => console.log('map: ', val.code));
keyupCode$.subscribe(code => console.log('map: ', code));