export default function btnclick(value){
document.querySelectorAll(".dropdownKontakti").forEach(function(dropdownWrapper){
  const btn = dropdownWrapper.querySelector(".kontaktibtn");
  const inform=dropdownWrapper.querySelector(".informkontakti")
  if ((inform.id==value)){
    inform.classList.toggle("informkontakti__visible")
  }
 
  document.addEventListener('click',(e)=>{
    if(e.target !== btn){
      inform.classList.remove("informkontakti__visible");
    }
  })
})


}