import { cityIn, cityFrom, cityTo } from 'lvovich';

export default function categoriaClick(value,value2,category,setCategory,setCategory2,setValue,setValue2,gorod){
  const gorod2=gorod;
  const btn = document.getElementById("SpisokFilter");
  const btn2 = document.getElementById("FilterMesta");
  const btn3 = document.getElementById("FilterRayon");
  const btn4 = document.getElementById("FilterMetro2");
  const Opcii = document.querySelector(".Opcii");
  const dopOpcii = document.querySelector(".DopOpcii");
  const input = document.getElementById("checkboxInputValue");
  
  btn.textContent="Выберите";
  btn2.textContent="Выберите";
  btn3.textContent="Выберите";
  btn4.textContent="Выберите";
  if(input!==null){
    input.textContent="";
  }
  Opcii.classList.remove("active");
  dopOpcii.classList.remove("active");
  


  document.querySelectorAll(".checkBoxOpcii").forEach((checkbox)=>{
    checkbox.checked=false;
  })

  document.querySelectorAll(".categoriesBtn").forEach(function(categoriaalone){
    const categoria = categoriaalone.querySelector(".xHidden");
    const h1= document.querySelector(".ArendaInnerTextH1");

    if (categoria.id==value){
      categoria.classList.toggle("active");
      if (category){
        setCategory("");
        h1.textContent=`Аренда квартир на сутки в ${cityIn(gorod2)}`;
        console.log(1);
      }
      else if (categoria.id==value && value2!=="rayon"){
        setCategory(categoriaalone.textContent);
        h1.textContent=`Аренда ${cityFrom(categoriaalone.textContent)} квартир на сутки в ${cityIn(gorod2)}`;
        setCategory2(value2);
        console.log(2);
      }
      else{
        setCategory(categoriaalone.textContent);
        h1.textContent=`Аренда квартир в ${cityIn(categoriaalone.textContent)} на сутки в ${cityIn(gorod2)}`;
        setCategory2(value2);
        console.log(3);
      }
    }
    else if (categoria.id!==value){
      categoriaalone.classList.toggle("hidden")
    }  
  })

  setValue("");
  setValue2("");
}