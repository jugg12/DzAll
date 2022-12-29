const loadBtn = document.querySelector(".vvod");
const Input = document.querySelector(".cifra");
const result = document.querySelector(".vivodoshibki");

loadBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const chislo = Input.value;
    try{
      console.log(chislo);
      if(chislo=="")
      {
        result.innerHTML = `<div class = "vivodoshibki">
        <p> <b>Ошибка:</b>Заполните поле ввода! </p>
        </div>`;
      }
      else if(chislo<5 || chislo>10){
        result.innerHTML = `<div class = "vivodoshibki">
        <p> <b>Ошибка:</b>Не правильно введены данные! Проверьте написание значения, введенного Вами числа: ('Ваше число'<5) или ('Ваше число'>10) </p>
        </div>`;
        return;
      }
      
      else if(chislo>5 || chislo <10){
        result.innerHTML = `<div class = "vivodoshibki">
        <p> Введенные данные верны =)</p><p><b>Молодец!</b></p>
        </div>`;
        return;
      }

      else{
        result.innerHTML = `<div class = "vivodoshibki">
        <p> <b>Ошибка:</b>Другой тип данных! </p>
        </div>`;
        return;
      }
    }
    catch(error){
      alert(error)
    }
    
    
})