export class User {
	private username:string;
	private password:string;
	private role:string;

	constructor( { username,	password,	role} ){
		this.username = username;
		this.password = password;
		this.role = role;
	}

	getUsername(){ return this.username }
	getPassword(){ return this.password }
	getRole(){ return this.role }
}