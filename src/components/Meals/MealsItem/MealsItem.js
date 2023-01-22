import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItemForm.css";


const MealsItem = (props) => {

  const cartCtx = useContext(CartContext)

  const price = `$ ${props.price.toFixed(2)}`;

  const addtocarthandler = amount =>{
    cartCtx.additem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className="flex">
      <div className="flex flex-col border-black border-b p-2 shadow-sm shadow-black mb-5 bg-orange-200 rounded-tl-2xl rounded-bl-2xl w-5/6">
        <h3 className="text-black font-cinzel font-bold text-xl">
          {props.name}
        </h3>
        <div className="italic text-black">{props.description}</div>
        <div className="text-green-700 font-bold">{price}</div>
      </div>
      <div className="flex items-center mb-5 bg-orange-200 rounded-tr-2xl rounded-br-2xl border-black border-b shadow-sm shadow-black p-2">
        <MealItemForm id={props.id} onAddtoCart={addtocarthandler}/>
      </div>
    </li>
  );
};

export default MealsItem;
