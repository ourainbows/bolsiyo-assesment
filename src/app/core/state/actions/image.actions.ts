import { createAction, props } from "@ngrx/store";

// to component
export const loadImage = createAction(
    "[Image] Load Image", props<{ id: string }>()  
);

// to effect
export const loadImageSuccess = createAction(
    "[Image] Load Image Success", props<{data: any}>()
)