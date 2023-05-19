import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admincartlist',
  templateUrl: './admincartlist.component.html',
  styleUrls: ['./admincartlist.component.css']
})
export class AdmincartlistComponent implements OnInit {
  paymentList: any;

  constructor(private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.api.viewPayments()
    .subscribe(res=>{
      this.paymentList=res; 

    this.paymentList.forEach((a:any) => {
      Object.assign(a);   
    });
    })
  }

}

