import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isloading,setload] = useState(false)
  const [submit,setsubmit] = useState(false)
  const [ischeckout,setcheck] = useState(false)

  const cartamount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasitems = cartCtx.items.length > 0;

  const addhandler = (item) => {
    cartCtx.additem({...item, amount:1})
  };
  const removehandler = (id) => {
    cartCtx.removeitem(id)
  };

  const cartItems = (
    <ul className="list-none text-2xl font-roboto text-black h-[20rem] overflow-y-scroll border-b-2 border-black">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removehandler.bind(null, item.id)}
          onAdd={addhandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const CheckoutHandler = () =>{
    setcheck(true);
  }

  const submitcheckout = async userdata =>{
    setload(true)
    setsubmit(false)
    await fetch('https://react-foodorder-3d110-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userdata,
        ordereditems: cartCtx.items
      })
    })
    setload(false)
    setsubmit(true)
    cartCtx.clearcart()
  }

  const buttonmodal = <div className="flex flex-row-reverse mt-2">
  <button
    className="bg-red-500 text-white rounded-xl p-2 text-sm lg:text-base font-roboto font-bold shadow-sm shadow-black hover:-translate-y-1 duration-200 "
    onClick={props.onClose}
  >
    Close
  </button>
  {hasitems && (
    <button className="mr-5 bg-green-500 text-white rounded-xl p-2 text-sm lg:text-base font-roboto font-bold shadow-sm shadow-black hover:-translate-y-1 duration-200" onClick={CheckoutHandler}>
      Order
    </button>
  )}
  </div>

  const cartcontent = <React.Fragment>
    {cartItems}
      <div className="h-10 mt-5">
        <span className="mr-5">Total Amount</span>
        <span className="text-black font-bold">{cartamount}</span>
      </div>
      
      <div className="w-full border border-black border-b-4 border-t-0" />
      {ischeckout && <Checkout onCancel={props.onClose} onConfirm={submitcheckout}/>}
      {!ischeckout && buttonmodal}
  </React.Fragment>

  const submitcontent = <div className="flex flex-col items-center">
    <p>Your order has been submitted</p>
    <button
    className="bg-red-500 text-white rounded-xl p-2 text-sm lg:text-base font-roboto font-bold shadow-sm shadow-black hover:-translate-y-1 duration-200 "
    onClick={props.onClose}
  >
    Close
  </button>
  </div>

  return (
    <Modal onCloses={props.onClose}>
      {!submit && cartcontent}
      {!isloading && submit && submitcontent}
    </Modal>
  );
};

export default Cart;
