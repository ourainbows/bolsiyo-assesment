import { imageModel,  imageResponseModel } from './../../core/models/image.model';
import { ImagesService } from './../../core/services/images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private imagesService: ImagesService) {}
  images: imageModel[] = [];

  ngOnInit(): void {
    this.imagesService.getImages('Tech').subscribe((data: imageResponseModel) => {
      this.images = data.hits;
    });
  }
}
