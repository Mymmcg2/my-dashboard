import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-selling-table',
  templateUrl: './top-selling-table.component.html',
  styleUrls: ['./top-selling-table.component.css']
})
export class TopSellingTableComponent implements OnInit {

  listOfData: Array<{ product: string; price: string; discount: string; sold: string; source: string }> = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      this.listOfData.push({
        product: `Product 1`,
        price: '$564',
        discount: `#DE2548`,
        sold: '60',
        source: 'google'
      });
    }
  }

}
