export class UserProfile {
	private username:string;
	private role:string;

	constructor( {username,role} ){
		this.username = username;
		this.role = role;
	}

	getUsername(){ return this.username }
	getRole(){ return this.role }
	
}