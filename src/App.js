import { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";




function App() {
  const [cartshow,setshowcart] = useState(false)

  const showcard = () =>{
    setshowcart(true)
  }

  const closecard=()=>{
    setshowcart(false)
  }
  return (
    <CartProvider>
      {cartshow &&<Cart onClose={closecard}/> }
      <div className="container w-screen h-screen">
        <Header onClick={showcard}/>
        <main>
          <Meals/>
        </main>
      </div>
      
    </CartProvider>
  );
}

export default App;
