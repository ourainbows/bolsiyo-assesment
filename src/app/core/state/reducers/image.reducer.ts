import { createReducer, on } from '@ngrx/store';
import { loadImageSuccess } from '../actions/image.actions';

export interface ImageState {
  data: any;
}

export const initialState: ImageState = {
  data: null,
};

export const imageReducer = createReducer(
  initialState,
  on(loadImageSuccess, (state, action) => ({ data: action.data }))
);
