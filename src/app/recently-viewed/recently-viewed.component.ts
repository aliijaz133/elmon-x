import { Component, OnInit } from '@angular/core';

interface RecentlyViewed {
  images: string;
}

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss'],
})
export class RecentlyViewedComponent implements OnInit {
  recentlyViewed: RecentlyViewed[] = [];

  constructor() {
    this.recentlyViewed = [
      {
        images: '../../assets/images/rectangle-1120.png',
      },
      {
        images: '../../assets/images/rectangle-1121.png',
      },
      {
        images: '../../assets/images/rectangle-1122.png',
      },
      {
        images: '../../assets/images/black-person.png',
      },
      {
        images: '../../assets/images/rectangle-1124.png',
      },
      {
        images: '../../assets/images/rectangle-1125.png',
      },
    ];
  }

  ngOnInit(): void {}
}
