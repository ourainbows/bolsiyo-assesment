import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/core/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.sass']
})
export class ImagesComponent implements OnInit {
  constructor(private router: ActivatedRoute, private imagesService: ImagesService) { }
  
  public images: any[] = [];

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      console.log(params)
      this.imagesService.getImages(params['query'], params['category']).subscribe(images => {
        this.images = images.hits;
      });
    })
  }

}
