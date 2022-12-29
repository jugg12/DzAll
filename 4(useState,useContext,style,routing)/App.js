import Homepage from "./components/glavnaya/Homepage";
import Map from "./components/glavnaya/Map";
import Oshibka from "./components/glavnaya/Oshibka";
import Vhod from "./components/vhod/vhod";
import Registraciya from "./components/vhod/registraciya/registraciya";
import Otpravka from "./components/vhod/registraciya/otpravka";
import kontakti from "./components/glavnaya/kontakti";
import katalog from "./components/katalog/katalog";
import News from "./components/news/News";
import Zakladki from "./components/glavnaya/Zakladki";
import NewsSelect from "./components/news/NewsSelect"
import katalogselect from "./components/katalog/katalogselect"
import "./App.css";
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import { createBrowserHistory } from "history";



function App() {
  const CustomHistory = createBrowserHistory();
  return (
    <>
      <div className="App">
          <Switch history={CustomHistory}>
            <Route exact path="/" component={Homepage} history={CustomHistory}/>
            <Route exact path="/Vhod" component={Vhod} history={CustomHistory}/>
            <Route exact path="/kontakti" component={kontakti} history={CustomHistory}/>
            <Route exact path="/Otpravka" component={Otpravka} history={CustomHistory}/>
            <Route exact path="/registraciya/registraciya" component={Registraciya} history={CustomHistory}/>
            <Route exact path="/katalog/city=:city" component={katalog} history={CustomHistory}/>
            <Route exact path="/katalog/city=:city/:id" component={katalogselect} history={CustomHistory}/>
            <Route exact path="/News" component={News} history={CustomHistory}/>
            <Route exact path="/News/:id" component={NewsSelect} history={CustomHistory}/>
            <Route exact path="/Map" component={Map} history={CustomHistory}/>
            <Route path='/instagram.com' component={() => window.location = 'https://instagram.com'}/>
            <Route path='/vk.com' component={() => window.location = 'https://vk.com'}/>
            <Route path='/facebook.com' component={() => window.location = 'https://facebook.com'}/>
            <Route exact path = "/Zakladki" component = {Zakladki} history = {CustomHistory}/>
            <Route exact path="*" component={Oshibka} history={CustomHistory}/>
          </Switch>        
      </div>
    </>
      
  );
}

export default App;
