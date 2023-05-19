import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FoodService } from '../food.service';
import { LoginService } from '../login.service';
import { User } from '../user';
@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent implements OnInit {
 
  // email: string ='';
  // password: string =' ';

  msg:string='';

  user : User = new User();
  loginForm1: any;

  
  constructor(private router: Router, private ls:LoginService, private cartService:CartService) { }

  ngOnInit(): void {
    // this.email='';
    // this.password='';
  
  }
  goToPage(signup:String){
    this.router.navigate([`${signup}`]);
  }
  goToUser(userpage:String){
    this.router.navigate([`${userpage}`]);
  }

  loginData(logindata:any){
    this.ls.loginservice1(logindata.value).subscribe();
  }

  // login(){
  //   // this.user.email=this.email;
  //   // this.user.password=this.password;
  //   console.log(this.user);
  //   this.authService.Login(this.user).subscribe(res=>{
      
  //       alert("Username Or Password is Wrong");
  //       this.ngOnInit();
      
     
  //       alert("Login Successfull");
        
  //       this.router.navigateByUrl(['/userpage']);
     
  //   },err=>{
  //     alert("Login Failed");
  //     this.ngOnInit();
  //   }
  //   )

  loginUser(){
   
    this.ls.loginUserFromRemote(this.user).subscribe(
      _data=>{
        // this.msg1='You logged in successfully';
        this.cartService.setEmail(this.user.email)
        alert("logged in successfully");
        console.log("Successfully");
      this.router.navigateByUrl('/userhome');
    },
      _error=>{
        this.msg='please recheck your password and emailid';
        alert("Login failed check you email or password");
        console.log("Error");
  }
    )
  }

}
