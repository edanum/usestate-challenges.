import "./ShoppingItem.css";
import {useState} from "react"
 
function ShoppingItem({ name, price }) {
  
const[amount,setAmount] = useState(1)

  function handleIncrement(){
    setAmount(amount + 1);
  }
  
  function handleDecrement() {
    setAmount(amount - 1);
  }

  return (
    <section className="item">
      <h2>{name}</h2>
      <p>price: {price}</p>
      <p>amount: {amount}</p>
      <p>total: {price * amount}</p>
      <button className="item__button" type="button" onClick={handleDecrement}>
        -
      </button>
      <button className="item__button" type="button" onClick={handleIncrement}>
        +
      </button>
    </section>
  );
}

export default ShoppingItem;
