import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageDetailRoutingModule } from './image-detail-routing.module';
import { ImageDetailComponent } from './image-detail.component';


@NgModule({
  declarations: [
    ImageDetailComponent
  ],
  imports: [
    CommonModule,
    ImageDetailRoutingModule
  ]
})
export class ImageDetailModule { }
