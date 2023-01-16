import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface Item{
  length: number;
  zakladki:[]
}

const initialState={
  length:0,
  value:0,
  zakladki:[]
}

const ZakladkiAction=createSlice({
name:"ZakladkiAction",
initialState,
reducers:{
  setValue(state,action){
    state.value = action.payload;
  },
  setLength(state,action){
    state.length = action.payload;
  },
  increment(state,action){
    state.length=action.payload+1;
  },
  decrement(state,action){
    state.length=action.payload-1;
  }
}
})

export const {setValue,setLength,increment,decrement} = ZakladkiAction.actions

export default ZakladkiAction.reducer;