import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElmonXComponent } from './elmon-x/elmon-x.component';
import { HeaderComponent } from './header/header.component';
import { TokenFormatPipe } from './pipes/token-format.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesComponent } from './categories/categories.component';
import { TrendingComponent } from './trending/trending.component';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { ScrollingCarouselDirective } from './pipes/scrolling-carousel.directive';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { ListingComponent } from './listing/listing.component';
import { ProductsComponent } from './products/products.component';
import { TrendingDetailsComponent } from './trending-details/trending-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ElmonXComponent,
    HeaderComponent,
    TokenFormatPipe,
    CategoriesComponent,
    TrendingComponent,
    TruncateTextPipe,
    ScrollingCarouselDirective,
    RecentlyViewedComponent,
    ListingComponent,
    ProductsComponent,
    TrendingDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
