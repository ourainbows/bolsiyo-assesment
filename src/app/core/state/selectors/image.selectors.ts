import { createSelector } from '@ngrx/store';
import { ImageState } from '../reducers/image.reducer';

const getData = (state: ImageState) => state.data;

const getStateData = createSelector(
  (state: { imageState: ImageState }) => state.imageState,
  getData
);

export { getStateData };
