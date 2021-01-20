import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

// Show each item screen
function addItem(value:any){
	let element = document.createElement('li');
	let innertext = document.createTextNode(value);
	element.appendChild(innertext);
	document.getElementById('output').appendChild(element);
}


let observable = new Observable((observer:any)=>{
	observer.next('Old Observer')
}).pipe(map((value:any)=>value.toUpperCase()))
.subscribe((value:any)=>addItem(value))
