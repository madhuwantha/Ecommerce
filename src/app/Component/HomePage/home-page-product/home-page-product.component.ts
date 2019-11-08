import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-product',
  templateUrl: './home-page-product.component.html',
  styleUrls: ['./home-page-product.component.css']
})
export class HomePageProductComponent implements OnInit {

  constructor() { }
  // @ts-ignore
  i = [1, 2, 3, 5, 5, 5, 5, 5] ;
  ngOnInit() {
  }

}
