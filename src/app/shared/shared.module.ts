import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ImagesGridComponent } from './components/images-grid/images-grid.component';



@NgModule({
  declarations: [SearchBarComponent, ImagesGridComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SearchBarComponent, ImagesGridComponent],
})
export class SharedModule {}
