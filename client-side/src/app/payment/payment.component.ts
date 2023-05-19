import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalItem: any;
  itemAmount: any = 0;
  email: any;

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.cartService.amount);
      this.itemAmount=this.cartService.getAmount();
      console.log(this.itemAmount);

      this.email=this.cartService.getEmail();
      console.log(this.email);
  }
  
  pay(cash:any){
    this.cartService.paymentService(cash.value).subscribe();
    console.log(this.cartService.email);
  }
  getreview(){
    alert("Thank You..Your order is in process..");
  }
}
