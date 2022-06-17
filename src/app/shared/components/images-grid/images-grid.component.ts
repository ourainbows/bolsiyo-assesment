import { imageModel } from './../../../core/models/image.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.sass']
})
export class ImagesGridComponent implements OnInit {

  @Input() images: imageModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
