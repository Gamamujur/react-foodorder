import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.css";

const MealItemForm = (props) => {
  const amountref = useRef();
  const [amountvalid, setamountval] = useState(true);

  const submithandler = (event) => {
    event.preventDefault();
    const enteredamount = amountref.current.value;
    const enteredamountnum = +enteredamount;

    if (
      enteredamount.trim().length === 0 ||
      enteredamountnum < 1 ||
      enteredamountnum > 5
    ) {
      setamountval(false);
      return;
    }

    props.onAddtoCart(enteredamountnum);
  };

  return (
    <form onSubmit={submithandler}>
      <Input
        ref={amountref}
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="bg-orange-700 rounded-xl p-2 text-sm lg:text-base font-roboto font-bold shadow-sm shadow-black hover:-translate-y-1 duration-700 mt-1">
        + Add
      </button>
      {!amountvalid && <p>Enter valid amount</p>}
    </form>
  );
};

export default MealItemForm;
