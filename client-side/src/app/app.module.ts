import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpaComponent } from './adminpa/adminpa.component';
import { UserlogComponent } from './userlog/userlog.component';
import { DiliverylogComponent } from './diliverylog/diliverylog.component';
import { LognavComponent } from './lognav/lognav.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UseraboutComponent } from './userabout/userabout.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AdminreviewComponent } from './adminreview/adminreview.component';
import { DelieverypanelComponent } from './delieverypanel/delieverypanel.component';
import { PaymentComponent } from './payment/payment.component';
import { AdmincartlistComponent } from './admincartlist/admincartlist.component';
import { AdminmenulistComponent } from './adminmenulist/adminmenulist.component';
import { AdminuserlistComponent } from './adminuserlist/adminuserlist.component';
import { UserreviewComponent } from './userreview/userreview.component';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    SignupComponent,
    CartComponent,
    AdminComponent,
    AdminpaComponent,
    UserlogComponent,
    DiliverylogComponent,
    LognavComponent,
    UserhomeComponent,
    UseraboutComponent,
    UsermenuComponent,
    UsercontactComponent,
    AdminmenuComponent,
    AdminreviewComponent,
    DelieverypanelComponent,
    PaymentComponent,
    AdmincartlistComponent,
    AdminmenulistComponent,
    AdminuserlistComponent,
    UserreviewComponent,
    UpdatemenuComponent,
    ViewmenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
