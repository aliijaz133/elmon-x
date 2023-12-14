import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-trending',
  templateUrl: './carousel-trending.component.html',
  styleUrls: ['./carousel-trending.component.scss']
})
export class CarouselTrendingComponent {
  cards = [
    { title: '‘Look Mum, My Painting Got Into..', imageUrl: '../../assets/images/trending1.png', price: '$ 25' },
    { title: 'Dare To Dream', imageUrl: '../../assets/images/trending2.png', price: '$ 25' },
    { title: 'Bedlam Insanity', imageUrl: '../../assets/images/trending3.png', price: '$ 25' },
    { title: 'Look Mum, My Painting Got Into..', imageUrl: '../../assets/images/trending4.png', price: '$ 25' },
    { title: 'Dare To Dream', imageUrl: '../../assets/images/trending2.png', price: '$ 25' },
    { title: 'Look Mum, My Painting Got Into..', imageUrl: '../../assets/images/trending4.png', price: '$ 25' },
    { title: 'Bedlam Insanity', imageUrl: '../../assets/images/trending3.png', price: '$ 25' },
    { title: '‘Look Mum, My Painting Got Into..', imageUrl: '../../assets/images/trending1.png', price: '$ 25' },
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
