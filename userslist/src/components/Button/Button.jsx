import React from "react";
import styles from "../Button/Button.module.css";
const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`${styles.okayButton} btn btn-primary btn-sm px-5 mt-3`}
        type={props.type || "button"}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
