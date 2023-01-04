import Card from "./Card";

const cards = [
  { id:1, name: "Масим", surname:"Блинов"},
  { id:2, name: "Антонио", surname:"Бандерас"},
  { id:3, name: "Афанасий", surname:"Аркадьевич"}
]

function App() {
  return (
    <div>
      {
        cards.map((card)=>{
          return(
            <Card card={card}/>
          )
        })
      }
    </div>
  )
}

export default App;
