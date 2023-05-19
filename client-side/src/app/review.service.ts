import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  getEmployeesList: any;

  constructor(private http:HttpClient) { }
  url1="http://localhost:9092/review" 
  // url2="http://localhost:9092/contact" 
  getReview(data:any){
    return this.http.post(this.url1,data);
  }
  // viewReview(){
  //   return this.http.get(this.url2);
  // }
  getProduct(){
    return this.http.get<any>("http://localhost:9092/contact") 
    .pipe(map((res:any)=>{
      return res;
    }))
}
}