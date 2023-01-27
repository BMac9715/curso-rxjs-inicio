import { Observable } from "rxjs";
import { Observer } from "rxjs/internal/types";

/**
 * Colocarle el simbolo "$" al final del nombre de la variable es una buen práctica
 * para determinar o indicar que es un Observable
 */

//Forma estatica de crear un observable, pero esta deprecated
//const obs$ = Observable.create()

const obs$ = new Observable<string>( subs => {
    subs.next("Hola");

    //Tipar nuestro observable permite que Typescript nos retorne error al momento de intentar 
    //retornar un valor que no corresponde al tipo de dato que esperamos recibir en la salida
    //subs.next(1)

    subs.next("Mundo");

    subs.next("Bryan");

    /**
     * Generando un error
     * Veamos que cuando sucede un error se termina la ejecución del observable, ya no retorna
     * el siguiente valor que en este caso seria "Macario"
     */
    //const a = undefined;
    //a.nombre = "Bryan Macario";
    
    subs.next("Macario");

    subs.complete();

    /**
     * Una vez llamado el método complete, los que se encuentren suscritos al observable dejan de recibir las emisiones o cambios
    */

    subs.next("Test");

    subs.next("Holaa");
});

/**
 * Se realiza la subscripción al observable
 * 
 * Nota: La línea comentada es equivalente a lo que tenemos debajo de ella, ya que en ECMAscript 6 representa lo mismo
 */
//obs$.subscribe( resp => console.log(resp));
//--> obs$.subscribe(console.log)

/**
 * Los argumentos o funciones callback que se le pueden configurar a una Subscripción son:
 * Callback llamado "next" - básicamente recibe el item cada vez que el observable emite un valor
 * Callback llamado "error" - Recibe el error que puede ocurrir en la ejecución del observable
 * Callback llamado "complete" - Se recibe o se ejecuta cuando el observable se complete (Se ejecuta la función "complete" en el observable)
 */
//--> obs$.subscribe({
//-->     next: (valor) => console.log('next: ', valor),
//-->     error: (err) => console.warn('error: ', err),
//-->     complete: () => console.info('El observable se ha completado')
//--> });

/**
 * OBSERVER
 * Es una interface que nos indica los método que deben implementarse para recibir
 * la respuestas o eventos de un observable
 */
const observer1 : Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completada la ejecución del observable')
}

obs$.subscribe(observer1);

