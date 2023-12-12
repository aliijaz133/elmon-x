import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElmonXComponent } from './elmon-x/elmon-x.component';
import { ListingComponent } from './listing/listing.component';
import { ProductsComponent } from './products/products.component';
import { TrendingDetailsComponent } from './trending-details/trending-details.component';
import { SaleListingComponent } from './sale-listing/sale-listing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ElmonXComponent,
  },
  {
    path: 'listing',
    component: ListingComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'trending-details',
    component: TrendingDetailsComponent,
  },
  {
    path: 'sale-listing',
    component: SaleListingComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
