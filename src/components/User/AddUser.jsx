import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [Username, setUserName] = useState("");
    const [Age, setAge] = useState("");
    const [error, setError] = useState();
    const submitHandler = (event) => {
        event.preventDefault();
        if (Username.trim().length === 0 || Age.trim().length === 0) {
            setError({ title: "Invalid Input", message: "Please enter a non-empty username and age" });
            return;
        }
        if (+Age < 1) {
            setError({ title: "Invalid Age", message: "Please enter a valid age (>1)" });
            return;
        }
        props.onAddUser(Username, Age);
        setUserName("");
        setAge("");
    }
    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" onChange={nameChangeHandler} value={Username} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={Age} />
                    <Button type="submit">AddUser</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;