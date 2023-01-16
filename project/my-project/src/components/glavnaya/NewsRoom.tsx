import React, {memo, useCallback,useState,useEffect,useRef} from "react"
import "./NewsRoom.css"
import axios from "../../axios"
import isEqual from 'lodash/isEqual'
import { Card,Button,Col } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import Slider from "react-slick"

import btnclick from "./clickbtnkontakti"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const NewsRoom=(link)=>{

  const sliderRef = useRef<any>(null);
  const history=useNavigate();
 

  const settings = {
    infinite: true,
    swipe:true,
    autoplaySpeed:0,
    autoplay:true,
    speed: 2500,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 2,
      initialSlide: true,
       
    }
    
    const push = (item) =>{
      window.scroll(0,0)
      history(`/News/${item}`)
    }
      
  
  const [Arenda,setArenda]=useState<any>([]);
  useEffect(()=>{
    axios.get(link.children).then(({data})=>{
      setArenda(data);
    })
  },[])
    
  return(
    <div className="slider-wrapper">
    <Slider {...settings} ref={sliderRef} className="Slider">
      {
      Arenda.map((item)=>(
        <Col key={item.id} style={{marginBottom:"25px",width:"33.33333%"}}>
        <Card className="card__style" style={{width:"406px",height:"500px"}}>
          <div className="SpisokInformKontakti">   
            <div className="CardOsnova">
              <Card.Img variant="top" className="imgCard" src={item.url}/>
              <Card.Body className="bodyCard" >
                <Card.Title className="card__title">
                  <div className="InnerText">{item.title}</div>
                </Card.Title>
                <Card.Text className="card__text card__text2">
                  {item.secondTitle}
                </Card.Text>  
                <div className="btnkontaktiOsnova">

                  <div className="kolvoludey DataNews">
                    {item.data}
                  </div>

                  <Button variant="primary" className="ReadButton">
                  <div className="Podrobnee">
                      <p className="textPodrobnee ReadBtn" onClick={(e)=>{push(item.id);window.location.reload()}}>Читать</p>
                  </div>
                  </Button>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Col>
    
    ))
      }
    </Slider>
    </div>
  )
  
}

export default NewsRoom