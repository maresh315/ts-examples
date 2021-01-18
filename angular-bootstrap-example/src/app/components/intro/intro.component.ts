import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  businessTitle:string ='Business Name or Tagline';
  description:string ="This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!";
  buttonText:string = 'Call to Action!';
  actionText:string = 'This call to action card is a great place to showcase some important information or display a clever tagline!';
  
  imageSource:string ="http://placehold.it/900x400"

  
  constructor() { }

  ngOnInit(): void {
  }

}
