// carousel-catagories.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel-catagories',
  templateUrl: './carousel-catagories.component.html',
  styleUrls: ['./carousel-catagories.component.scss'],
})
export class CarouselCatagoriesComponent {
  displayedCards: any[] = [];
  currentIndex = 0;

  constructor() {
    this.updateDisplayedCards();
  }

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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDisplayedCards();
  }

  private updateDisplayedCards() {
    if (window.innerWidth < 720) {
      this.displayedCards = [this.cards[this.currentIndex]];
    } else if (window.innerWidth < 992) {
      this.displayedCards = this.cards.slice(
        this.currentIndex,
        this.currentIndex + 2
      );
    } else {
      this.displayedCards = this.cards.slice(
        this.currentIndex,
        this.currentIndex + 4
      );
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateDisplayedCards();
  }

  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateDisplayedCards();
  }
}
