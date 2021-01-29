import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';;
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../model/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Form Items
  username: string;
  password: string;

  constructor(private apiService:ApiService, private router:Router) {  }

  ngOnInit(): void {
  }

  loginUser(form:NgForm){
    // assignment
    let user = new User({
      username: this.username,
      password: this.password,
      role: null
    });

    let retrieved = null;

    try {
      // Get item from local storage
      retrieved = new User(
        JSON.parse(
          localStorage.getItem(user.getUsername())
        )
      )
    } catch{ /* Validation will handle error */ }

    // ValidateLogin
    if(this.apiService.validateLogin(user, retrieved)){
      this.apiService.login(retrieved);

      // Send User to Home screen
      this.router.navigate(['home'])
    }

    form.reset();
  }
  
  
}
