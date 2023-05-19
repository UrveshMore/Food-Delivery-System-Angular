import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-userreview',
  templateUrl: './userreview.component.html',
  styleUrls: ['./userreview.component.css']
})
export class UserreviewComponent implements OnInit {

  a:any;
  reviews:any;
  totalItem: any;
    constructor(private reviewService: ReviewService,
      private router: Router,public cartService:CartService) { }
  
    ngOnInit(): void {
      this.reviewService.getProduct()
      .subscribe(res=>{
        this.reviews=res; 
  
      this.reviews.forEach((a:any) => {
        Object.assign(a);   
      });
      })
      this.cartService.getProduct().subscribe(res=>{
        this.totalItem = res.length;
      })
    
    }
    // getReview(){
    //   this.reviewService.viewReview().subscribe((data) => {
    //     this.a= data;
    //   });
    // }
  
  }
  