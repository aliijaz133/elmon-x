import { Component, Input, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss'],
})
export class BuyNowComponent implements OnInit {
  @Input() trendingItem: any;

  showLoader: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dialogRef: DialogRef<BuyNowComponent>
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.trendingItem = JSON.parse(params['item']);
    });

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    });
  }

  continuePayment() {
    this.dialogRef.close();
  }
}
