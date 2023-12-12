import { Component, OnInit } from '@angular/core';

interface Trending {
  image_url: string;
  image_title: string;
  price: number;
  trend_Id: string;
}

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  trending: Trending[] = [];

  constructor() {
    this.trending = [
      {
        image_url: '../../assets/images/rectangle-987.png',
        image_title: 'Look Mum, My Painting Got Into Patrick Hughes Art!',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-1099-YBF.png',
        image_title: 'Dare To Dream',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-982-Tv5.png',
        image_title: 'Bedlam Insanity',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-1058.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
    ];
  }

  ngOnInit(): void {}
}
