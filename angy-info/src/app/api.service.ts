import { Injectable } from '@angular/core';
import { HttpResponse } from "@angular/common/http";
import { of } from "rxjs";
import { User } from './model/user-model';
import { UserProfile } from './model/user-profile-model';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private message = new Subject<any>();

  constructor() { }

  public validateRegistration(user:User){
    // Validate the Username
    let validUsername = new RegExp('^(?=.{2,})')
    .test(user.getUsername())
    
    // Validate the Password
    let validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    .test(user.getPassword())

    // Validate the Role
    let validRole = ('' !== user.getRole()) ? user.getRole():null
    
    // Validation
    if(!validRole){
      this.setMesseage('Please select a role');
      return false
    }
    else if(!validUsername ) {
      this.setMesseage(`Username: [ ${user.getUsername()} ], needs to have 
      a minimum 2 characters`);
      return false;
    }else if(!validPassword){
      this.setMesseage(`Your password needs to have 
      a minimum 8 characters, 
      at least 1 uppercase letter, 
      1 lowercase letter, 
      1 number and 1 special character`);
      return false;
    }else
      return true;
  
  }

  public getMessage() { return this.message; }
  public clearMessage(){ this.message.next(); }
  public setMesseage(newMessage:string) { this.message.next(newMessage); }

  public validateLogin(user:User, storedUser:User){
    // Validate the Password
    let validPassword = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    .test(user.getPassword());
    
    // Validation
    if(!storedUser ) {
      location.reload()
      this.setMesseage('Your username is incorrect.');
      return false;
    }else if(!validPassword){
      location.reload()
      this.setMesseage(`Your password needs to have 
      a minimum 8 characters, 
      at least 1 uppercase letter, 
      1 lowercase letter, 
      1 number and 1 special character.`);
      return false;
    }else if(storedUser.getPassword() !== user.getPassword()){
      location.reload()
      this.setMesseage('Your password was inorrect');
      return false;
    }

    return true;
  
  }

  private database (){
    let arr = [];
    for (let index = 0; index < localStorage.length; index++) {
      const element = new User(JSON.parse(localStorage.getItem(localStorage.key(index)))); 
      arr.push(element);
    }
    return arr;
  }

  public get(){
    // mock get request
    return of(new HttpResponse({
      status:200,
      body:this.database()
    }));
  }

  
  public register(user:User){
    localStorage.setItem(user.getUsername(),JSON.stringify(user));
  }
  
  public onSession(){
    let item = sessionStorage.getItem(sessionStorage.key(0)) || '{"username": "default", "password": "", "role": "n/a"}'
    let retrieved = new User(JSON.parse(item));
    let userProfile  = null;

    if(retrieved.getRole() !== 'n/a'){
      userProfile = new UserProfile({
        username: retrieved.getUsername(),
        role: retrieved.getRole()
      });
    }
    return userProfile;
  }

  public login(retrieved:User){ sessionStorage.setItem(retrieved.getPassword(),JSON.stringify(retrieved)); }

  public logout(){ sessionStorage.clear(); }
}
