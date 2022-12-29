const lottery= async () => {
    console.log("Вы начали игру");
    let promise = await new Promise((resolve,reject)=>{
      setTimeout(()=> {
      Math.random(0) > 0.5 ? resolve(console.log("В яблочко!")) : reject(console.log("Вы промахнулись"));
    }, 500);
  });
    return promise;
}

lottery()
 
  .then(() =>setTimeout(() => {console.log("Вы выиграли")},1000))
  .then(() =>setTimeout(() => { console.log("Вам заплатили")},1500))
  .catch(() =>setTimeout(() => { console.log("Вы проиграли")},1000))
  .finally(() =>setTimeout(() => { console.log("Игра закончена")},2500));