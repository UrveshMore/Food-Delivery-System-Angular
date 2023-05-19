import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Menu } from './menu';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  email: any;
  amount: any;
  id:any;
  // public search = new BehaviorSubject<string>("");
  
  constructor(private http: HttpClient) { }
  url4="http://localhost:9092/menu" 
  url5="http://localhost:9092/adminmenu"
  url6="http://localhost:9092/cart"
  url7="http://localhost:9092/find"
  url8="http://localhost:9092/paymentsave"
  url10="http://localhost:9092/deleteproduct"
  url11="http://localhost:9092/search"
  url12="http://localhost:9092/updatemenu"
  url15="http://localhost:9092/deletefeedback"
  url16="http://localhost:9092/deletep"
  getProduct(){
   return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
  addToCart(product:any){

    product.email=this.email;
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();

    console.log(this.email)
    console.log(product.email)
    console.log(product)

    // console.log(product)
    console.log(this.cartItemList)
    return this.http.post("http://localhost:9092/cart",product)
    
    // return this.http.post(this.url4, product);
  }
  getTotalPrice() : number {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index , 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }
  addAllcart(data: any) {
    console.log(data);
    return this.http.post<User>(this.url6,data)
  }
  
  updateProductsByAdminService(data5:any){
    console.log(data5)
    return this.http.post(this.url5,data5);
  }
  
  setEmail(data:any){
    this.email=data;
  }
  getEmail(){
    console.log(this.email);
   return this.email; 
  }

  setAmount(data:any){
    this.amount=data;
    console.log(this.amount);
  }
  getAmount(){
    console.log(this.amount);
    return this.amount; 
  }
  
  viewOneMenu(data:number) {
    return this.http.post(this.url7,data);
  }
  
  // removeAdminCartItem(product:any){
    //   this.cartItemList.map((a:any,index:any)=>{
      //     if(product.id===a.id){
        //       this.cartItemList.splice(index , 1);
        //     }
        //   })
        //   this.productList.next(this.cartItemList);
        // }
        
  paymentService(data8: any) {
    data8.email = this.email;
    data8.grandTotal = this.amount;
    return this.http.post(this.url8, data8);
    }

 
    getMenuById(id: number): Observable<Menu>{
      return this.http.get<Menu>(`${this.url11}/${id}`);
    }

    updateMenu(mid: number, menu: Menu): Observable<Object>{
      return this.http.put(`${this.url12}/${mid}`, menu);
    }

    deleteEmployee(mid: number): Observable<Object>{
      console.log(mid)
      return this.http.delete(`${this.url10}/${mid}`);
    }

    setId(id:number){
      this.id=id;
    }
    getId(){
      return this.id;
    }
    deleteFeed(id: number): Observable<Object>{
      console.log(id)
      return this.http.delete(`${this.url15}/${id}`);
    }
    deleteFe(pid: number): Observable<Object>{
      console.log(pid)
      return this.http.delete(`${this.url16}/${pid}`);
    }
}





