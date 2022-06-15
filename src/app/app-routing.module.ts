import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'images', loadChildren: () => import('./pages/images/images.module').then(m => m.ImagesModule) },
  { path: 'image-detail/:id', loadChildren: () => import('./pages/image-detail/image-detail.module').then(m => m.ImageDetailModule) },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
