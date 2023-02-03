import React,{useEffect,useState} from "react";


import { Card, Col,Row } from "react-bootstrap"
import ArendaRoomSelect from "../Catalog/ArendaInfo/ArendaRoomSelect";
import img7 from "../../img/footer/8.svg";
import "./catalogSelect.css"
import { useParams,useNavigate,Link} from "react-router-dom";
import axios from "../../axios";
import 'react-awesome-slider/dist/styles.css';
import CatalogSelectSkeleton from "../Skeletons/catalogSelectSkeleton";
import { ArendaCardProduct } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function catalogSelect(){
  const navigate=useNavigate();
  const params=useParams();
  const [Loading,setLoading] = useState<boolean>(true);
  const [arenda,setArenda]=useState<ArendaCardProduct>()
  useEffect(()=>{
    axios.get(`/ArendaCard/${params.id}`).then
    (({data})=>{
        setArenda(data);
        setLoading(false)
    }).catch(()=>navigate("/404"))
  },[params.id])
  return(
    Loading?<>
      <CatalogSelectSkeleton/>
    </>
    :arenda?
    <>
    
    <section className="firstCatalog">
      <div className="filterInfo">
          <div className="conteinerCatalogSelect">
            <div className="Crumbs">
            <nav className="breadcrumbs CatalogSelect" style={{display:"flex",alignItems:"center"}}>
              <Link to="/">
                <div className="HomeLink" style={{marginRight:"7px"}}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7984 5.36427L6.41443 0.458394C6.17811 0.243027 5.82174 0.243051 5.58552 0.458371L0.201488 5.3643C0.0121833 5.5368 -0.0503478 5.80258 0.0421364 6.04138C0.134644 6.28019 0.359878 6.43448 0.615979 6.43448H1.4759V11.3498C1.4759 11.5447 1.63391 11.7027 1.8288 11.7027H4.7799C4.97478 11.7027 5.1328 11.5447 5.1328 11.3498V8.36537H6.86722V11.3498C6.86722 11.5447 7.02523 11.7027 7.22011 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6401 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9877 5.5368 11.7984 5.36427Z" fill="#4E64F9"/>
                  </svg>
                </div>
              </Link>
              <Link to="/catalog" style={{textDecoration:"none"}}>
                <div className="catalogLink">
                  <p className="LinkText" style={{color:"#4E64F9"}}>Квартиры в {arenda.city}</p>
                </div>
              </Link>
              <div className="HomeLink " style={{margin:"0px 7px",paddingBottom:"5px"}}>
                <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.5" cy="2" r="1.5" fill="#4E64F9"/>
                </svg>
              </div>
                <div className="catalogLink" style={{cursor:"pointer"}}>
                  <p className="LinkText">{arenda.adress}</p>
                </div>
            </nav>
            </div>
            <div className="allCatalogselect">
              <div className="textFilterInfo">
                <div className="ArendaInnerText ArendaInnerTextcatalogSelect">
                  <h1>Аренда квартиры в {arenda.city}</h1>
                </div>
              </div>
              <div className="categories">
                <div className="">
                  <p className="adressInfoKataloSelect">{arenda.adress}</p>
                </div>
                <div className="Givemeall">
                  <p className="textPodelitsya">Поделиться</p>
                  <svg className="iconsoccatalogselect" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2831_890)">
                    <rect y="0.427734" width="34.1461" height="34.1461" rx="17.073" fill="#664EF9" fillOpacity="0.1"/>
                    <g clipPath="url(#clip1_2831_890)">
                    <path className="iconsoccatalogselect__hover" d="M22.7034 18.2305C22.4274 17.8819 22.5064 17.7268 22.7034 17.4152C22.707 17.4117 24.9855 14.2631 25.2203 13.1953L25.2217 13.1946C25.3384 12.8055 25.2217 12.5195 24.6576 12.5195H22.7909C22.3157 12.5195 22.0966 12.765 21.9793 13.0395C21.9793 13.0395 21.0289 15.3145 19.6844 16.7892C19.2504 17.2153 19.0498 17.3519 18.8129 17.3519C18.6963 17.3519 18.5149 17.2153 18.5149 16.8262V13.1946C18.5149 12.728 18.3818 12.5195 17.9884 12.5195H15.0533C14.7552 12.5195 14.5781 12.7372 14.5781 12.94C14.5781 13.3824 15.2503 13.4842 15.3201 14.7291V17.4302C15.3201 18.022 15.2126 18.1309 14.9743 18.1309C14.3398 18.1309 12.7997 15.8466 11.887 13.2323C11.7027 12.7251 11.5227 12.5202 11.044 12.5202H9.17662C8.64379 12.5202 8.53638 12.7657 8.53638 13.0403C8.53638 13.5254 9.17092 15.9377 11.4872 19.1247C13.0309 21.3 15.2048 22.4788 17.1824 22.4788C18.3712 22.4788 18.5163 22.217 18.5163 21.7667C18.5163 19.6881 18.4089 19.4917 19.0043 19.4917C19.2803 19.4917 19.7555 19.6283 20.8652 20.6776C22.1336 21.9218 22.3421 22.4788 23.052 22.4788H24.9187C25.4508 22.4788 25.7204 22.217 25.5653 21.7006C25.2103 20.6143 22.8116 18.3798 22.7034 18.2305Z" fill="#000000"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_2831_890">
                    <rect width="34.1461" height="34.9997" fill="white"/>
                    </clipPath>
                    <clipPath id="clip1_2831_890">
                    <rect width="17.073" height="17.073" fill="white" transform="translate(8.53638 8.96289)"/>
                    </clipPath>
                    </defs>
                  </svg>

                  <svg className="iconsoccatalogselect" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2831_894)">
                    <rect x="0.968262" y="0.427734" width="34.1461" height="34.1461" rx="17.073" fill="#664EF9" fillOpacity="0.1"/>
                    <g clipPath="url(#clip1_2831_894)">
                    <path className="iconsoccatalogselect__hover" d="M20.8839 11.7977H22.4426V9.08311C22.1737 9.04612 21.2489 8.96289 20.1718 8.96289C17.9246 8.96289 16.3852 10.3764 16.3852 12.9743V15.3653H13.9053V18.4H16.3852V26.0359H19.4256V18.4007H21.8052L22.1829 15.366H19.4249V13.2753C19.4256 12.3981 19.6618 11.7977 20.8839 11.7977Z" fill="#000000"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_2831_894">
                    <rect width="34.1461" height="34.9997" fill="white" transform="translate(0.968262)"/>
                    </clipPath>
                    <clipPath id="clip1_2831_894">
                    <rect width="17.073" height="17.073" fill="white" transform="translate(9.50464 8.96289)"/>
                    </clipPath>
                    </defs>
                  </svg>

                  <svg className="iconsoccatalogselect" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2831_902)">
                    <rect x="0.934143" y="0.427734" width="34.1461" height="34.1461" rx="17.073" fill="#664EF9" fillOpacity="0.1"/>
                    <path className="iconsoccatalogselect__hover" d="M17.7671 9.47798C16.3699 9.49685 13.3636 9.72621 11.6818 11.2671C10.4334 12.5083 9.99722 14.3381 9.94642 16.6041C9.90287 18.8614 9.85206 23.1001 13.9384 24.2549V26.0114C13.9384 26.0114 13.9108 26.7154 14.3754 26.8606C14.9488 27.0421 15.2754 26.4984 15.8197 25.9178L16.8359 24.771C19.6303 25.0032 21.7715 24.4669 22.0182 24.387C22.5844 24.2056 25.7787 23.7984 26.3013 19.5589C26.8384 15.1815 26.04 12.4234 24.6029 11.1749L24.5956 11.1735C24.1601 10.7743 22.4182 9.50411 18.5205 9.48959C18.5205 9.48959 18.2331 9.47145 17.7671 9.47798ZM17.8157 10.7097C18.2113 10.7075 18.4545 10.7242 18.4545 10.7242C21.7497 10.7315 23.3254 11.7258 23.6956 12.0597C24.9077 13.0969 25.5305 15.5843 25.0747 19.2395C24.6392 22.7815 22.048 23.0065 21.5689 23.1589C21.3657 23.2243 19.4786 23.6888 17.1037 23.5364C17.1037 23.5364 15.3334 25.671 14.7818 26.2226C14.6947 26.317 14.5931 26.346 14.5278 26.3315C14.4334 26.3097 14.4044 26.1936 14.4117 26.0339L14.4262 23.1168C10.9633 22.1588 11.1665 18.5427 11.2028 16.6556C11.2464 14.7685 11.602 13.221 12.6544 12.1758C14.0749 10.8912 16.6283 10.717 17.815 10.7097H17.8157ZM18.077 12.5968C18.0485 12.5967 18.0202 12.6023 17.9938 12.6131C17.9674 12.624 17.9433 12.64 17.9231 12.6601C17.9029 12.6803 17.8868 12.7042 17.8759 12.7306C17.8649 12.757 17.8593 12.7853 17.8593 12.8138C17.8593 12.8716 17.8822 12.927 17.9231 12.9678C17.9639 13.0086 18.0193 13.0316 18.077 13.0316C18.6166 13.0213 19.1529 13.118 19.655 13.3161C20.157 13.5141 20.6149 13.8097 21.0021 14.1856C21.7932 14.955 22.1786 15.9857 22.1932 17.3357C22.1932 17.3643 22.1988 17.3926 22.2097 17.419C22.2207 17.4454 22.2367 17.4694 22.2569 17.4897C22.2771 17.5099 22.3012 17.5259 22.3276 17.5369C22.354 17.5478 22.3823 17.5534 22.4109 17.5534V17.5469C22.4686 17.5469 22.524 17.524 22.5649 17.4831C22.6057 17.4423 22.6286 17.3869 22.6286 17.3292C22.6556 16.6943 22.553 16.0606 22.3271 15.4666C22.1013 14.8726 21.7569 14.3309 21.3149 13.8743C20.4512 13.0323 19.361 12.5968 18.0763 12.5968H18.077ZM15.2071 13.0976C15.0528 13.0756 14.8955 13.1063 14.7608 13.1847H14.7521C14.4545 13.3589 14.1801 13.5767 13.9188 13.867C13.7229 14.0993 13.6133 14.3308 13.5842 14.5558C13.5671 14.6878 13.5795 14.8219 13.6205 14.9485L13.635 14.9557C13.8587 15.6134 14.1507 16.2459 14.506 16.8429C14.9666 17.6789 15.5325 18.4524 16.1899 19.1444L16.2117 19.1735L16.2407 19.1952L16.2625 19.217L16.2843 19.2388C16.979 19.8978 17.7546 20.4661 18.5924 20.9299C19.5504 21.4525 20.1326 21.6993 20.4809 21.8009V21.8082C20.5826 21.8372 20.6755 21.8517 20.7698 21.8517C21.0672 21.83 21.3488 21.7094 21.5697 21.5091C21.8527 21.2551 22.0777 20.9735 22.2447 20.6759V20.6687C22.4116 20.3566 22.3536 20.0582 22.114 19.855C21.6313 19.4327 21.1087 19.0584 20.5535 18.7372C20.1834 18.534 19.8059 18.6574 19.6535 18.8606L19.3269 19.2736C19.16 19.4769 18.8551 19.4478 18.8551 19.4478L18.8464 19.4551C16.5819 18.8744 15.9794 16.5816 15.9794 16.5816C15.9794 16.5816 15.9504 16.2695 16.1609 16.1098L16.5673 15.7832C16.7633 15.6235 16.9012 15.2461 16.6907 14.8759C16.37 14.3205 15.9956 13.7978 15.573 13.3154C15.481 13.2014 15.3512 13.1241 15.2071 13.0976ZM18.4537 13.7436C18.396 13.7438 18.3407 13.7669 18.3 13.8079C18.2593 13.8489 18.2365 13.9043 18.2367 13.9621C18.2369 14.0198 18.26 14.0751 18.301 14.1158C18.342 14.1565 18.3974 14.1793 18.4552 14.1791C19.1816 14.1917 19.8733 14.4919 20.3786 15.0138C20.6066 15.2653 20.7819 15.56 20.8941 15.8803C21.0063 16.2007 21.0531 16.5404 21.0318 16.8792C21.032 16.9368 21.0551 16.992 21.0959 17.0327C21.1367 17.0733 21.192 17.0962 21.2496 17.0962L21.2568 17.1049C21.2855 17.1049 21.3139 17.0992 21.3403 17.0882C21.3668 17.0773 21.3908 17.0611 21.4111 17.0409C21.4313 17.0206 21.4473 16.9965 21.4582 16.97C21.4691 16.9435 21.4747 16.9151 21.4746 16.8864C21.4964 16.0227 21.2278 15.2969 20.698 14.7162C20.1681 14.1356 19.4278 13.8089 18.4842 13.7436C18.4741 13.7429 18.4639 13.7429 18.4537 13.7436ZM18.8094 14.9187C18.7803 14.9179 18.7513 14.9227 18.724 14.9331C18.6968 14.9434 18.6719 14.9591 18.6507 14.979C18.6295 14.999 18.6124 15.023 18.6005 15.0496C18.5886 15.0761 18.582 15.1048 18.5811 15.1339C18.5803 15.163 18.5851 15.192 18.5955 15.2193C18.6058 15.2465 18.6215 15.2714 18.6414 15.2926C18.6614 15.3138 18.6854 15.3309 18.712 15.3428C18.7385 15.3548 18.7672 15.3613 18.7963 15.3622C19.5149 15.3985 19.8633 15.7614 19.9068 16.509C19.9087 16.5655 19.9325 16.619 19.9731 16.6583C20.0137 16.6976 20.0681 16.7195 20.1246 16.7195H20.1318C20.1611 16.7186 20.1898 16.7118 20.2164 16.6995C20.2429 16.6872 20.2668 16.6697 20.2864 16.6481C20.3061 16.6264 20.3211 16.601 20.3307 16.5733C20.3403 16.5457 20.3443 16.5164 20.3423 16.4872C20.2915 15.5146 19.7617 14.9695 18.8181 14.9187C18.8152 14.9187 18.8123 14.9187 18.8094 14.9187Z" fill="#000000"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2831_902">
                    <rect width="34.1461" height="34.9997" fill="white" transform="translate(0.934143)"/>
                    </clipPath>
                    </defs>
                  </svg>

                  <svg className="iconsoccatalogselect" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2831_898)">
                    <rect x="0.902405" y="0.427734" width="34.1461" height="34.1461" rx="17.073" fill="#664EF9" fillOpacity="0.1"/>
                    <path className="iconsoccatalogselect__hover" d="M25.2089 10.9974L10.5659 16.644C9.56662 17.0454 9.5724 17.6029 10.3826 17.8515L14.142 19.0242L22.8403 13.5362C23.2516 13.2859 23.6274 13.4206 23.3185 13.6948L16.2712 20.0549H16.2695L16.2712 20.0557L16.0119 23.9308C16.3918 23.9308 16.5594 23.7565 16.7725 23.5509L18.5985 21.7752L22.3968 24.5808C23.0971 24.9665 23.6001 24.7683 23.7744 23.9325L26.2677 12.1817C26.5229 11.1585 25.8771 10.6951 25.2089 10.9974Z" fill="#000000"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2831_898">
                    <rect width="34.1461" height="34.9997" fill="white" transform="translate(0.902405)"/>
                    </clipPath>
                    </defs>
                  </svg>

                  <svg className="iconsoccatalogselect" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2831_906)">
                    <rect x="0.869446" y="0.427734" width="34.1461" height="34.1461" rx="17.073" fill="#664EF9" fillOpacity="0.1"/>
                    <path className="iconsoccatalogselect__hover" d="M24.1558 11.8793C23.3846 11.1024 22.4667 10.4865 21.4555 10.0674C20.4442 9.64821 19.3598 9.43412 18.2651 9.43754C13.6767 9.43754 9.94218 13.1721 9.94218 17.7637C9.94218 19.2308 10.3266 20.6654 11.0544 21.9257L9.87286 26.241L14.2869 25.0826C15.5072 25.7473 16.8745 26.0961 18.2641 26.0971H18.2672C22.8556 26.0971 26.5934 22.3625 26.5934 17.771C26.5961 16.6767 26.3821 15.5927 25.9635 14.5817C25.5449 13.5706 24.9302 12.6525 24.1548 11.8803L24.1558 11.8793ZM18.2672 24.6919C17.0271 24.6921 15.8097 24.3588 14.7427 23.7268L14.4896 23.5755L11.8704 24.2613L12.5698 21.7083L12.406 21.4457C11.7105 20.3438 11.3429 19.0667 11.3463 17.7637C11.3485 15.928 12.079 14.1682 13.3773 12.8704C14.6756 11.5727 16.4358 10.8431 18.2714 10.8417C20.1188 10.8417 21.859 11.5642 23.1644 12.8696C23.8086 13.5115 24.3192 14.2747 24.6668 15.1151C25.0143 15.9554 25.1919 16.8564 25.1892 17.7658C25.1861 21.5854 22.0816 24.6909 18.2672 24.6909V24.6919ZM22.0617 19.507C21.8548 19.402 20.8308 18.9 20.6407 18.8307C20.4506 18.7614 20.312 18.7256 20.1713 18.9357C20.0337 19.1426 19.6336 19.612 19.5117 19.7528C19.3899 19.8903 19.2691 19.9103 19.0623 19.8053C18.8554 19.7002 18.1822 19.4808 17.3882 18.7719C16.7707 18.2205 16.3516 17.5379 16.2298 17.331C16.108 17.1241 16.2162 17.0096 16.3222 16.9077C16.4178 16.8153 16.5291 16.6651 16.6342 16.5433C16.7392 16.4215 16.7717 16.3364 16.841 16.1957C16.9104 16.0581 16.8768 15.9363 16.8242 15.8313C16.7717 15.7262 16.3548 14.7023 16.1847 14.2853C16.0177 13.8779 15.8433 13.9346 15.7152 13.9272C15.5934 13.9209 15.4558 13.9209 15.3182 13.9209C15.1807 13.9209 14.9538 13.9734 14.7637 14.1803C14.5736 14.3872 14.0349 14.8924 14.0349 15.9163C14.0349 16.9403 14.7795 17.9285 14.8845 18.0693C14.9895 18.2068 16.3516 20.3104 18.4384 21.2105C18.9341 21.4237 19.3217 21.5518 19.6231 21.6505C20.1219 21.808 20.5746 21.7849 20.9327 21.7324C21.3328 21.6736 22.1635 21.2304 22.3379 20.7442C22.5122 20.2579 22.5122 19.842 22.4597 19.7559C22.4103 19.6635 22.2728 19.612 22.0627 19.506L22.0617 19.507Z" fill="#000000"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2831_906">
                    <rect width="34.1461" height="34.9997" fill="white" transform="translate(0.869446)"/>
                    </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    <section className="main">
      <img className="tochkiJeltie" style={{marginTop:"2%",position:"absolute",left:0,marginLeft:"21%"}} src={img7} alt="" />
      <div className="conteinerCatalogSelect">
        <div className="allInfoStructure">
          <Swiper pagination={{clickable:true}} navigation={{enabled:true}} modules={[Pagination,Navigation]} className="imgCatalogSelect">
              {
                arenda.url.map((itemImg)=>(
                  <SwiperSlide>
                      <img src={itemImg} style={{width:"100%",height:"100%"}}/>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          <p className="descriptionCatalogSelect">{arenda.description}</p>
        </div>
      </div>
    </section>
    <section className="last last2">
      <div className="Takje">
        <div className="conteiner">
          <div className="ArendaSecText ArendaSecTextcatalogSelect">
            <h2>Схожие предложения</h2>
          </div>
          <div className="card__list">
            <div className="Card">
              <div className="ColRowHome conteiner" style={{marginTop:"20px"}}>
                <div className="cards" style={{display:"flex",justifyContent:"space-between"}}>
                  <Row>
                    <Col>
                      <ArendaRoomSelect>{"/ArendaCard"}</ArendaRoomSelect>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </section>
    
    </>
    :""
  )
}