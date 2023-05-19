import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-adminreview',
  templateUrl: './adminreview.component.html',
  styleUrls: ['./adminreview.component.css']
})
export class AdminreviewComponent implements OnInit {
 a:any;
reviews:any;
  constructor(private reviewService: ReviewService,
    private router: Router,private rs:CartService) { }

  ngOnInit(): void {
    this.reviewService.getProduct()
    .subscribe(res=>{
      this.reviews=res; 

    this.reviews.forEach((a:any) => {
      Object.assign(a);   
    });
    })
  }
  // getReview(){
  //   this.reviewService.viewReview().subscribe((data) => {
  //     this.a= data;
  //   });
  // }
  deleteFeedback(data:number){
    this.rs.deleteFeed(data).subscribe(data=>{
      console.log(data)
      alert("You have Deleted Menu Item Successfully")
      window.location.reload();
    })
    }

}
