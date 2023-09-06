import React from "react";
import classess from "./ErrorModal.module.css";
import Button from "../UI/Button/Button";

const ErrorModal = (props) => {
  return (
    <div className={classess.backdrop}>
      <div className={classess.modal}>
        <header className={classess.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classess.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classess.actions}>
          <Button>ZAMKNIJ</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
