import { createSlice, configureStore } from '@reduxjs/toolkit';
const searchSlice = createSlice({
  name: 'search',
  initialState: { searchedText: '' },
  reducers: {
    set(state, action) {
      state.searchedText = action.payload;
    },
  },
});
const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuth: false, id: null },
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.id = action.payload;
    },
    logout(state, action) {
      state.isAuth = false;
      state.id = null;
    },
  },
});

const store = configureStore({
  reducer: { search: searchSlice.reducer, auth: authSlice.reducer },
});

export const searchActions = searchSlice.actions;
export const authAction = authSlice.actions;
export default store;
