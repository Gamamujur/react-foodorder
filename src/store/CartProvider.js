import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action) =>{
    if (action.type === 'ADD'){
        const updateamount = state.totalAmount + action.item.price * action.item.amount

        const existcartitemindex = state.items.findIndex(
            (item) => item.id ===action.item.id
        )

        const existcartitem = state.items[existcartitemindex]
        let updateitems

        if (existcartitem){
            const updateitem = {
                ...existcartitem,
                amount: existcartitem.amount + action.item.amount
            }
            updateitems = [...state.items]
            updateitems[existcartitemindex] = updateitem
        } else {
            updateitems = state.items.concat(action.item)
        }

        return {
            items: updateitems,
            totalAmount: updateamount
        }
    }

    if (action.type === 'REMOVE'){
        const existcartitemindex = state.items.findIndex(
            (item) => item.id ===action.id
        )

        const existingitem = state.items[existcartitemindex]
        const updatetotalamount = state.totalAmount - existingitem.price
        let updateditems

        if (existingitem.amount === 1){
            updateditems = state.items.filter(item => item.id !== action.id)
        } else {
            const updateditem = {...existingitem, amount: existingitem.amount - 1}
            updateditems = [...state.items]
            updateditems[existcartitemindex] = updateditem
        }

        return (
            {
                items: updateditems,
                totalAmount: updatetotalamount
            }
        )
    }

    if (action.type === 'CLEAR') {
        return defaultCartState
    }
    return defaultCartState
}

const CartProvider = (props) =>{
    const [cartstate,dispatchcart] = useReducer(cartReducer,defaultCartState)

    const additemhandler = (item) =>{
        dispatchcart({type: 'ADD', item: item})
    }

    const removeitemhandler = (id) =>{
        dispatchcart({type: 'REMOVE', id:id})
    }

    const clearcarthandler = () =>{
        dispatchcart({type: 'CLEAR'})
    }

    const cartContext = {
        items: cartstate.items,
        totalAmount: cartstate.totalAmount,
        additem: additemhandler,
        removeitem: removeitemhandler,
        clearcart: clearcarthandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider