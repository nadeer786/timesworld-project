import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  countries: [],
  selectedRegion: "all",
};

const slice = createSlice({
  name: "country",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PRODUCTS
    getCountriesSuccess(state, action) {
      state.isLoading = false;
      state.countries = action.payload;
    },
    getSelectedRegion(state, action) {
      state.selectedRegion = action.payload;
    },
  },
});
export const { getSelectedRegion } = slice.actions;
// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getCountries({ region }) {
  return async (dispatch) => {
    dispatch(getSelectedRegion(region));
    dispatch(slice.actions.startLoading());
    try {
      let url;
      if (region === "all") {
        url = `/all?fields=name,region,flag`;
      } else {
        url = `/region/${region}?fields=name,region,flag`;
      }
      const response = await axios.get(url);
      dispatch(slice.actions.getCountriesSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
