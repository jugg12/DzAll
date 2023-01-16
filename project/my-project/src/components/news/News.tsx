import React,{useState,useEffect} from "react";
import Header from "../glavnaya/Header"
import Footer from "../glavnaya/Footer"
import "./News.css"
import {useLocation,useNavigate,Link} from "react-router-dom"
import axios from "../../axios"
import Pagination from "../katalog/osnovnoy/pagination";
import { Card,Button,Col,Row } from "react-bootstrap"
import btnclick from "../glavnaya/clickbtnkontakti"
import ReactPaginate from "react-paginate";

export default function News(){

  const [currentPage,setCurrentPage] = useState([]);
  const [KatalogPerPage,setKatalogPerPage]= useState(9)
  const [value,setValue] = useState<any>("")
  const [itemOffset,setItemOffset] = useState(0)
  const [pageCount,setCountPage]= useState(0)
  const history=useNavigate();

  const handlepageclick = (e) =>{
    const newOffset = (e.selected*KatalogPerPage)%News.length;
    setItemOffset(newOffset)
  }

  const push = (item) =>{
    window.scroll(0,0)
    history(`/News/${item}`)
  }

  const [News,setNews]=useState<any>([]);
  useEffect(()=>{
    axios.get("/NewsCard").then(({data})=>{
      setNews(data);
    })
  },[])
  
  const [Open,setOpen]=useState(true)

  const filter = News.filter(item=>{
    return item.title.toLowerCase().includes(value.toLowerCase())
  })

  useEffect(()=>{
    const endoffset=itemOffset+KatalogPerPage
    setCurrentPage(filter.slice(itemOffset,endoffset));
    setCountPage(Math.ceil(filter.length/KatalogPerPage))
  },[itemOffset,KatalogPerPage,News,currentPage])

  const itemClickHandler=(e)=>{
    setValue(e.target.textContent)
    setOpen(false)
  }
 
  const inputHandler=()=>{
    setOpen(true)
  }
  

  return(
    <>
      <Header/>
        <section className="FirstNews">
          <div className="FirstNewsDiv">
            <div className="conteiner">
              <div className="NewsDelenie">
                <div className="PervoeDelenieNews">
                  <div className="hlebnie">
                  <nav className="breadcrumbs" style={{display:"flex"}}>
                    <Link to="/">
                      <div className="HomeLink" style={{marginRight:"7px"}}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.7984 5.36427L6.41443 0.458394C6.17811 0.243027 5.82174 0.243051 5.58552 0.458371L0.201488 5.3643C0.0121833 5.5368 -0.0503478 5.80258 0.0421364 6.04138C0.134644 6.28019 0.359878 6.43448 0.615979 6.43448H1.4759V11.3498C1.4759 11.5447 1.63391 11.7027 1.8288 11.7027H4.7799C4.97478 11.7027 5.1328 11.5447 5.1328 11.3498V8.36537H6.86722V11.3498C6.86722 11.5447 7.02523 11.7027 7.22011 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6401 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9877 5.5368 11.7984 5.36427Z" fill="#4E64F9"/>
                        </svg>
                      </div>
                    </Link>
                    <Link to="/News" style={{textDecoration:"none"}}>
                      <div className="katalogLink">
                        <p className="LinkText">Новости</p>
                      </div>
                    </Link>
                  </nav>
                  </div>
                  <h1 className="InnerTextNews">Новости</h1>
                </div>
                <div className="VtoroeDelenieNews" style={(currentPage.length<=0 && currentPage!==null)?{height:"622px"}:{height:"1000px"}}>
                  <div className="">
                    <input type="text" className='InputSerch' value={value} placeholder='Поиск по статьям' onClick={inputHandler} onChange={e=>setValue(e.target.value)}/>
                    <button className="Search">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8676 15.2581L13.5441 11.9344C13.3941 11.7844 13.1907 11.7011 12.9774 11.7011H12.434C13.3541 10.5243 13.9008 9.04417 13.9008 7.43401C13.9008 3.60364 10.7973 0.5 6.96711 0.5C3.13693 0.5 0.0334473 3.60364 0.0334473 7.43401C0.0334473 11.2644 3.13693 14.368 6.96711 14.368C8.57718 14.368 10.0573 13.8213 11.234 12.9012V13.4446C11.234 13.658 11.3173 13.8613 11.4673 14.0113L14.7908 17.335C15.1042 17.6483 15.6108 17.6483 15.9209 17.335L16.8642 16.3916C17.1776 16.0782 17.1776 15.5715 16.8676 15.2581ZM6.96711 11.7011C4.61033 11.7011 2.70024 9.79424 2.70024 7.43401C2.70024 5.07711 4.607 3.16693 6.96711 3.16693C9.32388 3.16693 11.234 5.07378 11.234 7.43401C11.234 9.79091 9.32722 11.7011 6.96711 11.7011Z" fill="white"/>
                      </svg>
                    </button>
                      <ul className="Spisok__dropdown2">
                        {
                          value && Open? (News.length)? currentPage.map((item)=>{
                            return(
                              <li className="dropdown__item" key={item.id} onClick={itemClickHandler}>{item.title}</li>
                            )
                          }): <h1>Значений не найдено</h1>
                          :null
                        }
                        </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="SecondNews">
          <div className="SecondNewsOsnova">
            <div className="conteiner">
              <div className="CardsNews">
                {
                  (News.length && currentPage.length) >0?
                  currentPage.map((item)=>( 
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
                                  <p className="textPodrobnee ReadBtn" onClick={(e)=>push(item.id)}>Читать</p>
                              </div>
                              </Button>
                            </div>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  )):News.length<=0?<h4 style={{height:"337px"}}>Значений не найдено</h4>:<h4 style={{height:"337px"}}>Значений не найдено</h4>
                }
                <div style={{width:"100%"}}>
                <ReactPaginate
                  breakLabel={"..."}
                  containerClassName="pagination"
                  pageRangeDisplayed={7}
                  pageClassName="pageItem"
                  pageLinkClassName="pageLink"
                  activeClassName="pageItem pageItem__active"
                  activeLinkClassName="pageLink pageLink__active"
                  pageCount={pageCount}
                  onPageChange={handlepageclick}
                  previousClassName="previousClass"
                  nextClassName="nextClass"
                />
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer/>
      
    </>
  )
}