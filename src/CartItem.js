import { useState } from "react"; 

function CartItem(){

  const [ itemName, setItemName ] = useState("Hat");

  return(
    <div className="container">
      <h1>{itemName}</h1>
      <div className="row mt-3">
        <div className="col-md-3">
          <input type="text" className="form-control" value={itemName} onChange={(evt) => setItemName(evt.currentTarget.value)} />
        </div>
        <div className="col-md-3">
          <span>2</span>
        </div>
        <div className="col-md-3">
            <button className="btn btn-primary">
              <span>Add</span>
            </button>
        </div>
        <div className="col-md-3">
            <button className="btn btn-secondary">
              <span>Remove</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
