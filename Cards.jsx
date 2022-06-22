
import './styleCards.css'

function Cards(props){
    return (
      <div className="header">
        <div className="nameC">
          <h3> {props.name} </h3>
        </div>
        <div className="dateC">
          <h3> {props.date} </h3>
        </div>
        <div className="amountC">
          <h3> {props.amount} </h3>
        </div>
        <small>{props.time}</small>
      </div>
    );
}

export default Cards