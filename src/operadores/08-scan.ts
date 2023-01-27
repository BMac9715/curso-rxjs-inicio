import { from, interval } from "rxjs";
import { map, reduce, scan, tap } from "rxjs/operators";

/**
 * Operador: scan()
 * Aplica una función acumuladora a las emisiones producidas por el Observable
 * La diferencia con reduce() es que con el scan() cada emisión va emitiendo el acumulado, 
 * no se espera hasta que todas las emisiones pasen
 */

//Como funciona en javascript
const numbers = [1,2,3,4,5];

//const totalAcumulador = (acc: number, cur: number) => {
//    return acc + cur;
//}
const totalAcumulador = (acc: number, cur: number) => acc + cur;

//Ejecución con reduce()
from(numbers)
.pipe(
    reduce(totalAcumulador, 0)
)
.subscribe(
    console.log
)

//Ejecución con scan()
from(numbers)
.pipe(
    scan(totalAcumulador, 0)
)
.subscribe(
    console.log
);

// Redux
// Manejar el estado global

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'bmac', autenticado: false, token: null},
    { id: 'bmac', autenticado: false, token: 'ABC'},
    { id: 'bmac', autenticado: false, token: 'ABCV123'}
];

//const state$ = from(user).pipe(
//    scan<Usuario>((acc, cur) => {
//        return {...acc, ...cur}
//    }, {edad: 33})
//);
//
//const id$ = state$.pipe(
//    map(state => state.id)
//)
//
//id$.subscribe(console.log)