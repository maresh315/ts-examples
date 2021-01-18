import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  // Example Array [Name, id, email]
  info: string[] = ['John Doe', 'E425', 'qw@erty.com']

  getinfo():string[] {
    return this.info;
  }
  
  addInfo(infoInput):string[]{
    this.info.push(infoInput)
    return this.info
  }

  constructor() { }
}
