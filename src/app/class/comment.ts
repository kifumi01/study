import {User} from './user';

export class Comment {

  date:number;
  user:User;
  message:string;
  key?:string;
  isEdit:boolean;

  constructor(value:any){
    this.user = value.user;
    this.message = value.message;
    this.date = value.date || Date.now();
    if(value.key){
      this.key = value.key;
    }
  }
}
