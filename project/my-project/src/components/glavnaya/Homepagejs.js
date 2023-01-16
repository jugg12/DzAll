import { cityIn, cityTo, cityFrom } from 'lvovich';
import ArendaRoom from "./ArendaRoom";
import React,{useState,useEffect} from "react";

export default function click2(){
  document.querySelectorAll(".dropdown").forEach(function(dropdownWrapper){
    const listitemclick=dropdownWrapper.querySelectorAll(".dropdown__item");
    const btn = dropdownWrapper.querySelector(".Spisok");
    const btnclick = dropdownWrapper.querySelector(".Spisok__dropdown");
    const input =  dropdownWrapper.querySelector(".drodown__item__hiden");
    const input2 =  document.getElementById("cityInput");
    const input3 =  document.getElementById("cityInput2");
    const dopinfo__pervogo__delenia = document.querySelector(".dopinfo__pervogo__delenia");
    const dopkol_vo__predlojeniy = document.querySelector(".dopkol-vo__predlojeniy");
    const col = document.querySelector(".col");
  
      if(btnclick!==null){
        btnclick.classList.toggle("Spisok__dropdown__visible");
      }
    
    listitemclick.forEach(function(listitem){
      listitem.addEventListener("click",(e)=>{
        e.stopPropagation();
        btn.innerText=listitem.innerText ;
        btnclick.classList.remove("Spisok__dropdown__visible");
        input.value=btn.textContent;
        if (input3!==null){
          if (input3.value=="")
          {
            dopinfo__pervogo__delenia.textContent = `Аренда квартир в ${cityIn(input2.value)}`;
            dopkol_vo__predlojeniy.textContent=`Предложений в ${cityIn(input2.value)}`;
            localStorage.setItem("city2",input2.value);
          }
          else{
            dopinfo__pervogo__delenia.textContent = `Аренда квартир в ${cityIn(input2.value)} в ${cityIn(input3.value)} районе`;
            dopkol_vo__predlojeniy.textContent=`Предложений в ${cityIn(input2.value)}`;
            localStorage.setItem("city2",input2.value);
            localStorage.setItem("rayon",input3.value);
          }
        }
      })
    })
  
  
    document.addEventListener('click',(e)=>{
      if(e.target !== btn && btnclick!==null){
        btnclick.classList.remove("Spisok__dropdown__visible");
      }
    })
  
  })
  
  }
  
  
  
   
      
  
   