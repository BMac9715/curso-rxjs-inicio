import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

/**
 * Operador: take()
 * Limita la cantidad de emisiones que un observable puede tener
 * Una vez llega a la cantidad indicada, llama al proceso complete de la subscripción
 */

const numbers$ = of(1,2,3,4,5);

numbers$.
pipe(
    tap(t => console.log),
    take(3)
)
.subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('Complete')
});
