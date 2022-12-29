
import {createSlice,PayloadAction} from "@reduxjs/toolkit"

type User={
  login:string,
}


type UserState={
  userlogin:User[];
}

const initialState:UserState = {
  userlogin:[]
}

const UserSlice = createSlice({
  name:"users",
  initialState,
  reducers:{
    add(state,action:PayloadAction<string>){
      state.userlogin.push({
        login:action.payload,
      })
    },
 
  }
  }  
)


export const {add} = UserSlice.actions

export default UserSlice.reducer;