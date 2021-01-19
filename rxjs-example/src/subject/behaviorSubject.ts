import { BehaviorSubject } from "rxjs";

function addItem(value:any){
	let element = document.createElement('li');
	let innertext = document.createTextNode(value);
	element.appendChild(innertext);
	document.getElementById('output').appendChild(element);
}

let subject = new BehaviorSubject('first');

subject.subscribe(
	data => addItem(`Observer 1: ${data}`),
	err => addItem(err),
	() => addItem('Observer 1 Completed')
)

subject.next('The first has been sent')
subject.next('...Observer 2 is about to subscribe...')

let subject2 = subject.subscribe(
	data => addItem(`Observer 2: ${data}`)
);
subject.next('The second has been sent')
subject.next('The third has been sent')

subject2.unsubscribe();

subject.next('final')