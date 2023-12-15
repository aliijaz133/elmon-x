import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  showLoader: boolean = false;

  imageGroup: any = [
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
    {
      image_url: '../../assets/images/rectangle-982-9fj.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    });
  }
}
