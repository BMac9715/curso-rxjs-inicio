import { concat, interval } from "rxjs";
import { take } from "rxjs/operators";

/**
 * Función: concat()
 *
 * Es una función que recibe una lista de observables
 * Ejecuta cada observable uno a uno, es decir que espera a que el Observable1
 * se complete para continuar con el Observable2
 */

const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2))
)
.subscribe(
    console.log
);