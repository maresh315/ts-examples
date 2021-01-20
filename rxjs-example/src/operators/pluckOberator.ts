import { from } from "rxjs";
import { pluck } from 'rxjs/operators'

// Show each item screen
function addItem(value:any){
	let element = document.createElement('li');
	let innertext = document.createTextNode(value);
	element.appendChild(innertext);
	document.getElementById('output').appendChild(element);
}


from([
	{first: 'jhsd', last:'yhds'},
	{first: 'jhsd', last:'yhds'},
	{first: 'jhsd', last:'yhds'}
]).pipe(pluck('first'))
.subscribe((obj:Object)=>addItem(obj))