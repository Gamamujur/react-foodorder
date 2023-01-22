import React, { Fragment } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="fixed w-full h-full z-20 bg-white/60" onClick={props.onCloses}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className="border border-solid modal rounded-xl relative overflow-y-auto h-fit">
      <div>{props.children}</div>
    </div>
  );
};

const portalel = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloses={props.onCloses} />, portalel)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalel
      )}
    </Fragment>
  );
};

export default Modal;
