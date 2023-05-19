import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  constructor(private rs:CartService,private router:Router) { }

  ngOnInit(): void {
  }
  updateProductsByAdmin(update:any){
    this.rs.updateProductsByAdminService(update.value).subscribe(data=>{
      alert("Added product is now visible to the customer")
    });

  }
  getreview(){
    alert("Dish Added...");
  }
}
