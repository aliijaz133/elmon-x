import { Component, OnInit } from '@angular/core';

interface Categories {
  image_url: string;
  image_title: string;
}

declare var $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Categories[] = [];

  constructor() {
    this.categories = [
      {
        image_url: '../../assets/images/rectangle-1128.png',
        image_title: 'Pyramids',
      },
      {
        image_url: '../../assets/images/rectangle-1129.png',
        image_title: 'Bitcoin',
      },
      {
        image_url: '../../assets/images/rectangle-1109.png',
        image_title: 'Partner Drops',
      },
      {
        image_url: '../../assets/images/rectangle-1111.png',
        image_title: 'Art',
      },
    ];
  }

  ngOnInit(): void {
    $(document).ready(() => {
      $('#owl-demo').owlCarousel({
        navigation: true,
      });
    });
  }
}
