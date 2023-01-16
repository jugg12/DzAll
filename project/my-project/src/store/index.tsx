import {configureStore} from "@reduxjs/toolkit"
import filter from "./slices/FilterSlice";
import zakladkiAction from "./actions/zakladkiAction";
import obyavleniaAction from "./actions/obyavleniaAction";

const store = configureStore({
  reducer: { 
    filter,
    zakladkiAction,
    obyavleniaAction,
    }
})

export default store
