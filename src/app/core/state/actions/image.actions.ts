import { createAction, props } from "@ngrx/store";

export const loadImage = createAction(
    "[Image] Load Image", props<{ id: string }>()
);

export const loadImageSuccess = createAction(
    "[Image] Load Image Success", props<{data: any}>()
)