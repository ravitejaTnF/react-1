import React from "react";
import Button from "../Button/Button";
import styles from "./Adduser.module.css";
import { useState,useRef } from "react";
import Errormodal from "../Errormodal/Errormodal";
const Adduser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [username,setUsername] = useState('');
  // const [age,setAge] = useState('');
  const [error,setError] = useState(false);
  const [errorText,setErrorText] = useState('');
  // const usernameHandler = (event) => {
  //   setUsername(event.target.value);
  // };
  // const ageHandler = (event) => {
  //   setAge(event.target.value);
  // };
  const sendFormData = () => {
    const usernameRef = nameInputRef.current.value;
    const ageRef = ageInputRef.current.value;
    if(usernameRef.trim().length == 0 || ageRef.trim().length == 0){
      setErrorText({title:'Empty Inputs Found',message:'Please enter valid input data, Non-empty values'});
      setError(true);
      return;
    }
    if(ageRef < 0){
      setErrorText({title:'Negative age',message:'Age should be greater than 0'});
      setError(true);
      return;
    }
    setError(false);
    const userData = {
        name:usernameRef,
        age:ageRef,
        id: Math.random().toString()
    }
    props.updateData(userData);
    ageInputRef.current.value = '';
    nameInputRef.current.value = '';
  }
  const disableModal = () => {
    setError(false);
  }
  return (
    <div className="addUser">
      <div className={styles.userInfoBox}>
        <div className="unameBox">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="enter username"
            // value={usernameRef}
            // onChange={usernameHandler}
            ref={nameInputRef}
          />
        </div>
        <div className="ageBox">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="enter age"
            // value={ageRef}
            // onChange={ageHandler}
            ref={ageInputRef}
          />
        </div>
        <Button onClick={sendFormData}>Add user</Button>
      </div>
      {
        ( error && <Errormodal title={errorText.title} message={errorText.message} onClick={disableModal}/>)
      }
    </div>
  );
};

export default Adduser;
