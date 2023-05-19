import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ss:FoodService ) { }
  insertSignupData(signupData:any){
    this.ss.signupLogin(signupData.value).subscribe();
    alert("You have SignUp SuccessFully");
    window.location.href='/userlog';
  }

  ngOnInit(): void {
  }

}
