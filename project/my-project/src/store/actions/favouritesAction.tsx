import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface Item{
  length: number;
  favourites:[]
}

const initialState={
  length:0,
  value:null,
  favourites:[]
}

const FavouritesAction=createSlice({
name:"FavouritesAction",
initialState,
reducers:{
  setValue(state,action){
    state.value = action.payload;
  },
  setLengthFavourites(state,action){
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

export const {setValue,setLengthFavourites,increment,decrement} = FavouritesAction.actions

export default FavouritesAction.reducer;