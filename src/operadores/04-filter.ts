import { from, range } from "rxjs";
import { filter } from "rxjs/operators";

/**
 * Operador: filter()
 * Sirve para filtrar las emisiones del Observable
 */

/**
 * EJEMPLO: Emitir unicamente los valores impares
 */

const obs1$ = range(1,10).pipe(
    filter((x,i) => {
        console.log('index: ', i);
        return x % 2 === 1
    })
);

obs1$.subscribe(console.log);

/**
 * EJEMPLO: Heroes
 * Emitir como un observable la lista dada, luego filtrar unicamente los heroes
 */

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
    {
        tipo: 'villano',
        nombre: 'Thanos'
    },
    {
        tipo: 'heroe',
        nombre: 'Ironman'
    }
];

const obs$ = from(personajes);

const obsHeroes$ = obs$.pipe(
    filter(p => p.tipo === 'heroe')
);

const obsVillanos$ = obs$.pipe(
    filter(p => p.tipo === 'villano')
);
// o
const obsVillanos2$ = obs$.pipe(
    filter(p => p.tipo !== 'heroe')
);

obsHeroes$.subscribe(console.log);
obsVillanos$.subscribe(console.log);
obsVillanos2$.subscribe(console.log);