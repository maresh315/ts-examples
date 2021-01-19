import { ReplaySubject } from "rxjs";

function addItem(value:any){
	let element = document.createElement('li');
	let innertext = document.createTextNode(value);
	element.appendChild(innertext);
	document.getElementById('output').appendChild(element);
}

let subject = new ReplaySubject(30, 200);

subject.subscribe(
	data => addItem(`Observer 1: ${data}`),
	err => addItem(err),
	() => addItem('Observer 1 Completed')
)

let num = 1;
let int = setInterval(()=> subject.next(num++), 100)

setTimeout(()=>{
	subject.subscribe(
	data => addItem(`Observer 2: ${data}`)
	);
},500)

