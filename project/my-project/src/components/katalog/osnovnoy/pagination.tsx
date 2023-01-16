import React,{useState,useEffect} from "react"
import "./pagination.css"

export default function Pagination({KatalogPerPage,total,paginate,currentPage,breackLabel}){
  const pageNumbers : number[]=[];
  const [pageLinkState, setPageLinkState] = useState(false);
  const [pageItemState, setPageItemState] = useState(false);
  const [currentPagethis,setcurrentPagethis]=useState(currentPage);
  const [CurrentStart,setCurrentStart]=useState(currentPage);
  for (let i = 1; i <= Math.ceil(total/KatalogPerPage); i++){
    pageNumbers.push(i)
  }



  const pageClick=(number)=>{
    paginate(number);
    setPageItemState(true);
    setPageLinkState(true);
    setcurrentPagethis(number);
    setCurrentStart(0)
  }

  return(
      <ul className="pagination">
      {
        pageNumbers.map(number =>(
          <li className={((pageItemState===true)&&(currentPagethis==number))||(CurrentStart==number)? "pageItem pageItem__active":"pageItem"} key={number}>
            <a href="#" className={((pageLinkState===true)&&(currentPagethis==number))||(CurrentStart==number)? "pageLink pageLink__active":"pageLink"} onClick={()=>pageClick(number)}>{number}</a>
          </li>
        ))    
      }
    </ul>
  )
}