import React from "react";
import Button from "../Button/Button";
import classes from "./Errormodal.module.css";
const Errormodal = (props) => {
  return (
    <div className={classes.parent}>
      <div className={classes.child}>
        <header>
          {props.title}
          <hr />
        </header>
        <div className="body">
          {props.message}
          <hr />
        </div>
        <footer>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default Errormodal;
