import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-userabout',
  templateUrl: './userabout.component.html',
  styleUrls: ['./userabout.component.css']
})
export class UseraboutComponent implements OnInit {

  totalItem: any;

  constructor(public router: Router,public route: ActivatedRoute,public cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}
