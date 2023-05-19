import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  signupurl="http://localhost:9092/insert" 
  url1="http://localhost:9092/login" 
  public loginUserFromRemote(user:User):Observable<object>{
    console.log(user)
    return this.http.post(this.url1,user);
  }
  signupLogin(data1:any){
    return this.http.post(this.signupurl,data1);
  }
}
