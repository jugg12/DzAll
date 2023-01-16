import Homepage from "./components/glavnaya/Homepage";
import Map from "./components/glavnaya/Map";
import Oshibka from "./components/glavnaya/Oshibka";
import Vhod from "./components/vhod/vhod";
import Registraciya from "./components/vhod/registraciya/registraciya";
import Otpravka from "./components/vhod/registraciya/otpravka";
import Kontakti from "./components/glavnaya/kontakti";
import Katalog from "./components/katalog/katalog";
import News from "./components/news/News";
import Zakladki from "./components/glavnaya/Zakladki";
import NewsSelect from "./components/news/NewsSelect";
import Obyavlenia from "./components/glavnaya/obyavlenia"
import Katalogselect from "./components/katalog/katalogselect"
import "./App.css";
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
import React,{useState} from "react";
import { Routes, Route, Switch, useLocation} from "react-router-dom";
import { createBrowserHistory } from "history";
import Test from "./components/glavnaya/testObyavlenia/test";



function App() {
  const CustomHistory = createBrowserHistory();
  return (
    <>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/Vhod" element={<Vhod/>}/>
            <Route exact path="/kontakti" element={<Kontakti/>}/>
            <Route exact path="/Otpravka" element={<Otpravka/>} />
            <Route exact path="/registraciya/registraciya" element={<Registraciya/>}/>
            <Route exact path="/katalog/city=?/" element={<Katalog/>} />
            <Route exact path="/katalog/city?/:city/:id" element={<Katalogselect/>} />
            <Route exact path="/News" element={<News/>} />
            <Route exact path="/News/:id" element={<NewsSelect/>} />
            <Route exact path="/Map" element={<Map/>} />
            <Route path='/instagram.com' element={() => window.location = 'https://instagram.com'}/>
            <Route path='/vk.com' element={() => window.location = 'https://vk.com'}/>
            <Route path='/facebook.com' element={() => window.location = 'https://facebook.com'}/>
            <Route path='/whatsapp.com' element={() => window.location = 'https://whatsapp.com'}/>
            <Route path='/telegram.org' element={() => window.location = 'https://telegram.org'}/>
            <Route path='/viber.com' element={() => window.location = 'https://viber.com'}/>
            <Route exact path = "/Zakladki" element = {<Zakladki/>} />
            <Route exact path = "/obyavlenia" element = {<Obyavlenia/>} />
            <Route exact path = "/obyavlenia/test/:id" element = {<Test/>} />
            <Route exact path="*" element={<Oshibka/>} />
          </Routes>        
      </div>
    </>
      
  );
}

export default App;
