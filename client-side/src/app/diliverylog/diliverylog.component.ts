import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-diliverylog',
  templateUrl: './diliverylog.component.html',
  styleUrls: ['./diliverylog.component.css']
})
export class DiliverylogComponent implements OnInit {


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
    this.ls.deliveryService(this.user).subscribe(
      _data=>{
        // this.msg1='You logged in successfully';
        alert("Admin logged in successfully");
        console.log("Successfully");
      this.router.navigateByUrl('/delieverypanel');
    },
      _error=>{
        this.msg='please recheck your password and emailid';
        alert("Login failed please check email and password");
        console.log("Error");
  }
    )
  }
}
