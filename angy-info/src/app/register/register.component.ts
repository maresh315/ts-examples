import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../model/user-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Initialization of Form Items
  username: string 
  password: string
  role: string

  options:Array<string> = [
    'Admin',
    'Manager',
    'Employee'
  ]
  
  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  public registerUser(form:NgForm){
    // assignment
    let user = new User({
      username: this.username,
      password: this.password,
      role: this.role
    });

    form.reset();

    // Validate Registration
    if(this.apiService.validateRegistration(user)){
      // Add to local storage
      this.apiService.register(user);

      // Send User to Login screen
      this.router.navigate(['/'])
    }
  
  }
  

}
