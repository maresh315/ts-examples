import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../api.service";
import { User } from '../model/user-model';
import { UserProfile } from '../model/user-profile-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:Array<User>;
  userProfile:UserProfile;
  headers:Array<any>;

  editSelf:any
  selectedUser:any

  constructor(private apiService:ApiService, public router:Router) {  }

  ngOnInit(): void {
    this.apiService.get().subscribe((data:any)=>{
      console.log(data.body);
      
      this.users = data.body;
      this.headers = Object.keys(data.body[0]).sort().reverse().slice(0,2);
      this.userProfile = this.apiService.onSession()
      
      console.log(this.headers)
    })
  }

  onEdit(storedUser:User){
    if(this.userProfile.getRole() === 'Manager'){
      if(storedUser.getRole() === 'Employee'){
        this.selectedUser = storedUser;
      }else{
        alert('You are not an Admin');
        this.selectedUser = null
      }
      // this.apiService.setMesseage('You are not an Admin')
    }else if(this.userProfile.getRole().match('Admin')){
      this.selectedUser = storedUser
      console.log(this.selectedUser)
    }else{
    this.selectedUser = storedUser
    console.log(this.selectedUser)
    }
  }

  removeUser(storedUser:User){
    if(this.userProfile.getRole() === 'Manager'){
      if(storedUser.getRole() === ('Employee')){
        localStorage.removeItem(storedUser.getUsername());
        location.reload();
      }else
        alert('You are not an Admin');
      // this.apiService.setMesseage('You are not an Admin')
    }else{
      localStorage.removeItem(storedUser.getUsername());
      location.reload();
    }
  }

  // Who can see what buttons
  roleAccess():boolean{
    let role:string = this.userProfile.getRole();
    
    if(role.match('Admin')){
      // Can Do Everything
      return true
    }
    else if(role.match('Manager')){
      // Can Edit only Employee
      return true
    }

    // Default to Employee
    return false
  }

  logout() {
    this.apiService.logout();
    this.router.navigate(['/']);
  }
  
}
