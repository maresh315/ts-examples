import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ApiService } from "./api.service";
import { User } from "./model/user-model";

@Injectable()
export class HomeRouteGuard implements CanActivate {
  constructor(private router:Router, private service:ApiService) {	}

	// currentUser:User = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))

	canActivate(): boolean {

			if (!this.service.onSession()) {
				alert(`You are not allowed to view this page. 
				You are redirected to login Page`);
				
				this.router.navigate(['login']);
				return false;
			} 

			return true;
	}
}