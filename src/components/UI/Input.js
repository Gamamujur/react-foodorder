import classes from "./Input.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label
        htmlFor={props.input.id}
        className="mr-1 text-black font-roboto font-bold"
      >
        {props.label}
      </label>
      <input ref={ref} className="text-black" {...props.input} />
    </div>
  );
});

export default Input;
