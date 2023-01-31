import React from "react";
import styles from "./Allusers.module.css";
const Allusers = (props) => {
  const usersList = props.users.map((item) => {
    return (
      <p className={styles.infoBox} key={item.id}>
        {item.name} is {item.age} years old..!
      </p>
    );
  });
  return <div>{usersList}</div>;
};
export default Allusers;
