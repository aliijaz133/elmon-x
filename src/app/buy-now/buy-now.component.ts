import { DialogRef } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss'],
})
export class BuyNowComponent implements OnInit {
  @Input() trendingItem: any;

  constructor(
    private route: ActivatedRoute,
    private dialogRef: DialogRef<BuyNowComponent>
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.trendingItem = JSON.parse(params['item']);
    });
  }

  continuePayment() {
    this.dialogRef.close();
  }
}
