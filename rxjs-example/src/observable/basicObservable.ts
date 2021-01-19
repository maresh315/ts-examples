import { Observable } from "rxjs";

let observable = Observable.create((observer:any) =>{
	try{
		observer.next('object')
		observer.complete()
		// Once .complete is called no more .next
	}catch(err){ observer.error(err) }
})

let observer = observable.subscribe(
	(item:any)=>addItem(item),
	(err:any) => addItem(err),
	()=>addItem('Completed')
)

function addItem(value:any){
	let element = document.createElement('li');
	let innertext = document.createTextNode(value);
	element.appendChild(innertext);
	document.getElementById('output').appendChild(element);
}