let textarea = document.getElementById("TextArea");
let btn = document.getElementById("btnclick");


textarea.value = localStorage.getItem('Text');
textarea.oninput = () => {
  localStorage.setItem('Text', textarea.value)
};

btn.onclick = () => {
  localStorage.removeItem('Text');
  textarea.value = localStorage.getItem('Text');
}