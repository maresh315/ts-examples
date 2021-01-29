import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ApiService } from "./api.service";
import { User } from "./model/user-model";

@Injectable()
export class SessionRouteGuard implements CanActivate {
  constructor(private router:Router, private service:ApiService) {	}

	// currentUser = new User(JSON.parse(sessionStorage.getItem(sessionStorage.key(0))))

	// current bug: logging out cause all paths to crash

	canActivate(): boolean {

			if (this.service.onSession()) {
				alert('Please logout first.');
				
				this.router.navigate(['home']);
				return true;
			} 

			return false;
	}
}