import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ImagesGridComponent } from './components/images-grid/images-grid.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [SearchBarComponent, ImagesGridComponent, NavComponent, FooterComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SearchBarComponent, ImagesGridComponent, NavComponent, FooterComponent],
})
export class SharedModule {}
