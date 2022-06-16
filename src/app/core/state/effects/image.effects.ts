import { loadImage, loadImageSuccess } from './../actions/image.actions';
import { ImagesService } from './../../services/images.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

@Injectable()
export class ImageEffects {
  constructor(
    private actions$: Actions,
    private imagesService: ImagesService
  ) {}

  getImageEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadImage),
      mergeMap((action) => {
        return this.imagesService.getImage(action.id).pipe(
          map((res) => loadImageSuccess({ data: res.hits[0] })),
          catchError((err) => EMPTY)
        );
      })
    );
  });
}
