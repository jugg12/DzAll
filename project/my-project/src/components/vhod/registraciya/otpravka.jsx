import React from "react";
import {} from "./otpravka.css";
import {Link} from "react-router-dom";

export default function otpravka(){
  return(
  <div className="Forma">
    <form className="Regforma otprforma">
      <h1 className="podtverj">Подтвердите регистрацию</h1>
      <p1 className="sectextpodt">Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</p1>
      <Link to="/Vhod">
      <button className="Voyti btnunderstand">Понятно</button>
      </Link>
    </form>
  </div>
)

}