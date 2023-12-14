import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-catagories',
  templateUrl: './carousel-catagories.component.html',
  styleUrls: ['./carousel-catagories.component.scss']
})
export class CarouselCatagoriesComponent {
  cards = [
    { title: 'Pyramids', imageUrl: '../../assets/images/payramids.png' },
    { title: 'Bitcoin', imageUrl: '../../assets/images/bitcoin.png' },
    { title: 'PartnerDrop', imageUrl: '../../assets/images/partner.png' },
    { title: 'Art', imageUrl: '../../assets/images/art.png' },
    { title: 'Bitcoin', imageUrl: '../../assets/images/bitcoin.png' },
    { title: 'PartnerDrop', imageUrl: '../../assets/images/partner.png' },
    { title: 'Art', imageUrl: '../../assets/images/art.png' },
    { title: 'Bitcoin', imageUrl: '../../assets/images/bitcoin.png' },
    { title: 'PartnerDrop', imageUrl: '../../assets/images/partner.png' },
    { title: 'Art', imageUrl: '../../assets/images/art.png' },
  ];
  displayedCards() {
    if (window.innerWidth < 992) {
      return this.cards.slice(0, 2); // Display 2 cards for smaller screens
    } else {
      return this.cards.slice(0, 4); // Display 4 cards for larger screens
    }
  }

  constructor() {
    window.addEventListener('resize', () => {
      this.displayedCards(); // Update displayed cards when the window size changes
    });
  }
}
