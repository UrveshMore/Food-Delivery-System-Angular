import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user : User = new User();
  msg:string='';
  admin: User = new User();
  
  constructor(private router:Router, private ls:LoginService ) { }

  ngOnInit(): void {
  }

  // goToAdmin(adminpage:String){
  //   this.router.navigate([`${adminpage}`]);
  // }

  insertData(){
    console.log(this.admin)
    this.ls.adminUserService(this.user).subscribe(
      _data=>{
        // this.msg1='You logged in successfully';
        alert("Admin logged in successfully");
        console.log("Successfully");
      this.router.navigateByUrl('/adminpa');
    },
      _error=>{
        this.msg='please recheck your password and emailid';
        alert("Login failed please check email and password");
        console.log("Error");
  }
    )
  }
}


