import './App.css';
import React,{useContext,useState,useRef,memo} from "react"
import {Context} from "./Context"




function App() {

  const {theme,setTheme} = useContext(Context)
  const ref=useRef(null);
  const [check,setCheck] = useState(false)

  const change=()=>{
    setTheme(theme==='light-blue'?'dark-blue':'light-blue')
    setCheck(!check)
    console.log(theme)
  }
  const HandleFocus=()=>{
    ref.current.style.color='red';

  }
  return (
    
    <div className={`app${theme}`}>
      <div className="najmi" style={{border:"1px solid #000",width:"250px",textAlign:"center"}}>
        <p className="info" style={{margin:0,padding:0}}>Нажми чтобы поменять цвет</p>
        <input type="checkbox" onChange={change}/>
      </div>
      <div className="form">
        <input ref={ref}></input>
        <button onClick={HandleFocus}>focus</button>
      </div>
      
    </div>
  );
}
  export default memo(App);




