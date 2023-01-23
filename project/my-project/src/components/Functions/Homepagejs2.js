import { cityIn, cityTo } from 'lvovich';
export default function click2(){
  document.querySelectorAll(".dropdown").forEach(function(dropdownWrapper){
    const listitemclick=dropdownWrapper.querySelectorAll(".dropdown__item");
    const btn = dropdownWrapper.querySelector(".List");
    const btnclick = dropdownWrapper.querySelector(".List__dropdown");
    const input =  dropdownWrapper.querySelector(".drodown__item__hiden");
    const input2 =  document.getElementById("cityInput");
    const input3 =  dropdownWrapper.querySelector(".drodown__item__hiden");
    const dopinfo__pervogo__delenia = document.querySelector(".dopinfo__pervogo__delenia");
  
      if(btnclick!==null){
        btnclick.classList.toggle("visible");
      }
    
    listitemclick.forEach(function(listitem){
      listitem.addEventListener("click",(e)=>{
        e.stopPropagation();
        btn.innerText=listitem.innerText ;
        btnclick.classList.remove("visible");
        input.value=btn.textContent;
        dopinfo__pervogo__delenia.textContent = `Аренда квартир в ${cityIn(input2.value)}`;
      })
    })
  
  
    document.addEventListener('click',(e)=>{
      if(e.target !== btn && btnclick!==null){
        btnclick.classList.remove("visible");
      }
    })
  
  })
  
  }
  
  
  
   
      
  
   