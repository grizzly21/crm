import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: [
    './posting.component.scss',
    '../../../../common/styles/panel-general-style.scss',
  ]
})
export class PostingComponent implements OnInit {

  postings: any = [
    {
      numberOfPost: 3232,
      date: 'dasda',
      storage: 'this',
      shop: 'main',
      sum: 130,
      comment: 'nothing'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
