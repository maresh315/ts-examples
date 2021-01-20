import { Observable, fromEvent } from "rxjs";

// Show each item screen
function addItem(value:any){
	let element = document.createElement('li');
	let innertext = document.createTextNode(value);
	element.appendChild(innertext);
	document.getElementById('output').appendChild(element);
}

let observable = fromEvent(document, 'mousemove')

setTimeout(() => {
	observable.subscribe(
		(value:any)=>addItem(value)
	)
}, 2000);