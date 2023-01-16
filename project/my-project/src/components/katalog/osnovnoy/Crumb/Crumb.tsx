import {useLocation} from "react-router-dom"
import React from "react";
import "./Crumb.css"
import classNames from "classnames"
// import Icon from "../../../glavnaya/img/hlebnie/Home.svg"


export interface ICrumbProps{
  className?:string;
  path:string;
  title:string;
  url:string;
}

export default function Crumb(){

  return(
        <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="2" r="1.5" fill="#4E64F9"/>
        </svg>

  )

}