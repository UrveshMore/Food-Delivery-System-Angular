import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-usercontact',
  templateUrl: './usercontact.component.html',
  styleUrls: ['./usercontact.component.css']
})
export class UsercontactComponent implements OnInit {

  totalItem: any;

  constructor(public router: Router,public route: ActivatedRoute,public cartService:CartService,public reviewService:ReviewService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })

  }

  savedata(review:any){
    this.reviewService.getReview(review.value).subscribe();
  }
  getreview(){
  alert("Thank You....");
}
}
