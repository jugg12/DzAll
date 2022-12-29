const loadBtn = document.querySelector(".js-load");
const loadBtn2 = document.querySelector(".js-load2");
const resultsContainer = document.querySelector(".js-results");
const resultsContainer2 = document.querySelector(".js-results2");
const searchInput = document.querySelector(".js-input");
const searchInput2 = document.querySelector(".js-input2");






  loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`).then(res=>res.json()).then(
    (data) =>
      (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.login}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
   );

});

loadBtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue2 = searchInput2.value.trim().toLowerCase();
  axios.get(`https://jsonplaceholder.typicode.com/users/${searchValue2}`).
  then((response)=>
      (resultsContainer2.innerHTML = `<div class="response-container2">
                <p> id: <span>${response.data.id}</span><p>
                <p> name: <span>${response.data.name}</span><p>
                <p> username: <span>${response.data.username}</span><p>
                <p> email: <span>${response.data.email}</span><p>
                <p> address: <span>${response.data.address.street}</span><p>
                <p> phone: <span>${response.data.phone}</span><p>
                <p> website: <span>${response.data.website}</span><p>
                <p> company: <span>${response.data.company.name}</span><p>
            </div>`)).catch(err=> alert("Введен неверный пользователь! Проверьте данные")).then
            

})
