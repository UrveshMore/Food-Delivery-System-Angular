import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-delieverypanel',
  templateUrl: './delieverypanel.component.html',
  styleUrls: ['./delieverypanel.component.css']
})
export class DelieverypanelComponent implements OnInit {
  paymentList: any;

  constructor(private router:Router,private api:ApiService,private reviewService: ReviewService,
    private rs:CartService) { }
 
  ngOnInit(): void {
    this.api.viewPayments()
    .subscribe(res=>{
      this.paymentList=res; 

    this.paymentList.forEach((a:any) => {
      Object.assign(a);   
    });
    })
  }
  deleteFeedback(data:number){
    this.rs.deleteFe(data).subscribe(data=>{
      console.log(data)
      alert("You have Deleted Deliverd Item Successfully")
      window.location.reload();
    })
    }
}

