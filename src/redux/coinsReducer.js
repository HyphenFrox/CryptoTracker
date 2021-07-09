import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const updateCoinsData = createAsyncThunk("coins/update", async () => {

  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`).catch((error) => { console.log(error); })

  return data
})

const coinsReducer = createSlice({
  name: "coins",
  initialState: {
    coinData: [],
    filterQuery: "",
    isLoading: true,
  },
  reducers: {
    updateFilterQuery(state, action) {
      state.filterQuery = action.payload
      return state
    }
  },
  extraReducers: {
    [updateCoinsData.pending]() {
      console.log("fetching data");
    },
    [updateCoinsData.fulfilled](state, action) {
      console.log("data fetched");
      console.log(action.payload);
      state.coinData = action.payload
      state.isLoading = false
      return state
    },
    [updateCoinsData.rejected](action) {
      console.log(action.error);
    }
  }
});

export { updateCoinsData };
export const { updateFilterQuery } = coinsReducer.actions
export default coinsReducer.reducer;
