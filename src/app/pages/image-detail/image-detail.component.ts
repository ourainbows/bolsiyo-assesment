import { imageModel } from './../../core/models/image.model';
import { loadImage } from './../../core/state/actions/image.actions';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.sass'],
})
export class ImageDetailComponent implements OnInit {
  image$: Observable<imageModel> = new Observable();
  idImage: string = '';

  constructor(private router: ActivatedRoute, private store: Store<{ stateImage: any }>) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.idImage = params['id'];
    });

    this.store.dispatch(loadImage({ id: this.idImage }));
    this.image$ = this.store.select('stateImage').pipe(map((state) => state.data));
  }
}
