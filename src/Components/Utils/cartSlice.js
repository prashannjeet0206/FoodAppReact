import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Mango", "lichee", "WaterMelon"],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItems } = CartSlice.actions;
export default CartSlice.reducer;
