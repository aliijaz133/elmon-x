import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elmon-x',
  templateUrl: './elmon-x.component.html',
  styleUrls: ['./elmon-x.component.scss'],
})
export class ElmonXComponent implements OnInit {
  showLoader: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    });
  }
}
