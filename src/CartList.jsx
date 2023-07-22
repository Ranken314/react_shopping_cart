import CartItem from "./CartItem";
import { useState } from "react";
import { nanoid } from "nanoid";
import _ from "lodash";
import './CartList.css';


function CartList(){
  
  // const [item1Name, setItem1Name] = useState("Hat");
  // const [item1Quantity, setItem1Quantity] = useState(2);

  // const [item2Name, setItem2Name] = useState("Tie");
  // const [item2Quantity, setItem2Quantity] = useState(2);

  // const [item3Name, setItem3Name] = useState("Belt");
  // const [item3Quantity, setItem3Quantity] = useState(2);

  // const [item4Name, setItem4Name] = useState("Shoes");
  // const [item4Quantity, setItem4Quantity] = useState(2);

  const [items, setItems] = useState([
    {id:nanoid(),name:"Hat", quantity:2},
    {id:nanoid(),name:"Tie", quantity:1},
    {id:nanoid(),name:"Belt", quantity:3},
    {id:nanoid(),name:"Shoes", quantity:5},

  ])

    function onNameChange(evt, item){
      const newName = evt.currentTarget.value;
      setItems(
        _.map(item,(x) => (x.id) === item.id ? {...x, name: newName}: x)
      );
    }

    function onQuantityAdd(evt, item){
      setItems(
        _.map(items, (x) => (x.id) === item.id ? {...x, quantity: ++x.quantity} : x)
      );
    }
  
    function onQuantityRemove(evt, item){
        const newQuantity = item.quantity -1;

      if(newQuantity > 0){
        setItems(
          _.map(items, (x) => (x.id) === item.id ? {...x, quantity: --x.quantity} : x)
        );
      }else{
        setItems(_.filter(item, (x) => x.id !== item.id))
      }
    }

    let itemCount = 0;
    for (const item of items) {
        if(item && item.quantity){
          itemCount += item.quantity;
        }
    }  
      
    
  
  return(
    <>
      {/* <CartItem name={items[0].name} quantity={items[0].quantity}/>
      <CartItem name={items[1].name} quantity={items[1].quantity}/>
      <CartItem name={items[2].name} quantity={items[2].quantity}/>
      <CartItem name={items[3].name} quantity={items[3].quantity}/> */}

      <div className="container move1">
        {itemCount <= 0 && <div className='textEmpty move2'>Your cart is empty! Add some items to it!</div>}
        <h1>Shopping Cart {itemCount > 0 && <span className="badge rounded-pill text-bg-primary">{itemCount}</span>}</h1>
        <button className="btn btn-lg btn-primary" onClick={(evt) => setItems([...items,{id:nanoid(),name:" ", quantity:1}])}>Add Item</button>
          {items.map(item => 
              <CartItem name={item.name} quantity={item.quantity} key={item.id} onNameChange={(evt) => onNameChange(evt, item)} onQuantityAdd={(evt) => onQuantityAdd(evt, item)} onQuantityRemove={(evt) => onQuantityRemove(evt, item)} />
            )}
      </div>
    </>
  );
}

export default CartList;