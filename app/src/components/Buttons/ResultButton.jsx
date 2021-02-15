import React from 'react'
import { CalculatorContext } from '../../context/CalculatorProvider'
import './style.css'


export const ResultButton = () => {
        const { handleResult } = React.useContext(CalculatorContext)

        return (
                <button className="btn btnResult" onClick={() => handleResult()}>
                        =
                </button>
        )
}
