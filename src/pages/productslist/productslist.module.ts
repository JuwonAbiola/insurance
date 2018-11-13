import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductslistPage } from './productslist';

@NgModule({
  declarations: [
    ProductslistPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductslistPage),
  ],
})
export class ProductslistPageModule {}
