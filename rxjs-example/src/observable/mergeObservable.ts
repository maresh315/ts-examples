import { Observable, merge } from "rxjs";

function addItem(value:any){
	let element = document.createElement('li');
	let innertext = document.createTextNode(value);
	element.appendChild(innertext);
	document.getElementById('output').appendChild(element);
}

let observable = new Observable((observer:any)=>{
	observer.next('Old Observer')
})

let observable2 = new Observable((observer:any)=>{
	observer.next('New Observer')
})

const observableMerge = merge(observable,observable2);

observableMerge.subscribe((eachObserver:any)=>addItem(eachObserver))


