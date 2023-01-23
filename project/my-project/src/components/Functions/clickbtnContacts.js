export default function btnclick(value){
document.querySelectorAll(".dropdownContacts").forEach(function(dropdownWrapper){
  const btn = dropdownWrapper.querySelector(".ContactsBtn");
  const inform=dropdownWrapper.querySelector(".informContacts")
  if ((inform.id==value)){
    inform.classList.toggle("informContacts__visible")
  }
 
  document.addEventListener('click',(e)=>{
    if(e.target !== btn){
      inform.classList.remove("informContacts__visible");
    }
  })
})


}