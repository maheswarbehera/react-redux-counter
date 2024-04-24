import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter-app',
    initialState,
    reducers: {
        increment: (state) => {
            console.log('in state ',state);
            console.log('in state - val ',state.value);
            state.value += 1
        },           

        decrement: (state) => {
            console.log('in state ',state);
            console.log('in state - val ',state.value);
            state.value -= 1
        },

        incrementByAmount: (state, action) => {
            console.log('action ',action);
            console.log('action payload',action.payload);
            state.value += action.payload
        },
    },
})

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }

export const {increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer