import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trending-details',
  templateUrl: './trending-details.component.html',
  styleUrls: ['./trending-details.component.scss'],
})
export class TrendingDetailsComponent implements OnInit {
  @Input() trendingItem: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.trendingItem = JSON.parse(params['item']);
    });
  }

  backBtn() {
    this.router.navigate(['/products']);
  }
}
