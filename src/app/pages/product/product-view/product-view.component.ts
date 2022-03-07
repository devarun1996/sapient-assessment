import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  constructor() { }

  viewMode = 'grid';
  priceSort = '';

  products = [
    {
      price: 800, 
      image: '../../../../assets/1.jpg',
      title:'pure strike 100'
    }, 
    {
      price: 800,
      image: '../../../../assets/2.jpg',
      title:'pure drive 100'
    }, 
    {
      price: 200,
      image: '../../../../assets/3.jpg',
      title:'evoke 102'
    }, 
    {
      price: 200,
      image: '../../../../assets/4.jpg',
      title:'pulsion pro'
    }, 
    {
      price: 950,
      image: '../../../../assets/5.jpg',
      title:'pure aero 100'
    }, 
    {
      price: 850,
      image: '../../../../assets/12.jpg',
      title:'pure strike 98'
    }, 
     {
       price: 850,
      image: '../../../../assets/7.jpg',
      title:'pure drive 98'
    },
    {
      price: 1100, 
      image: '../../../../assets/15.jpg',
      title:'aero drive pro 98'
    }, 
    {
      price: 1000,
      image: '../../../../assets/9.jpg',
      title:'pure aero 98'
    }, 
    {
      price: 950,
      image: '../../../../assets/4.jpg',
      title:'aero drive pro 100'
    }, 
    {
      price: 150,
      image: '../../../../assets/3.jpg',
      title:'eagle'
    }, 
    {
      price: 120,
      image: '../../../../assets/12.jpg',
      title:'falcon'
    }, 
    {
      price: 500,
      image: '../../../../assets/13.jpg',
      title:'boost strike'
    }, 
    {
      price: 500,
      image: '../../../../assets/4.jpg',
      title:'boost drive'
    }, 
    {
      price: 200,
      image: '../../../../assets/15.jpg',
      title:'EVO drive'
    }, 
    {
      price: 320,
      image: '../../../../assets/1.jpg',
      title:'rival 102'
    }
  ];

  temp: any[] = [];

  ngOnInit(): void {

    this.temp =[ ...this.products];
  }

  sortProductArray() {

    if (this.priceSort === 'asc') {

      this.products.sort((a: any, b: any) => a.price - b.price);

    } else if (this.priceSort === 'desc') {

      this.products.sort((a: any, b: any) => b.price - a.price);

    } else if (this.priceSort === 'init') {

      this.products = [...this.temp];
    }
  }

}
