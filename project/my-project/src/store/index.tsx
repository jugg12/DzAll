import {configureStore} from "@reduxjs/toolkit"
import filter from "./slices/FilterSlice";
import zakladkiAction from "./actions/favouritesAction";
import advertisementAction from "./actions/advertisementAction";

const store = configureStore({
  reducer: { 
    filter,
    zakladkiAction,
    advertisementAction,
    }
})

export default store
