import React, { useRef, useState } from "react";

const isempty = (value) => value.trim() === "";
const isfivechar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formvalidity, setformvalid] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameref = useRef();
  const streetref = useRef();
  const postref = useRef();
  const cityref = useRef();

  const submithandler = (event) => {
    event.preventDefault();

    const enteredname = nameref.current.value;
    const enteredstreet = streetref.current.value;
    const enteredcity = cityref.current.value;
    const enteredpost = postref.current.value;

    const namevalid = !isempty(enteredname);
    const streetvalid = !isempty(enteredstreet);
    const cityvalid = !isempty(enteredcity);
    const postvalid = !isempty(enteredpost);

    setformvalid({
      name: namevalid,
      street: streetvalid,
      city: cityvalid,
      postal: postvalid,
    });

    const formisvalid = namevalid && streetvalid && postvalid && cityvalid;

    if (!formisvalid) {
      return;
    }

    props.onConfirm({
        name: enteredname,
        street: enteredstreet,
        city: enteredcity,
        postal: enteredpost
    })
  };

  return (
    <form onSubmit={submithandler}>
      <div className="flex flex-col mt-5 gap-4 mb-3 h-[40vh] overflow-y-auto">
        <div className="flex-wrap">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            className= {`border-solid border-2 ${!formvalidity.name ? 'border-red-500' : 'border-neutral-800'} ml-5 p-[2px] rounded-lg`}
            ref={nameref}
          />
          {!formvalidity.name && (
            <small>
              {" "}
              <p className="text-red-600">Please enter a valid name</p>
            </small>
          )}
        </div>

        <div className="flex-wrap">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            className={`border-solid border-2 ${!formvalidity.street ? 'border-red-500' : 'border-neutral-800'} ml-14 p-[2px] rounded-lg`}
            ref={streetref}
          />
          {!formvalidity.street && (
            <small>
              {" "}
              <p className="text-red-600">Please enter a valid street</p>
            </small>
          )}
        </div>

        <div className="flex-wrap">
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            className={`border-solid border-2 ${!formvalidity.postal ? 'border-red-500' : 'border-neutral-800'} ml-4 p-[2px] rounded-lg`}
            ref={postref}
          />
          {!formvalidity.postal && (
            <small>
              {" "}
              <p className="text-red-600">Please enter a valid postal code</p>
            </small>
          )}
        </div>

        <div className="flex-wrap">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            className={`border-solid border-2  ${!formvalidity.postal ? 'border-red-500' : 'border-neutral-800'} ml-16 p-[2px] rounded-lg`}
            ref={cityref}
          />
          {!formvalidity.city && (
            <small>
              {" "}
              <p className="text-red-600">Please enter a valid city</p>
            </small>
          )}
        </div>

        <div className="flex-wrap">
          <button className="bg-green-500 text-white rounded-xl p-2 text-sm lg:text-base font-roboto font-bold shadow-sm shadow-black hover:-translate-y-1 duration-200 mx-2">
            Confirm Order
          </button>

          <button
            className="bg-red-500 text-white rounded-xl p-2 text-sm lg:text-base font-roboto font-bold shadow-sm shadow-black hover:-translate-y-1 duration-200 mx-2"
            onClick={props.onCancel}
          >
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
