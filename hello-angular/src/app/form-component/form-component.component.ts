import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  clickCount:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  submit(login){
    console.log(login)
  }

}
