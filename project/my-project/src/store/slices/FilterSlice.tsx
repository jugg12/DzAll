
import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface FilterProp{
  category:number,
  categoryInfoId:number,
  filterAll:{},
  cityRayon:{},
  metro:string,
  city:string,
  rayon:string,
  rooms:string,
  priceMin:number,
  priceMax:number,
  sleepPlaces:string,
  inputCheckboxInfo:string,
}

const initialState = {
  category : 1,
  categoryInfoId : 1,
  sort:"По умолчанию",
  filterAll:{
    rayon:"Выберите",
    rooms:"Выберите",
    priceMin:"",
    priceMax:"",
    sleepPlaces:"Выберите",
    metro:"Выберите",
    inputCheckboxInfo:"",
    city:"Выберите"
  },
  cityRayon:{
    city:"Минск",
    rayon:"Шабаны р.",
    length,
  },
  city: "Минск",
  kvartiri:"Квартиры на сутки"
}

const FilterSlice = createSlice({
  name:"filter",
  initialState,
  reducers:{
    setCategoryId(state,action){
      state.category = action.payload
    },
    setCategoryInfoId(state,action){
      state.categoryInfoId = action.payload
    },
    setCity(state,action){
      state.city = action.payload
    },
    setKvartiri(state,action){
      state.kvartiri = action.payload
    },
    setFilterAll(state,action){
      state.filterAll={
        rayon:action.payload[0],
        rooms:action.payload[1],
        priceMin:action.payload[2],
        priceMax:action.payload[3],
        sleepPlaces:action.payload[4],
        metro:action.payload[5],
        inputCheckboxInfo:action.payload[6],
        city:action.payload[7]
      }
    },
    setCityRayonHomePage(state,action){
      state.cityRayon={
        city:action.payload[0],
        rayon:action.payload[1],
        length:action.payload[2]
      }
    },
    setSort(state,action){
      state.sort = action.payload
    },
    clearFilter(state,action){
      state.filterAll={
        rayon:"Выберите",
        rooms:"Выберите",
        priceMin:"",
        priceMax:"",
        sleepPlaces:"Выберите",
        metro:"Выберите",
        inputCheckboxInfo:"",
        city:"Выберите",
      }
    }
  }
  }  
)
export const {setCategoryId,setKvartiri,setCategoryInfoId,setCityRayonHomePage,setSort,setFilterAll,setCity,clearFilter} = FilterSlice.actions

export default FilterSlice.reducer;