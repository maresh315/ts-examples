import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user-model';
import { UserProfile } from "../model/user-profile-model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() userProfile:UserProfile;
  @Input() router:Router;
  usernameUpdate:string;
  

  constructor() { }

  ngOnInit(): void {
  }

  onSave(user:UserProfile):void{
    // TODO: Validate Information

    // get from storage
    const retrieved = new User(JSON.parse(
      localStorage.getItem(user.getUsername())
    ));

    // remove from storage
    localStorage.removeItem(retrieved.getUsername())
    
    let updated = new User({
      username: this.usernameUpdate,
      password: retrieved.getPassword(),
      role:retrieved.getRole()
    })

    // add updated
    localStorage.setItem(this.usernameUpdate,JSON.stringify(updated))
    location.reload()
  }

}
