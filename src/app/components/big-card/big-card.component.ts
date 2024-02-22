import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  photoCover:string = 'https://secureservercdn.net/166.62.110.60/h65.3a1.myftpupload.com/wp-content/uploads/2021/09/variable-placeholder-product-31.jpg?time=1644500349'
  cardTitle:string ='PAO DE QUEIJO'
  cardDescription:string='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim illo asperiores vero, dicta, est tempore voluptatum laboriosam corporis excepturi, quas culpa incidunt iure ipsa expedita obcaecati aperiam earum eligendi consequatur.'

  constructor() { }

  ngOnInit(): void {
  }

}
