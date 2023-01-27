import { Observable, Subject } from "rxjs";
import { Observer } from "rxjs/internal/types";

const observer : Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completado observable')
}

const intervalo$ = new Observable<number>(subs => {
    const interval = setInterval(()=>{
        subs.next(Math.random())
    }, 1000)

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    }
});

//const subs1 = intervalo$.subscribe(rnd => console.log('subs1: ', rnd));
//const subs2 = intervalo$.subscribe(rnd => console.log('subs2: ', rnd));

/**
 * 1. Casteo multiple
 * 2. Tambien es un observer
 * 3. Se pueden manejar los callback next, error y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);


/**
 * Existen dos tipos de emisiones:
 * 1. Cold Observable - Que hace referencia cuando la data es producida or el observable DENTRO DE SI MISMO
 * 2. Hot Observable - Que hace referencia cuando la data es producida FUERA del observable
 */

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();
}, 3500);
