import React from 'react';
import './Button.css'

function Button({change, setChange}) {

    const onClickHandlerIncrease = (e) => {
        setChange(change = change +1)
    }
    const onClickHandlerDecrease = (e) => {
        setChange(change = change -1)
    }
    const onClickHandlerReset = (e) => {
        setChange(change = 0)
    }

    return(
        <div className="buttons">
            <button className="button" onClick={onClickHandlerIncrease}>
                Increment
            </button>
            <button className="button" onClick={onClickHandlerDecrease}>
                Decrement
            </button>
            <button className="button" onClick={onClickHandlerReset}>
                Reset
            </button>
        </div>
    )
}
export default Button;