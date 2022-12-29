const bg = localStorage.getItem("bg");
const input = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
if (input.value==bg){
  input.checked = true;
}
else if(input2.value==bg){
  input2.checked = true;
}

if (bg!==null){
  document.documentElement.classList.add(bg)
}
document.querySelector(".themes").addEventListener("change",(e)=>{
  if(e.target.nodeName === "INPUT"){
    document.documentElement.classList.remove("black","light");
    document.documentElement.classList.add(e.target.value);
    localStorage.setItem("bg",e.target.value);
  }
  
})