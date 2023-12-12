import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

interface Trending {
  image_url: string;
  image_title: string;
  price: number;
  trend_Id: string;
}

@Component({
  selector: 'app-sale-listing',
  templateUrl: './sale-listing.component.html',
  styleUrls: ['./sale-listing.component.scss'],
})
export class SaleListingComponent implements OnInit {
  timeNow?: number;

  trending: Trending[] = [];

  constructor(private dialog: MatDialog) {
    this.trending = [
      {
        image_url: '../../assets/images/rectangle-979.png',
        image_title: 'Look Mum, My Painting Got Into Patrick Hughes Art!',
        price: 15,
        trend_Id: '#5680',
      },
      {
        image_url: '../../assets/images/rectangle-980.png',
        image_title: 'Dare To Dream',
        price: 25,
        trend_Id: '#5681',
      },
      {
        image_url: '../../assets/images/rectangle-981.png',
        image_title: 'Bedlam Insanity',
        price: 35,
        trend_Id: '#5682',
      },
      {
        image_url: '../../assets/images/rectangle-982-xz9.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 45,
        trend_Id: '#5683',
      },
      {
        image_url: '../../assets/images/rectangle-1076.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 55,
        trend_Id: '#5684',
      },
      {
        image_url: '../../assets/images/rectangle-984.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 65,
        trend_Id: '#5685',
      },
      {
        image_url: '../../assets/images/rectangle-985.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 75,
        trend_Id: '#5686',
      },
      {
        image_url: '../../assets/images/rectangle-1058-gbw.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 85,
        trend_Id: '#5687',
      },
      {
        image_url: '../../assets/images/rectangle-987.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 95,
        trend_Id: '#5688',
      },
      {
        image_url: '../../assets/images/rectangle-988.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 105,
        trend_Id: '#5689',
      },
      {
        image_url: '../../assets/images/rectangle-989.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 115,
        trend_Id: '#5690',
      },
      {
        image_url: '../../assets/images/rectangle-991.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 125,
        trend_Id: '#5691',
      },
      {
        image_url: '../../assets/images/rectangle-992.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 135,
        trend_Id: '#5692',
      },
      {
        image_url: '../../assets/images/rectangle-993.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 145,
        trend_Id: '#5693',
      },
      {
        image_url: '../../assets/images/rectangle-994.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 155,
        trend_Id: '#5694',
      },
      {
        image_url: '../../assets/images/rectangle-1035.png',
        image_title: '‘Look Mum, My Painting Got Into Art Basel!’',
        price: 165,
        trend_Id: '#5695',
      },
    ];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.timeNow = Date.now();
    }, 1);
  }

  editDialog(index: any) {
    if (index === undefined || index < 0 || index >= this.trending.length) {
      console.error('Invalid index or out of bounds:', index);
      return;
    }

    const trendItem = this.trending[index];

    if (!trendItem) {
      console.error('Invalid trend item:', trendItem);
      return;
    }

    const dialogRef: MatDialogRef<EditDialogComponent, number> =
      this.dialog.open(EditDialogComponent, {
        data: trendItem.price,
      });

    dialogRef.componentInstance.priceUpdated.subscribe(
      (updatedPrice: number) => {
        this.trending[index].price = updatedPrice;
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
    });
  }
}
