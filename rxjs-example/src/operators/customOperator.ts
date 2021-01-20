import { interval, Observable } from "rxjs";
import { map } from "rxjs/operators";

// Show each item screen
function addItem(value:any){
	let element = document.createElement('li');
	let innertext = document.createTextNode(value);
	element.appendChild(innertext);
	document.getElementById('output').appendChild(element);
}

const producer = interval(1000); // Some producing Observeable

// can be exported
const customOperator = () =>{
	return (source: Observable<any>) =>{
		return source.pipe(
			// Some custom operation
			map(sourceVal => sourceVal * 3),
			map(sourceVal => sourceVal - 1)
		);
	};
};

producer.pipe(
	customOperator()
).subscribe(data=>addItem(data))