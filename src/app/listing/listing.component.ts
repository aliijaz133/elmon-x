import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
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


  // chunkSize = 4; 

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.setChunkSize(window.innerWidth);
  // }

  // setChunkSize(windowWidth: number) {
  //   if (windowWidth <= 768) {
  //     this.chunkSize = 2; 
  //   } else {
  //     this.chunkSize = 4; 
  //   }
  // }

  // getChunkSize(): number {
  //   return this.chunkSize;
  // }

  // getCardClasses(): string {
  //   if (this.chunkSize === 4) {
  //     return 'col-md-3';
  //   } else if (this.chunkSize === 2) {
  //     return 'col-md-6';
  //   }
  //   return 'col-md-3'; 
  // }

  constructor() {}

  ngOnInit(): void {}
}
