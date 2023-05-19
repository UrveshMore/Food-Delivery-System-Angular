import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  url1="http://localhost:9092/insert" 
  url2="http://localhost:9092/login"
  url4="http://localhost:9092/adminlogin"
  url5="http://localhost:9092/deliverylogin"
  signupservice1(data1:any){
    return this.http.post(this.url1, data1);
  }

  loginservice1(data2:any){
    return this.http.post(this.url2 , data2);
  }

  public loginUserFromRemote(user:User):Observable<object>{
    console.log(user);
    return this.http.post(this.url2,user);
  }

  public adminUserService(user:User):Observable<object>{
    console.log(user);
    return this.http.post(this.url4,user);
  }
  public deliveryService(user:User):Observable<object>{
    console.log(user);
    return this.http.post(this.url5,user);
  }


}

