import { interval, timer } from "rxjs";
import { skipUntil } from 'rxjs/operators'

function addItem(value:number){
	let element = document.createElement('li');
	let innertext = document.createTextNode(`${value}`);
	element.appendChild(innertext);
	document.getElementById('output').appendChild(element);
}

let iterator = interval(5000)

let starter = timer(10001)

let observable = iterator.pipe(skipUntil(starter))

observable.subscribe((data:any)=>addItem(data))