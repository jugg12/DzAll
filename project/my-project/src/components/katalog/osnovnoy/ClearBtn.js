import { cityIn, cityFrom, cityTo } from 'lvovich';
import { useSelector } from 'react-redux';


export default function Clear(category,setCategory,setValue,setValue2,axios,setArenda,gorod){
  const gorod2=gorod;
  const Opcii = document.querySelector(".Opcii");
  const dopOpcii = document.querySelector(".DopOpcii");
  const h1= document.querySelector(".ArendaInnerTextH1");
  const btn = document.getElementById("SpisokFilter");
  const btn2 = document.getElementById("FilterMesta");
  const btn3 = document.getElementById("FilterRayon");
  const btn4 = document.getElementById("FilterMetro2");
  const input = document.getElementById("checkboxInputValue");
  
  if (category){
    setCategory("");
    h1.textContent=`Аренда квартир на сутки в ${cityIn(gorod2)}`;
  }
  document.querySelectorAll(".categoriesBtn").forEach(function(categoriaalone){
    const categoria = categoriaalone.querySelector(".xHidden");
    categoriaalone.classList.remove("hidden");
    categoria.classList.remove("active");
  });

  document.querySelectorAll(".checkBoxOpcii").forEach((checkbox)=>{
    checkbox.checked=false
      });
  setValue("");
  setValue2("");
  btn.textContent="Выберите";
  btn2.textContent="Выберите";
  btn3.textContent="Выберите";
  btn4.textContent="Выберите";
  input.textContent="";
  Opcii.classList.remove("active");
  dopOpcii.classList.remove("active");
  axios.get(`/ArendaCard?city2=${gorod2}`)
  .then(({data})=>{
    setArenda(data)
  });
}