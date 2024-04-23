import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAddCommentFormSchema } from '../types/addCommentForm';

const initialState: IAddCommentFormSchema = {
  text: '',
  error: undefined,
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(loginByUsername.pending, (state, action) => {
  //         state.error = undefined;
  //         state.isLoading = true;
  //       })
  //       .addCase(loginByUsername.rejected, (state, action) => {
  //         state.isLoading = false;

  //         state.error = action.payload;
  //       })
  //       .addCase(loginByUsername.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //       });
  //   },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
