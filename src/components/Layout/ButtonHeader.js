import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../asset/CartIcon";
import CartContext from "../../store/cart-context";

const ButtonHeader = (props) => {
  const cartctx = useContext(CartContext);
  const numberofcart = cartctx.items.reduce((curnumber, item) => {
    return curnumber + item.amount;
  }, 0);

  const {items} = cartctx



  const [animclas, setanim] = useState(false);

  const animclass = animclas ? `-translate-y-1` : ``;

  useEffect(() => {
    if (items.length ===0){
      return
    }
    setanim(true);

    const timeout = setTimeout(()=>{
      setanim(false)
    },200)

    return () =>{
      clearTimeout(timeout)
    }
  }, [items]);

  return (
    <button
      className={`bg-orange-200 font-roboto font-black text-[12pt] p-4 rounded-full w-fit drop-shadow-xl shadow-slate-400 transform hover:-translate-y-1 duration-300 shadow-inner flex justify-around items-center ${animclass}`}
      onClick={props.onClick}
    >
      <span className="w-7 h-7 mr-3">
        <CartIcon />
      </span>
      <span className="mr-3">Cart</span>
      <span className="rounded-xl bg-yellow-900 w-7 font-bold text-white">
        {numberofcart}
      </span>
    </button>
  );
};

export default ButtonHeader;
