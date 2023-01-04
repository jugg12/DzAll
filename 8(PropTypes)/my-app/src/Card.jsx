import PropTypes from "prop-types"
import "./card.css"

export default function Card(props){
  const {card} = props

  const hide = (value) =>{
    document.querySelector(`.card${value}`).classList.add("hidden");
  } 
   return(
    <div className={`card${card.id}`}>
      <div className="card">
        <div>
          <p>
            {card.name} {card.surname}
          </p>
        </div>
        <div>
          <button className="Show" onClick={()=>alert(card.name + " " + card.surname)}>Показать информацию</button>
          <button className="Hide" onClick={()=>hide(card.id)}>Спрятать</button>
        </div>
      </div>
    </div>
  )

}

Card.PropTypes={
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname:PropTypes.string.isRequired
  }).isRequired
};
