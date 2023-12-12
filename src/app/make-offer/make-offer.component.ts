import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-offer',
  templateUrl: './make-offer.component.html',
  styleUrls: ['./make-offer.component.scss'],
})
export class MakeOfferComponent implements OnInit {
  @Input() trendingItem: any;

  constructor(
    private route: ActivatedRoute,
    private dialogRef: DialogRef<MakeOfferComponent>
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.trendingItem = JSON.parse(params['item']);
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
