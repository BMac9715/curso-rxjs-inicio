import { from, range } from "rxjs";
import { map, tap } from "rxjs/operators";

/**
 * Operador: tap()
 * Es utilizado para crear o realizar efectos secundarios cuando el observable emite un valor
 */

const numeros$ = range(1, 5);

numeros$.pipe(
    tap(x => console.log('antes: ', x)),
    map(x => x*10),
    tap({
        next: valor => console.log('despues: ', valor),
        complete: () => console.log('Se acabo todo')
    })
)
.subscribe(
    val => console.log('subs: ', val)
);