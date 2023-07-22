//import { useState } from "react";
//useState hook is used store data.

function CartItem(props){

  //useState method return 2 item
  //It return a value for the itemName variable
  //It also return a function to modify that data called setItemName

  //const [itemName, setItemName] = useState("Hat");
  //const [itemQuantity, setItemQuantity] = useState(2);

  return(
        <div className="row mt-4">
          <div className="col-md-3">
            <input type="text" className="form-control" value={props.name} onChange={(evt) => props.onNameChange(evt)}/>
          </div>
          <div className="col-md-2 text-center">
            <span>{props.quantity}</span>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary rounded-5"  onClick={(evt) => props.onQuantityAdd(evt)}>
                <span>Add</span>
            </button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-danger rounded-5" onClick={(evt) => props.onQuantityRemove(evt)}>
              <span>Remove</span>
            </button>
          </div>
        </div>
  );
}

export default CartItem;