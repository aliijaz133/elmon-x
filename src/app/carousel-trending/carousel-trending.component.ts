import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel-trending',
  templateUrl: './carousel-trending.component.html',
  styleUrls: ['./carousel-trending.component.scss'],
})
export class CarouselTrendingComponent {
  displayedCards: any[] = [];
  currentIndex = 0;

  constructor() {
    this.updateDisplayedCards();
  }

  cards = [
    {
      title: '‘Look Mum, My Painting Got Into..',
      imageUrl: '../../assets/images/trending1.png',
      price: '$ 25',
    },
    {
      title: 'Dare To Dream',
      imageUrl: '../../assets/images/trending2.png',
      price: '$ 25',
    },
    {
      title: 'Bedlam Insanity',
      imageUrl: '../../assets/images/trending3.png',
      price: '$ 25',
    },
    {
      title: 'Look Mum, My Painting Got Into..',
      imageUrl: '../../assets/images/trending4.png',
      price: '$ 25',
    },
    {
      title: 'Dare To Dream',
      imageUrl: '../../assets/images/trending2.png',
      price: '$ 25',
    },
    {
      title: 'Look Mum, My Painting Got Into..',
      imageUrl: '../../assets/images/trending4.png',
      price: '$ 25',
    },
    {
      title: 'Bedlam Insanity',
      imageUrl: '../../assets/images/trending3.png',
      price: '$ 25',
    },
    {
      title: '‘Look Mum, My Painting Got Into..',
      imageUrl: '../../assets/images/trending1.png',
      price: '$ 25',
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDisplayedCards();
  }

  private updateDisplayedCards() {
    if (window.innerWidth < 769) {
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
