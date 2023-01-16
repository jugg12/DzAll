import React,{useEffect, useState} from 'react';
import axios from '../../axios';
import "../glavnaya/mapSelect.css";
import ymaps from "ymaps"
import ArendaRoom from './ArendaRoom';


export default function mapSelect() {
  const [Arenda,setArenda]=useState<any>([]);
  localStorage.setItem("gorod","Минск");
  let gorod = localStorage.getItem("gorod");
  useEffect(()=>{
    axios.get(`/ArendaCard?city2=${gorod}`).then(({data})=>{
      setArenda(data);
    }).catch(()=>{"Значений не найдено"})
  },[gorod]);
 

  ymaps.load().then((maps) => {
    const map = new maps.Map(document.querySelector('.map '), {
      center: [53.902292, 27.561821],
      zoom: 12,
    })
    const Cluster =new maps.Clusterer({
    
    })
    
    Arenda.map(item=>{
    let placemark = new maps.Placemark ([(item.pointX!==null)?item.pointX:0,(item.pointY!==null)?item.pointY:0], {
      hintContent:"Объяление",
      balloonLayout: "",
      balloonContent:[
        `<div class="Card" style={width:"500px"}>
          <div class="balloon">Доступно ${Arenda.length} объявлений</div>
          <a href="/katalog/city=${item.city}" onClick={localStorage.setItem("gorod","Минск")}>Посмотреть все</a>
          </div>`]
      },    
      
      {
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn.onlinewebfonts.com/svg/download_358452.png',
        iconImageSize: [20, 30],
        iconImageOffset: [[-19, -44]],
      })
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    
    
    
    Cluster.add(placemark)
    },[gorod])
    map.geoObjects.add(Cluster); 
  // .catch(error => console.log('Failed to load Yandex Maps', error));
  })

  
  return(
    
    <div id="map" className="map">

    </div>
  )
}



