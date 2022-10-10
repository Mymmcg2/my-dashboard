import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-product-table',
  templateUrl: './popular-product-table.component.html',
  styleUrls: ['./popular-product-table.component.css']
})
export class PopularProductTableComponent implements OnInit {

  listOfData: Array<{ product: string; productCode: string; price: string; status: string }> = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.listOfData.push({
        product: `Product`,
        productCode: '#DE2548',
        price: '$99.00',
        status: 'active'
      });
    }
  }

}
