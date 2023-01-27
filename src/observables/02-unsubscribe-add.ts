import { Observable } from "rxjs";
import { Observer } from "rxjs/internal/types";

const observer : Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completada la ejecución del observable')
}

const intervalo$ = new Observable<number>(subscriber => {
    //Crear un contador, 1,2,3,4,5,6.......
    let count = 0;
    const interval = setInterval(()=>{
        //Envia cada segundo el siguiente número
        subscriber.next(++count);
        console.log(count)
    }, 1000);

    setTimeout(()=>{
        subscriber.complete();
    }, 1500)

    return () => {
        clearInterval(interval);
        console.log("Intervalo destruido");
    }
});

//const subs1 = intervalo$.subscribe(num => console.log('Numero Subs 1: ', num));
//const subs2 = intervalo$.subscribe(num => console.log('Numero Subs 2: ', num));
//const subs3 = intervalo$.subscribe(num => console.log('Numero Subs 3: ', num));

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// --> setTimeout(()=>{
// -->     subs1.unsubscribe();
// -->     subs2.unsubscribe();
// -->     subs3.unsubscribe();
// -->     console.log("Set TimeOut Completado")
// --> }, 3000);

/**
 * Encadenar subscripciones
 */
subs1.add(subs2)
subs2.add(subs3);

setTimeout(()=>{
    subs1.unsubscribe();
    //subs2.unsubscribe();
    //subs3.unsubscribe();
    console.log("Set TimeOut Completado")
}, 3000);