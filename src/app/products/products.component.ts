import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Trending {
  image_url: string;
  image_title: string;
  price: number;
  trend_Id: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  trending: Trending[] = [];

  selectedTrendingItem: any;

  constructor(private router: Router) {
    this.trending = [
      {
        image_url: '../../assets/images/rectangle-979.png',
        image_title: 'Look Mum, My Painting Got Into Patrick Hughes Art!',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-980.png',
        image_title: 'Dare To Dream',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-981.png',
        image_title: 'Bedlam Insanity',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-982-xz9.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-1076.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-984.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-985.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-1058-gbw.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-987.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-988.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-989.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-991.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-992.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-993.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-994.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-1035.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 25,
        trend_Id: '#5684',
      },
    ];
  }

  ngOnInit(): void {}

  openDetails(trendingItem: any): void {
    this.selectedTrendingItem = trendingItem;
    this.router.navigate(['/trending-details'], {
      queryParams: { item: JSON.stringify(trendingItem) },
    });
  }
}
