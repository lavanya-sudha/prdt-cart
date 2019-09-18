import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
//import { AppRoutingModule } from './app-routing.module';
//const routes: Routes = [];
const routes: Routes = [
	{ path: '', component: ProductComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})*/
//export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);