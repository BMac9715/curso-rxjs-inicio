import { debounceTime, fromEvent, interval, of } from "rxjs";
import { map, mergeMap, pluck, switchMap, take, takeUntil } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

/**
 * switchMap() vs mergeMap()
 */

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

//click$.pipe(
//    mergeMap(() => interval$)
//).subscribe(console.log);


click$.pipe(
    switchMap(() => interval$)
).subscribe(console.log);

