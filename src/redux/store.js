import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./coinsReducer";

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
