import React, { useRef, useState } from 'react';
import Input from '../../UI_Food/Input';
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const eneredAmount = amountInputRef.current.value;
        const eneredAmountNumber = +eneredAmount;

        if (eneredAmount.trim().length === 0 || eneredAmountNumber < 1 || eneredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(eneredAmountNumber);
    };
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5). </p>}
    </form>
};
export default MealItemForm;