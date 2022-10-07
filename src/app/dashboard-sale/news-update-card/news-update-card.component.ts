import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-update-card',
  templateUrl: './news-update-card.component.html',
  styleUrls: ['./news-update-card.component.css']
})
export class NewsUpdateCardComponent implements OnInit {

  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }




}
