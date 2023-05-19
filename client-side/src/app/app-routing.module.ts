import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpaComponent } from './adminpa/adminpa.component';
import { UserlogComponent } from './userlog/userlog.component';
import { DiliverylogComponent } from './diliverylog/diliverylog.component';
import { LognavComponent } from './lognav/lognav.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { UseraboutComponent } from './userabout/userabout.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AdminreviewComponent } from './adminreview/adminreview.component';
import { PaymentComponent } from './payment/payment.component';
import { DelieverypanelComponent } from './delieverypanel/delieverypanel.component';
import { AdmincartlistComponent } from './admincartlist/admincartlist.component';
import { AdminmenulistComponent } from './adminmenulist/adminmenulist.component';
import { AdminuserlistComponent } from './adminuserlist/adminuserlist.component';
import { UserreviewComponent } from './userreview/userreview.component';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';


// import { ContactComponent } from './co/menu.component';
const routes: Routes = [
  {path:'',component:UserlogComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent},
  {path:'signup',component:SignupComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent},
  {path:'diliverylog',component:DiliverylogComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminpa',component:AdminpaComponent},
  {path:'userlog',component:UserlogComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'usermenu',component:UsermenuComponent},
  {path:'usercontact',component:UsercontactComponent},
  {path:'userabout',component:UseraboutComponent},
  {path:'lognav',component:LognavComponent},
  {path:'adminmenu',component:AdminmenuComponent},
  {path:'adminreview',component:AdminreviewComponent},
  {path:'payment',component:PaymentComponent},
  {path:'delieverypanel',component:DelieverypanelComponent},
  {path:'diliverylog',component:DiliverylogComponent},
  {path:'admincartlist',component:AdmincartlistComponent},
  {path:'adminmenulist',component:AdminmenulistComponent},
  {path:'adminuserlist',component:AdminuserlistComponent},
  {path:'userreview',component:UserreviewComponent},
  {path:'updatemenu',component:UpdatemenuComponent},
  {path:'viewmenu',component:ViewmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
