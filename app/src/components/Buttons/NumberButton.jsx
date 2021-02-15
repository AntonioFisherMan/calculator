import React from 'react'
import { CalculatorContext } from '../../context/CalculatorProvider'
import './style.css'


export const NumberButton = ({ number }) => {
        const { handleSetNumber } = React.useContext(CalculatorContext)
        return (

                <button className="btn" onClick={() => handleSetNumber(number)} >
                        {number}
                </button>

        )
}
