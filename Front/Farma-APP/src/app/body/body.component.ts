import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  itemsPerSlide = 5;
  singleSlideOffset = true;

  slides = [
    // {image: 'assets/Search.png'},
    // {image: 'assets/shampoo.jpg'},
    {image: 'assets/umiditá.jpg'},
    {image: 'assets/Farma.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
