import React,{useState} from "react";
import {Link,NavLink} from "react-router-dom";
import "./Header.css";
import { useSelector,useDispatch } from "react-redux";
import UserSlice, {add} from "../../store/slices/UserSlice"
import click from "./Homepagejs"
import store from "../../store";



const Header=() =>{
  
  const user=store.getState().userlogin
  const userurl=localStorage.getItem("url")
  return(
    <>
    <header>
       <nav>
            <div className="conteiner">
            <div className="VerhNav">
              <div className="leftpart">
                <Link to="/" className="item">Главная</Link>
                <Link to="/News"className="item">Новости</Link>
                <Link to="/"className="item">Размещение и тарифы</Link>
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.43757 1.74419C6.70501 0.627907 5.49571 0 4.13525 0C2.78641 0 1.57711 0.627907 0.821293 1.74419C0.0654788 2.83721 -0.10894 4.23256 0.356176 5.45349C0.484083 5.77907 0.681758 6.11628 0.937572 6.4186L3.87943 9.88372C3.9492 9.95349 4.01897 10 4.12362 10C4.22827 10 4.29804 9.95349 4.3678 9.88372L7.32129 6.4186C7.57711 6.11628 7.78641 5.7907 7.90269 5.45349C8.3678 4.23256 8.19339 2.83721 7.43757 1.74419ZM4.13525 5.86047C3.13525 5.86047 2.30966 5.03488 2.30966 4.03488C2.30966 3.03488 3.13525 2.2093 4.13525 2.2093C5.13525 2.2093 5.96083 3.03488 5.96083 4.03488C5.96083 5.03488 5.14687 5.86047 4.13525 5.86047Z" fill="#8291A3"/>
                </svg>
                <Link to="/"className="item">Объявления на карте</Link>
                <Link to="/kontakti"className="item" >Контакты</Link>
              </div>
              <div className="rightpart">
                <Link to="/"className="item item3">Закладки</Link>
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="14.23px" viewBox="0 0 24 24" width="24px" fill="#8291A3">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                {
                  user.length?
                    <div className="UserLink">
                      
                      <div className="dropdown">
                        <button className="Spisok" onClick={click} style={{padding:"5px 69px 25px 12px"}}>
                          <div className="" style={{display:"flex",alignItems:"center"}} >
                            <img className="ImgUser" src={userurl} alt="" />
                            {(localStorage.setItem("user", user[0].login),user[0].login)}
                          </div>
                        </button >
                        <ul className="Spisok__dropdown" >
                          <li className="dropdown__item" value={"Выйти"? "1":"2"}><button onClick={()=>{localStorage.removeItem("login"); window.location.reload()}}>Выйти</button></li>
                        </ul>
                        <input type="text" name="select__category" value="" className="drodown__item__hiden" />
                      </div>
                      {/* <button className="Close" onClick={()=>{localStorage.removeItem("login"); window.location.reload()}}>Выйти</button> */}
                    </div>:<Link to="/Vhod"className="item item2">Вход и регистрация </Link>
                }
              </div>
            </div>
          </div>
        </nav>
    </header>
    <div className="head">
    <div className="conteiner">
          <div className="Menu">
          <Link to="/">
            <svg style={{cursor:"pointer"}} className="Logo" width="135" height="19" viewBox="0 0 135 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="0.0996094" width="134" height="19" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_2831_2326" transform="scale(0.00746269 0.0526316)"/>
            </pattern>
            <image id="image0_2831_2326" width="134" height="19" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAATCAYAAABV0nVhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM5Q0IxQzVDQUI4MTFFN0FBNEJFNEEyRjMzMUI3NTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM5Q0IxQzZDQUI4MTFFN0FBNEJFNEEyRjMzMUI3NTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzlDQjFDM0NBQjgxMUU3QUE0QkU0QTJGMzMxQjc1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzlDQjFDNENBQjgxMUU3QUE0QkU0QTJGMzMxQjc1NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhiAN3YAAAQ4SURBVHja7FpLbttADJUDX0A9QIEqu3SpHkFZd6UcQT6CfQTrCNYRok269hwhWnZpFegFdASXNChjTJOamUhWijYEBCPOzIgiHx8/8iIS5POX+xQ+8Irpqxav378OTfQh/5Qcj0fx+wUDRAEfa7gS5RwEyAYAUrN9uGfroQfuN3CVcEbrozicvYOPgn3dwf5PA3t89eGCz1Z6nnFvPwOsz+BjP7D+EdYbL2f9/H4M0BnPrBdff1TW/oPgwxbW3Av3EtfeMQfsBkAR0f+eCUBvkYScfIAzth6giAVQoMQjdJhKMvZ3+o567MDBO+u7lWR7WFMwUBSKv1d3VnSEGHpH6WaMrAmMQ5IHOGZuSf8yfQpw9MlewAyGmOTK5h72NdHDi+kZQwIFposN0j5Sd6DTvB+GQPkWYOTEKP8LMIx1tQOMfE6LCmtkxBaZovNp31I48CSQD58sSsei8zmQOhtLuZicnCvMUcH9OpZGEg9jFwTcoPphKmAgMFFvqi9uKsACjywNPA8FDqxvYE0lBP2awCUFZAVs0djAkPL7nlijpmJzEfgsHSu2aqWg60FTebBFZ3VK/ZpyRpZoWRBlZKNUCIp0Bl0k+/Doz5nNMoUtOptllgMP0m/GeqIlAxjfyloSjFg4KxfulShswA1RM6Rj1KaebXThiOwGztl40HnBWLMWjGymBgY4cy0U8Rf6250JsUYH+0ohGKXuqQS26DgwSiFVcMetifbRQasRAJEiLBXmKIlg7EapQ3yAkTg6Lh9pFL1Ttqa7AUNsHXo9KimlHOg+7KC7ANUdRTI668nzgfAG+xu3i9LZhs9PJiyCQ+jbpvCMQBwz4L9HIfwKANBYypVuL9jiDIweHDQ0Wnk+3PaGXUEu1Cu1YviE0tNcYhy6NhMwk6srMUIQJxrrU4oxKts8vPD67rr4BAfgooqc3tcZvIAZKhpDnX5B0cREsZB+bAPlQj3kAnPlWNMFOKjQ2lRMsY4WfKquBG10YLY6taM0x5BYQ21Pr4BBE8hUoO2y70pgDW5+FSIhiDHI6amjws6UwrFwFJYb3vLye4wpnAcYIx343y3bVywsm0iewBphvYH11wc9vIg6LxVnJPZsgXr10IIqtrqAhBQulEitCTjxiJrBxV6Jx7yhc3U4ZAutHXUCg7oLXkhusEgM7FLyWw7VlsqwAx35CgaoyXH5GwyRRsMvlc4UZ0X6mILWBYzC43yjVfee7ejNGCPgxdokOiwpJxqJNZTp2DnvT/AavmHTyFxpbxuP9g07hMT3re0E6WQdyjZz6IUTz6kYI6JWdR8wlGki+Q1eiJR2G2X9BuSqOJKcrQzKZpmEUjDNxhYBPnmaMpVEROXfrLesQ7/HqEa8c+iHVJXg7FxhpTZgUFZE843IOcu+B1t0ffvKp56ji1ule+inhIk92JmJpj9kRtF+wfVHgAEA5QnSPz/jqYUAAAAASUVORK5CYII="/>
            </defs>
            </svg>
          </Link>
          <div className="group">
            <Link to="/katalog/" className="Items">Квартиры на сутки</Link>
            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0069 2.61628C9.90811 0.941861 8.09415 0 6.05346 0C4.0302 0 2.21625 0.941861 1.08253 2.61628C-0.0511958 4.25581 -0.312824 6.34884 0.384851 8.18023C0.576711 8.6686 0.873223 9.17442 1.25694 9.62791L5.66973 14.8256C5.77439 14.9302 5.87904 15 6.03601 15C6.19299 15 6.29764 14.9302 6.40229 14.8256L10.8325 9.62791C11.2162 9.17442 11.5302 8.68605 11.7046 8.18023C12.4023 6.34884 12.1407 4.25581 11.0069 2.61628ZM6.05346 8.7907C4.55346 8.7907 3.31508 7.55233 3.31508 6.05233C3.31508 4.55233 4.55346 3.31395 6.05346 3.31395C7.55346 3.31395 8.79183 4.55233 8.79183 6.05233C8.79183 7.55233 7.5709 8.7907 6.05346 8.7907Z" fill="#FFD54F"/>
            </svg>
          </div>
          <Link to=""className="Items">Коттеджи и усадьбы</Link>
          <Link to=""className="Items">Бани и Сауны</Link>
          <Link to=""className="Items">Авто напрокат</Link>
          <Link to=""className="Items"><button className="btndob">+ Разместить объявление</button></Link>
          </div>
        </div>
        </div>
    </>
  );
}
export default Header