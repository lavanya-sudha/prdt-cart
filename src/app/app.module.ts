import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {RouterModule, Routes} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material';
import { MatListModule } from '@angular/material/list';
//import { FirstPageComponent } from './first-page/first-page.component';
//import { SecondPageComponent } from './second-page/second-page.component';
//import { ThirdPageComponent } from './third-page/third-page.component';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { routing } from './app-routing.module';
import { ProductService } from './product.service';

/*const appRoutes: Routes =[
 //{path : 'first-page',component: FirstPageComponent },
  //{path : 'second-page',component:  SecondPageComponent},
  //{path : 'third-page',component: ThirdPageComponent },

  { path: '', component: ProductComponent },
	{ path: 'product', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];*/

@NgModule({
  declarations: [
    AppComponent,
    //AppRoutingModule,
    //MyNavComponent,
   // FirstPageComponent,
    //SecondPageComponent,
    //ThirdPageComponent,
    ProductComponent,
    IndexComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule
    //RouterModule.forRoot(appRoutes)
    routing
   /* BrowserAnimationsModule,
    
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule
*/
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//export const routing = RouterModule.forRoot(appRoutes);
