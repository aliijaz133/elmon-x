import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MakeOfferComponent } from '../make-offer/make-offer.component';
import { BuyNowComponent } from '../buy-now/buy-now.component';

@Component({
  selector: 'app-trending-details',
  templateUrl: './trending-details.component.html',
  styleUrls: ['./trending-details.component.scss'],
})
export class TrendingDetailsComponent implements OnInit {
  @Input() trendingItem: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.trendingItem = JSON.parse(params['item']);
    });
  }

  backBtn() {
    this.router.navigate(['/products']);
  }

  makeOffer() {
    this.dialog.open(MakeOfferComponent, { disableClose: true });
  }

  buyNow() {
    this.dialog.open(BuyNowComponent, { disableClose: true });
  }

  openList() {
    this.router.navigate(['/sale-listing']);
  }
}
