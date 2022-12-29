
  let btn = document.getElementById("burger");
  let btn2 = document.getElementById("burger2");
  let btn3 = document.getElementById("burger3");
  let btn4 = document.getElementById("burger4");
  let btn5 = document.getElementById("submitbtn");
  let popup = document.getElementById("popup");
  // let a = document.getElementById("like");
  // let like = document.getElementById("like2");
  let body = document.body;

    btn.addEventListener('click', (e) =>{
      e.preventDefault();
      popup.classList.toggle("open");
      body.classList.toggle("noscroll");
    })

    btn2.addEventListener('click', (e) =>{
      e.preventDefault();
      popup.classList.toggle("open");
      body.classList.toggle("noscroll");
    })

    btn3.addEventListener('click', (e) =>{
      e.preventDefault();
      popup.classList.toggle("open");
      body.classList.toggle("noscroll");
    })

    btn4.addEventListener('click', (e) =>{
      e.preventDefault();
      popup.classList.toggle("open");
      body.classList.toggle("noscroll");
    })

    if(btn5.addEventListener('click',(e) => {
    
      alert("Ваши данные отправлены, ожидайте ответа. В скором времени вам позвонят");
      btn5.addEventListener('submit', (e) =>{
        e.preventDefault();
    
      })
    }));
  
   

   


