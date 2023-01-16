import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface item{
  city:string,
  sent:number,
  rooms:string,
  people:string,
  square:number,
  metro:string,
  rayon:string,
  FIO:string,
  number:string,
  mail:string,
  viber:string,
  whatsUp:string,
  workMail:string,
  dopInfo:{},
  opisanie:string
}

const initialState = {
  city:"",
  sent:0,
  rooms:"",
  people:"",
  square:0,
  metro:"",
  rayon:"",
  FIO:"",
  number:"",
  mail:"",
  viber:"",
  whatsUp:"",
  workMail:"",
  dopInfo:{
    mesta:"",
    checkBoxInfo:""
  },
  opisanie:""
}

const obyavleniaAction=createSlice({
  name:"obyavlenia",
  initialState,
  reducers:{
    changeInfo(state,action){
      state.city=action.payload;
      state.sent=action.payload[1];
      state.rooms=action.payload[2];
      state.people=action.payload[3];
      state.square=action.payload[4];
      state.metro=action.payload[5];
      state.rayon=action.payload[6];
      state.FIO=action.payload[7];
      state.number=action.payload[8];
      state.mail=action.payload[9];
      state.viber=action.payload[10];
      state.whatsUp=action.payload[11];
      state.workMail=action.payload[12];
      state.dopInfo=action.payload[13];
      state.opisanie=action.payload[14];
    },
    incrementObyavlenie(state,action){

    },
    decremenObyavlenie(state,action){
      
    }
  }
})

export const {changeInfo,incrementObyavlenie,decremenObyavlenie} = obyavleniaAction.actions;

export default obyavleniaAction.reducer;