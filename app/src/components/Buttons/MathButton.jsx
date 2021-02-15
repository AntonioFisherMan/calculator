import React from 'react'
import { CalculatorContext } from '../../context/CalculatorProvider'
import './style.css'
import classNames from 'classnames'


export const MathButton = ({ value, classes }) => {
        debugger
        const { handleSetNumber } = React.useContext(CalculatorContext)
        return (

                <button className={classNames(classes === "none" ? "btn" : "btnMath")} disabled={classes === "none" ? true : false} onClick={() => handleSetNumber(value)}>
                        {value}
                </button>
        )
}
