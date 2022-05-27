import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type WalletState = string | null | false

// Define the initial state using that type
const initialState = false as WalletState

export const counterSlice = createSlice({
  name: "wallet",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setWallet(_, action: PayloadAction<WalletState>) {
      return action.payload
    },
  },
})

export const { setWallet } = counterSlice.actions

export default counterSlice.reducer
